//https://ddragon.leagueoflegends.com/cdn/img/champion/loading/MissFortune_0.jpg
import React from "react";
import ReactDOM from "react-dom/client";
import Champions from "./getChampions";
import "./style.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="championsContainer">
      <Champions />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
