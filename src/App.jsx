import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const fetchPokemonData = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error("Error fetching Pokemon data: ", error);
    }
  };

  const handleCardClick = (pokemon) => {
    setScore((prevScore) => prevScore + 1);
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
        {pokemonData.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} onClick={() => handleCardClick(pokemon)} />
        ))}
      </div>
    </>
  )
}

export default App
