import React from "react";
import "./index.css";
import logo from "../../../Assets/CARRO-preto.png";

function logoLogin() {
  return (
    <div className="logoLogin">
      <a>
        <img src={logo} alt="Logo do Gerencar" />
      </a>
    </div>
  );
}

export default logoLogin;
