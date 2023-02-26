import React from "react";
import { context } from "../../context/AppContext";
import { PokeFullAb } from "../../interface";
import "./PokemonItem.css";

interface Props {
  // name: string;
  // image: string;
  // id: number;
  // abilities:
  //   | {
  //       name: string;
  //       ability: string;
  //     }[]
  //   | undefined;
  pokeInfo: PokeFullAb;
}

const PokemonItem = (props: Props) => {
  const { name, id, abilities, weight, height, base_experience } =
    props.pokeInfo;
  const image = props.pokeInfo.sprites.front_default;
  const appValue = React.useContext(context);

  return (
    <>
      {appValue.selectID === id && (
        <div className="pokemonItem__container position-fixed top-0 start-0 justify-content-center row align-items-center">
          <div className="pokemonItem w-50 h-50 position-relative d-flex flex-column justify-content-between bg-grey rounded align-items-center">
            <div
              onClick={(e) => {
                document
                  .getElementsByTagName("body")[0]
                  .classList.remove("noscroll");

                appValue.closePokemon && appValue.closePokemon();
              }}
              className="close__icon position-absolute end-0 m-2"
            >
              <i className="bi bi-x fs-2"></i>
            </div>
            <div className="row justify-content-center h-100 mt-4">
              <div className="h-50 d-flex flex-row justify-content-center align-items-center">
                <img
                  className="pokemon__img__select"
                  src={image}
                  alt="pokemon"
                />
              </div>

              <div className="h-50">
                <p className=" pokemon__name text-uppercase fs-3 fw-bold">
                  {name}
                </p>
                <p className="text-capitalize fs-6">
                  <span className="fw-bold">
                    abilities({abilities?.length})
                  </span>{" "}
                  {abilities
                    ?.map((ab: any, index: number) => {
                      return `${index + 1}. ${ab.ability.name}`;
                    })
                    .join("  ")}
                </p>
                <p className="text-capitalize fs-6">
                  <span className="fw-bold">height</span>
                  {" " + height}{" "}
                </p>
                <p className="text-capitalize fs-6">
                  <span className="fw-bold">weight</span>
                  {" " + weight}
                </p>
                <p className="text-capitalize fs-6">
                  <span className="fw-bold">base exp</span>
                  {" " + base_experience}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="pokemonItem d-flex flex-column justify-content-between col-md-2 bg-light bg-gradient rounded m-2 align-items-center p-4">
        <div className="row justify-content-center">
          <img
            style={{ height: "150px", width: "150px" }}
            className="m-2"
            src={image}
            alt="pokemon"
          />
          <p className=" pokemon__name text-uppercase fs-5 fw-bold">{name}</p>
        </div>

        <div className="d-flex flex-column align-items-center">
          <button
            onClick={(e) => {
              appValue.selectPokemon && appValue.selectPokemon(id);
            }}
            className="btn btn-success text-uppercase m-2"
          >
            More info
          </button>

          {appValue.liked &&
          appValue.liked.filter((item) => item === id).length != 0 ? (
            <div className="favorite__icon">
              <i
                className="bi bi-heart-fill fs-4 text-danger"
                onClick={(e) => {
                  appValue.deleteFromLiked && appValue.deleteFromLiked(id);
                }}
              ></i>
              <p className="text-capitalize my-0">Added</p>
            </div>
          ) : (
            <div className="favorite__icon">
              <i
                className="bi bi-heart-fill fs-4"
                onClick={(e) => {
                  appValue.chooseToAddLiked && appValue.chooseToAddLiked(id);
                }}
              ></i>
              <p className="text-capitalize my-0">Add to favorite</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PokemonItem;
