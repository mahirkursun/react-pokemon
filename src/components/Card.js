import React from "react";

const Card = ({ pokemon}) => {

  
  return (
    <div className="pokemon-info">
      <div  className="pokemon-card">
        <img
          src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          alt={pokemon.name}
        />
      </div>
      <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      <h1>{pokemon.id}</h1>
    </div>
  );
};

export default Card;
