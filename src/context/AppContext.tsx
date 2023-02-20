import React from "react";

const context = React.createContext<AppContextValue>({});

interface Props {
  children: React.ReactNode;
}

interface AppContextValue {
  selectPokemon?: (pokeID: number) => void;
  closePokemon?: () => void;
  selectID?: number;
}

const AppContext = (props: Props) => {
  const { children } = props;
  // const [isDark, setDark]=React.useState(false)

  const [selectID, setSelectID] = React.useState(0);

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
  };

  return <context.Provider value={appValue}>{children}</context.Provider>;
};

export default AppContext;
export { context };
