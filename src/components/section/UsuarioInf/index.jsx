import React from "react";
import "./index.css";

function UsuarioInfo() {
  return (
    <div className="container">
      <form class="itemform">
        <di class="menuPesquisa">
          <label class="menubusca">Nome do cliente:</label>
          <input class="inputlogin1" type="text" id="fname1" name="fname" />
        </di>
        <div class="menuPesquisa">
          <label class="menubusca">CPF:</label>
          <input class="inputlogin1" type="text" name="fname" />
        </div>
        <div class="menuPesquisa">
          <label class="menubusca">Ordem por:</label>
          <select class="opcao1">
            <option value="Nome">Nome</option>
            <option value="CPF">CPF</option>
            <option value="Data">Data</option>
          </select>
        </div>
        <div class="menuPesquisabotao">
          <a id="botaopesquisa" type="text" href="">
            Pesquisar
          </a>
        </div>
      </form>

      <div class="item-buscacliente"></div>
    </div>
  );
}
export default UsuarioInfo;
