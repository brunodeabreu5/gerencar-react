import React from "react";
import logo from "./logo.svg";
import "./App.css";

import MenuLateral from "./components/Menu/MenuLateral/index";
import BarraCima from "./components/Header/BarraCima/index";
import Status from "./components/Notificacao/Status/index";

function App() {
  return (
    <>
      <BarraCima/>
      <div className="Noti">
        <MenuLateral/>
        <Status texto="Serviços em andamentos"/>
      </div>
    </>
  );
}

export default App;
