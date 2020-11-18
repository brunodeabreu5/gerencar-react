import React from "react";

//estilo
import "./index.css";
//imagem
import Usuario from "../../../../Assets/usuario.jpg";
//componetes

function BarraStatus() {
  return (
    <di className="imagemUsuario">
      <img className="imagem" src={Usuario} alt="usuario" />
      <div className="textoStatus">
        <p>Bruno De Abreu</p>
        <p>Mecanico</p>
      </div>
    </di>
  );
}

export default BarraStatus;
