import React from "react";
//estilos
import "../../../styles/style.css";
import "./index.css";

//componetes
import NomeLogo from "../../Titulos/NomeLogo/index";
import BarraStatus from "../BarraStatus/ImgUsuario/index";

function BarraCima() {
  return (
    <header className="header-index">
      <NomeLogo />
      <BarraStatus />
    </header>
  );
}
export default BarraCima;
