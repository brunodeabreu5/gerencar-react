import React from "react";
import {clientes} from "../../../clientes.json";
import "../../section/UsuarioInf/index.css";
import "./index.css";

function ClientePesquisa() {
  return clientes.map((cliente, key) => {
    return (
      <div className="statuscliente ">
        <div className="stnome">
          <div className="nomedocliente ">Nome</div>
          <div className="resultadocliente ">{cliente.nome}</div>
        </div>
        <div >
          <div className="nomedocliente">CPF</div>
        <div className="resultadocliente">{cliente.cpf}</div>
        </div>
        <div >
          <div className="nomedocliente">Data</div>
          <div className="resultadocliente ">{cliente.data}</div>
        </div>
        <div className="formDiv">
          <div className="nomedocliente">Telefone</div>
          <div className="resultadocliente ">{cliente.telefone}</div>
        </div>
        <div className="formDiv">
          <div className="nomedocliente">Veiculos</div>
          <div className="resultadocliente ">{cliente.veiculos}</div>
        </div>
      </div>
    );
  
  });
}

export default ClientePesquisa;
