import React from "react";
//estilos
import "../../../styles/style.css";
import "./index.css";

//componetes
import NomeLogo from "../../Titulos/NomeLogo/index";
import BarraStatus from "../BarraStatus/ImgUsuario/index";
import MenuLateral from "../../Menu/MenuLateral";

function BarraCima() {
  return (
    <div className="header-index">
      <NomeLogo />
      <MenuLateral />
      <BarraStatus />
    </div>
  );
}
export default BarraCima;
