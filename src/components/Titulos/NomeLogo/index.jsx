import React from "react";
import {Link} from "react-router-dom";
//estilo
import "./index.css";
//imagem
import Logo from "../../../Assets/CARRO-branco.png";

function NomeLogo() {
  return (
    <div className="logoIndex">
      <Link><img className="logoBranca" src={Logo} alt="logo"/></Link>
    </div>
  );
}
export default NomeLogo;
