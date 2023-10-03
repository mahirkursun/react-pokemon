import React from "react";
import "../style/card-list.scss";

const CardList = ({ pokemons }) => {
  return (
    <div className="card-pokemon">
      {pokemons.map((pokemon) => (
        <div>
          <div className="pokemon">
            <img
              src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
              alt={pokemon.name}
            />
          </div>
          <h2>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CardList;
//
