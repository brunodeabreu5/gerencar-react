import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "./components/menu/MenuLateral";
import MenuLateral from "./components/menu/MenuLateral";
import BarraCima from "./components/header/BarraCima";
import Menucadastrocliente from "./components/menu/Menucadastrocliente";

function App() {
  return (
    <div >
      <BarraCima></BarraCima>
      <MenuLateral></MenuLateral>
    </div>
  );
}

export default App;
