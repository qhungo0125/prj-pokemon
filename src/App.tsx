import react from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import axios from "axios";
import PokemonCollection from "./components/PokemonCollection/PokemonCollection";
import { PokeFull, PokeFullAb } from "./interface";

interface Poke {
  name: string;
  url: string;
}

function App(){
  const [pokes, setPokes] = react.useState< Array<PokeFullAb> >([]);
  const [nextUrl, setNextUrl] = react.useState("");
  const [loading, setLoading] = react.useState(true);
  const sended = react.useRef(true)

  const getPokes = async () => {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10"
    );
    console.log(res.data);
    setNextUrl(res.data.next);

    res.data.results.forEach(async (poke: Poke) => {
      const pokeData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${poke.name}`
      );
      console.log(pokeData.data);
      setPokes((p) => [...p, pokeData.data]);
      setLoading(false);
    });
  };

  react.useEffect(() => {
    sended.current&& getPokes();
    sended.current=false
  }, []);

  const handleLoadMore = async () => {
    setLoading(true);
    let res = await axios.get(nextUrl);
    setNextUrl(res.data.next);

    res.data.results.forEach(async (poke: Poke) => {
      const pokeData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${poke.name}`
      );
      console.log(pokeData.data);
      setPokes((p) => [...p, pokeData.data]);
      setLoading(false);
    });
  };

  return (
    <div className="App">
      <div className="container text-center">
        <PokemonCollection pokemons={pokes} />
        {loading ? (
          <button className="btn btn-danger" disabled onClick={handleLoadMore}>
            loading
          </button>
        ) : (
          <button className="btn btn-danger" onClick={handleLoadMore}>
            load more
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
