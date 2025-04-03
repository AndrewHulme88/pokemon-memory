import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [displayedPokemon, setDisplayedPokemon] = useState([]);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  useEffect(() => {
    if (pokemonData.length > 0) {
      updateDisplayedPokemon();
    }
  }, [score, pokemonData]);

  const fetchPokemonData = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
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
      setDisplayedPokemon(shuffleArray(detailedPokemonData).slice(0, 10));
    } catch (error) {
      console.error("Error fetching Pokemon data: ", error);
    }
  };

  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffldArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const updateDisplayedPokemon = () => {
    setDisplayedPokemon(shuffleArray(pokemonData).slice(0, 10));
  };

  const handleCardClick = (pokemon) => {
    if (clickedPokemon.includes(pokemon.id)) {
      setScore(0);
      setClickedPokemon([]);
    } else {
      const newScore = score + 1;
      setClickedPokemon([...clickedPokemon, pokemon.id]);
      setScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
      }
      updateDisplayedPokemon();
    }
  };

  return (
    <>
      <Header score={score} highScore={highScore} />
      <div id="card-grid">
        {displayedPokemon.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} onClick={() => handleCardClick(pokemon)} />
        ))}
      </div>
    </>
  );
};

export default App;
