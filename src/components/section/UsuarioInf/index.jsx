import React from "react";
import "./index.css";
import MenuPesquisa from "../../Button/MenuPesquisa";
import CadastraUsuario from "../../Button/CadastraUsuario";

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
        <div className="statuscliente">
          <div className="stnome">
            <div className="nomedocliente">Nome</div>
            <div className="resultadocliente">Pedro da Silva</div>
            <div className="resultadocliente">João gomes</div>
          </div>
          <div>
            <div className="nomedocliente">CPF</div>
            <div className="resultadocliente">611.276.890-96</div>
            <div className="resultadocliente">182.097.840-05</div>
          </div>
          <div>
            <div className="nomedocliente">Data</div>
            <div className="resultadocliente">20/04/2020</div>
            <div className="resultadocliente">23/06/2020</div>
          </div>
          <div>
            <div className="nomedocliente">Telefone</div>
            <div className="resultadocliente">(45) 99324-5234</div>
            <div className="resultadocliente">(45) 99456-3457</div>
          </div>
          <div>
            <div className="nomedocliente">Veiculos</div>
            <div className="resultadocliente">2 veiculos</div>
            <div className="resultadocliente">1 veiculos</div>
          </div>
        </div>
      </div>
      <CadastraUsuario />
    </div>
  );
}
export default UsuarioInfo;
