import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header__container d-flex justify-content-center position-relative py-4 mb-2">
      <div></div>
      <div className="header__content text-uppercase fs-3 fw-bold">
        Pokemon Shop
      </div>
      <div
        onClick={(e) => {
          document
            .getElementsByClassName("favorite__container")[0]
            .classList.add("active");
        }}
        className="header__cart position-absolute top-0 end-0 fs-3 rounded-circle p-2 d-flex flex-column justify-content-center"
      >
        <div className="header__cart__icon text-center">🛒</div>
        <div className="header__cart__content fs-5 text-capitalize">
          My favorite
        </div>
      </div>
    </div>
  );
}

export default Header;
