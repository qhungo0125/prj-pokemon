import React from "react";
import { PokeFullAb } from "../interface";

const context = React.createContext<AppContextValue>({});

interface Props {
  children: React.ReactNode;
}

interface AppContextValue {
  selectPokemon?: (pokeID: number) => void;
  closePokemon?: () => void;
  selectID?: number;
  chooseToAddLiked?: (pokeID: number) => void;
  liked?: Array<number>;
  pokes?: Array<PokeFullAb>;
  addPoke?: (poke: PokeFullAb) => void;
  deleteFromLiked?: (pokeID: number) => void;
}

const AppContext = (props: Props) => {
  const { children } = props;

  const [pokes, setPokes] = React.useState<Array<PokeFullAb>>([]);

  const [selectID, setSelectID] = React.useState(-1);
  const [liked, setLiked] = React.useState<Array<number>>([]);

  const addPoke = (poke: PokeFullAb) => {
    console.log("add ", poke);

    setPokes((p) => [...p, poke]);
  };

  const chooseToAddLiked = (pokeID: number) => {
    liked.filter((item) => item === pokeID).length === 0 &&
      setLiked([...liked, pokeID]);
  };

  const deleteFromLiked = (pokeID: number) => {
    setLiked(liked.filter((item) => item != pokeID));
  };

  const selectPokemon = (pokeID: number) => {
    console.log("poke id: ", pokeID);
    setSelectID(pokeID);
  };

  const closePokemon = () => {
    console.log("closed");
    setSelectID(-1);
  };

  const appValue = {
    selectPokemon,
    closePokemon,
    selectID,
    chooseToAddLiked,
    liked,
    pokes,
    addPoke,
    deleteFromLiked,
  };

  return <context.Provider value={appValue}>{children}</context.Provider>;
};

export default AppContext;
export { context };
