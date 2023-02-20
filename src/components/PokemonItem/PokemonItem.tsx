import React from "react";
import { context } from "../../context/AppContext";

interface Props {
  name: string;
  image: string;
  id: number;
  abilities:
    | {
        name: string;
        ability: string;
      }[]
    | undefined;
}

const PokemonItem = (props: Props) => {
  const { name, image, id, abilities } = props;
  const appValue = React.useContext(context);

  return (
    <section className="pokemonItem col-md-2 bg-light rounded m-2 align-items-center p-4">
      <img className="col" src={image} alt="pokemon" />
      <p className="col pokemon__name text-uppercase fs-5 fw-bold">{name}</p>
      <p className="col">
        abilities:{" "}
        {abilities
          ?.map((ab: any, index: number) => {
            return ab.ability.name;
          })
          .join("; ")}
      </p>

      <button
        onClick={(e) => {
          appValue.selectPokemon && appValue.selectPokemon(id);
        }}
        className=" col btn btn-success text-uppercase"
      >
        More info
      </button>
    </section>
  );
};

export default PokemonItem;
