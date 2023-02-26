// rafce
import React, { useState } from "react";
import { context } from "../../context/AppContext";
import { PokeFull, PokeFullAb } from "../../interface";
import PokemonItem from "../PokemonItem/PokemonItem";

// interface Props {
//   pokemons: PokeFullAb[] | undefined;
// }

function PokemonCollection() {
  // const { pokemons } = props;
  const appValue = React.useContext(context);
  // console.log(appValue.pokes);

  return (
    <div>
      <div className="collection-container row mx-0 justify-content-between">
        {appValue.pokes &&
          appValue.pokes.map((poke) => {
            return (
              <PokemonItem
                key={poke.id}
                pokeInfo={poke}
                // id={poke.id}
                // name={poke.name}
                // abilities={poke.abilities}
                // image={poke.sprites.front_default}
              />
            );
          })}
      </div>
    </div>
  );
}

export default PokemonCollection;
