import React from "react";
import axios from "axios";
import PokemonCollection from "../PokemonCollection/PokemonCollection";
import { context } from "../../context/AppContext";

interface Poke {
  name: string;
  url: string;
}

function ComChien() {
  // const [pokes, setPokes] = React.useState<Array<PokeFullAb>>([]);

  const appValue = React.useContext(context);
  const [nextUrl, setNextUrl] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const sended = React.useRef(true);

  const getPokes = async () => {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10"
    );
    // console.log(res.data);
    setNextUrl(res.data.next);

    res.data.results.forEach(async (poke: Poke) => {
      const pokeData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${poke.name}`
      );
      //https://pokeapi.co/api/v2/gender/{id or name}/
      // console.log(pokeData.data);

      // console.log(appValue.addPoke);

      appValue.addPoke && appValue.addPoke(pokeData.data);

      setLoading(false);
    });
  };

  React.useEffect(() => {
    sended.current && getPokes();
    sended.current = false;
    // getPokes();
  }, []);

  const handleLoadMore = async () => {
    setLoading(true);
    let res = await axios.get(nextUrl);
    setNextUrl(res.data.next);

    res.data.results.forEach(async (poke: Poke) => {
      const pokeData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${poke.name}`
      );
      // console.log(pokeData.data);
      // setPokes((p) => [...p, pokeData.data]);
      appValue.addPoke && appValue.addPoke(pokeData.data);
      setLoading(false);
    });
  };

  return (
    <div className="App">
      <div className="container text-center">
        <PokemonCollection />
        {loading ? (
          <button
            className="btn btn-danger my-4 text-capitalize"
            disabled
            onClick={handleLoadMore}
          >
            loading
          </button>
        ) : (
          <button
            className="btn btn-danger my-4 text-capitalize"
            onClick={handleLoadMore}
          >
            load more
          </button>
        )}
      </div>
    </div>
  );
}

export default ComChien;
