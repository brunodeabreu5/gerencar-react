import React from "react";
import { Link } from "react-router-dom";
//estilo
import "./index.css";
//imagem
import Logo from "../../../Assets/CARRO-branco.png";

function NomeLogo() {
  return (
    <div className="logoIndex">
      <Link to="/main" className="botaoInicial">
        <img className="logoBranca" src={Logo} alt="logo" />
        <h2>Gerencar</h2>
      </Link>
    </div>
  );
}
export default NomeLogo;
