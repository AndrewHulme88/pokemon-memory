import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  useEffect(() => {
    if (pokemonData.length > 0) {
      setPokemonData(shuffleArray(pokemonData));
    }
  }, [score]);

  const fetchPokemonData = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      const pokemonDetailsPromises = data.results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        return pokemonResponse.json();
      });

      const detailedPokemonData = await Promise.all(pokemonDetailsPromises);
      setPokemonData(detailedPokemonData);
    } catch (error) {
      console.error("Error fetching Pokemon data: ", error);
    }
  };

  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray
  }

  const handleCardClick = (pokemon) => {
    if (clickedPokemon.includes(pokemon.id)) {
      setScore(0);
      setClickedPokemon([]);
    } else {
      setClickedPokemon([...clickedPokemon, pokemon.id]);
      setScore(score + 1);
      if (score + 1 > highScore) {
        setHighScore(score + 1);
      }
    }
  };

  return (
    <>
      <div id="header">
        <div id="header-left">
          <h1>Pokemon Memory Game</h1>
          <p>Score points for each unique Pokemon you click.</p>
          <p>However, selecting the same Pokemon twice will reset your score!!</p>
        </div>
        <div id="header-right">
          <span>
            Score: {score}
          </span>
          <span>
            High Score: {highScore}
          </span>
        </div>
      </div>

      <div id="card-grid">
        {pokemonData.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} onClick={() => handleCardClick(pokemon)} />
        ))}
      </div>
    </>
  )
}

export default App
