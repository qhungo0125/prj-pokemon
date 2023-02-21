import React from "react";
import { context } from "../../context/AppContext";
import "./FavoritePoke.css";

function FavoritePoke() {
  const appValue = React.useContext(context);
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
              <div className="favorite__item d-flex flex-row align-items-center">
                <img
                  className="favorite__item__img"
                  src={item.sprites.front_default}
                  alt={item.id.toString()}
                />
                <p className="favorite__item__name my-0 fw-bold text-uppercase">
                  {item.name}
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default FavoritePoke;
