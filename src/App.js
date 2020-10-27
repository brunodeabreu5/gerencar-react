import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "./components/menu/MenuLateral";
import MenuLateral from "./components/menu/MenuLateral";
import BarraCima from "./components/header/BarraCima";
import Menucadastrocliente from "./components/menu/Menucadastrocliente";
import Status from "./components/Notificacao/Status";

function App() {
  return (
    <div >
      <BarraCima></BarraCima>
      <div className="Noti">
      <MenuLateral></MenuLateral>
      <Status></Status>
      </div>
    </div>
  );
}

export default App;
