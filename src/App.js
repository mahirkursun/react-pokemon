import { useEffect, useState } from "react";
import "./style/app.scss";
import Navi from "./components/Navi";
import CardList from "./components/CardList";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons =async () => {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=20";
    const response =await fetch(url);
    const data =await response.json();
    // console.log(data.results);
    setPokemons(data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return <>
    <div className="app">
        <Navi/>
        <CardList pokemons={pokemons}/>
    </div>
  </>;
}

export default App;
