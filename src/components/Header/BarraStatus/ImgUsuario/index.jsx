import React from "react";

//estilo
import "./index.css";
//imagem
import Usuario from "../../../../Assets/usuario.jpg";
//componetes
import InfUsuario from "../InfUsuario/index";

function BarraStatus() {
  return (
    <di className="imagemUsuario">
      <img src={Usuario} alt="usuario" />
      <InfUsuario/>
    </di>
  );
}

export default BarraStatus;
