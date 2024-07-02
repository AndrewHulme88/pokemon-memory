import React from 'react';

const Card = ({ pokemon, onClick }) => {
  const imageUrl = pokemon.sprites && pokemon.sprites.front_default;

  return (
    <div className="card" onClick={onClick}>
      <div className="card-background"></div>
      <img className='pokemon-image' src={imageUrl || 'placeholder.jpg'} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
};

export default Card;
