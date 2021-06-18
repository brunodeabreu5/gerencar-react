import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Usuario from "../../../Assets/icons/cadastraUsuario.png";

function CadastraUsuario() {
  return (
    <>
      <div className="cadastroNome">
        <Link>
          <img className="addUsuario" src={Usuario} alt="cadastra" />
        </Link>
      </div>
      
    </>
  );
}
export default CadastraUsuario;
