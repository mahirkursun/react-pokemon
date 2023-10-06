import { useEffect, useState } from "react";
import "./style/app.scss";
import Navi from "./components/Navi";
import CardList from "./components/CardList";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const getPokemons = async () => {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=1292";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.results);
    setPokemons(data.results);

  };

  const handleChange = (event) => {
    const dataFind = event.target.value.toLowerCase();

    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(dataFind)
    );

    setFilteredPokemons(filteredPokemons);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <div className="app">
        <Navi handleChange={handleChange} />
        <CardList
          pokemons={filteredPokemons.length > 0 ? filteredPokemons : pokemons}
        />
      </div>
    </>
  );
}

export default App;
