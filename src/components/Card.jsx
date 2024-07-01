import React from 'react';

const Card = ({ pokemon, onClick }) => {
  const imageUrl = pokemon.sprites && pokemon.sprites.front_default;

  return (
    <div className="card" onClick={onClick}>
      <img src={imageUrl || 'placeholder.jpg'} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
};

export default Card;
