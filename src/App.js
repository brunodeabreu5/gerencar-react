import React from "react";
import logo from "./logo.svg";
import "./App.css";

import MenuLateral from "./components/Menu/MenuLateral/index";
import BarraCima from "./components/Header/BarraCima/index";
import Status from "./components/Notificacao/Status/index";

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
