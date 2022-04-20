import React from "react";
//estilos
import "../../../styles/style.css";
import "./index.css";

//componetes
import NomeLogo from "../../Titulos/NomeLogo/index";
import BarraStatus from "../BarraStatus/ImgUsuario/index";

function BarraCima() {
  return (
    <div className="header-index">
      <NomeLogo />
      <BarraStatus />
    </div>
  );
}
export default BarraCima;
