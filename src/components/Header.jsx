import React from 'react';

const Header = ({score, highScore}) => (
  <div id="header">
    <div id="header-left">
      <img src="src/assets/images/PokemonLogo.png" alt="Pokemon Logo" />
      <h1>Memory Game</h1>
      <p>Score points for each unique Pokemon you click.</p>
      <p>However, selecting the same Pokemon twice will reset your score!!</p>
    </div>
    <div id="header-right">
    <img className='pokeball' src="src/assets/images/Pokeball.png" alt="Pokeball" />
    <img className='pokeball' src="src/assets/images/Pokeball.png" alt="Pokeball" />
    <img className='pokeball' src="src/assets/images/Pokeball.png" alt="Pokeball" />
    <br />
      <span>
        Score: {score}
      </span>
      <br />
      <span>
        High Score: {highScore}
      </span>
      <br />
      <img className='pokeball' src="src/assets/images/Pokeball.png" alt="Pokeball" />
    <img className='pokeball' src="src/assets/images/Pokeball.png" alt="Pokeball" />
    <img className='pokeball' src="src/assets/images/Pokeball.png" alt="Pokeball" />
    </div>
  </div>
);

export default Header;
