import React from "react";
import "../style/card-list.scss";
import Card from "./Card";

const CardList = ({ pokemons }) => {
  return (
    
    <div className="card-list">



      {pokemons.map((pokemon) => (

        <Card key={pokemon.name}  pokemon={pokemon} />
       
      ))}
    </div>
  );
};

export default CardList;
//
