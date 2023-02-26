import React from "react";
import { context } from "../../context/AppContext";
import "./FavoritePoke.css";

function FavoritePoke() {
  const appValue = React.useContext(context);
  const handleDeletePoke = (id: number) => {
    console.log(id);
    appValue.deleteFromLiked && appValue.deleteFromLiked(id);
  };
  return (
    <div className="favorite__container">
      <div
        onClick={(e) => {
          document
            .getElementsByClassName("favorite__container")[0]
            .classList.remove("active");
        }}
        className="favorite__close position-absolute end-0 me-2"
      >
        <i className="bi bi-x fs-2"></i>
      </div>

      <div className="favorite__collections">
        <div className="favorite__header fs-3 mt-3 text-center fw-bold text-uppercase">
          my collection
        </div>
        {appValue.pokes?.map(
          (item) =>
            appValue.liked?.filter((likeItem) => likeItem === item.id).length !=
              0 && (
              <div className="favorite__item m-2 rounded d-flex flex-row justify-content-between align-items-center">
                <div className="favorite__item__content d-flex flex-row align-items-center">
                  <img
                    className="favorite__item__img"
                    src={item.sprites.front_default}
                    alt={item.id.toString()}
                  />
                  <p className="favorite__item__name my-0 fw-bold text-uppercase">
                    {item.name}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    handleDeletePoke(item.id);
                  }}
                  className="btn btn-danger me-4"
                >
                  Delete
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default FavoritePoke;
