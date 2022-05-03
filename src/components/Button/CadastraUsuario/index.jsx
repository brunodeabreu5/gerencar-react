import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Usuario from "../../../Assets/icons/cadastraUsuario.png";
import CriarCliente from "../../TelaPopup/CriarCliente";

function CadastraUsuario() {
  return (
    <>
      <div className="cadastroNome">
          <CriarCliente></CriarCliente>
      </div>
      
    </>
  );
}
export default CadastraUsuario;
