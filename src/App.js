import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/style.css";
import Routes from "./routes";

import MenuLateral from "./components/Menu/MenuLateral/index";
import BarraCima from "./components/Header/BarraCima/index";
import Status from "./components/Notificacao/Status/index";

function App() {
  return (
    <div>
      <Routes></Routes>
    </div>
  );
}
export default App;
