import React from "react";
import "./index.css";
import MenuPesquisa from "../../Button/MenuPesquisa";
import CadastraUsuario from "../../Button/CadastraUsuario";
import ClientePesquisa from "../../Clientes/ClientePesquisa/index";

function UsuarioInfo() {
  return (
    <div className="container">
      <div className="itemform">
        <di className="menuPesquisa">
          <label className="menubusca">Nome do cliente:</label>
          <input className="inputlogin1" type="text" id="fname1" name="fname" />
        </di>
        <div className="menuPesquisa">
          <label className="menubusca">CPF:</label>
          <input className="inputlogin1" type="text" name="fname" />
        </div>
        <div className="menuPesquisa">
          <label className="menubusca">Ordem por:</label>
          <select className="opcao1">
            <option value="Nome">Nome</option>
            <option value="CPF">CPF</option>
            <option value="Data">Data</option>
          </select>
        </div>
        <MenuPesquisa />
      </div>
      <div className="item-buscacliente">
        <ClientePesquisa />
      </div>
      <CadastraUsuario />
    </div>
  );
}
export default UsuarioInfo;
