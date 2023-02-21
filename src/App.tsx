import React from "react";
import "./App.css";
import ComChien from "./components/ComChien/ComChien";
import FavoritePoke from "./components/FavoritePoke/FavoritePoke";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="main__container">
      <Header />
      <FavoritePoke />
      <ComChien />;
    </div>
  );
}

export default App;
