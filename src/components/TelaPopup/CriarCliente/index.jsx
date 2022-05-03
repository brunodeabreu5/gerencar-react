import React from "react";

import "./index.css";

import Popup from "reactjs-popup";
import adicionarUsuario from "../../../Assets/icons/adicionarUsuario.png";
import FormCriar from "./FormCriar";


function CriarCliente(){
  return(
      <>
        <Popup trigger={
          <button className="adicionarUsuario">
            <img  className="addUsuario" src={adicionarUsuario} alt="Editar" />
          </button>
        } modal >
        <FormCriar/>
        </Popup>
      </>
  ); 

}

export default CriarCliente;