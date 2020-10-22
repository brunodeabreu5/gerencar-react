import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "./components/menu/MenuLateral";
import MenuLateral from "./components/menu/MenuLateral";
import header from "./components/header/header";
import Menucadastrocliente from "./components/menu/Menucadastrocliente";

function App() {
  return (
    <div>
      <header></header>

      <MenuLateral></MenuLateral>
    </div>
  );
}

export default App;
