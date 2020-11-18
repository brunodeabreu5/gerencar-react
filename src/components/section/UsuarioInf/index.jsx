import React from "react";
import "./index.css";

function UsuarioInfo() {
  return (
    <div className="container">
      <div class="itemform">
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
      </div>

      <div className="item-buscacliente">
      <div className="statuscliente">
                        <div className="nomedocliente">Nome
                            <div className="resultadocliente">Pedro da Silva</div>
                            <div className="resultadocliente">João gomes</div>
                        </div>
                        <div className="cpfcliente">CPF
                            <div className="resultadocliente">611.276.890-96</div>
                            <div className="resultadocliente">182.097.840-05</div>
                        </div>
                        <div className="datacliente">Data
                            <div className="resultadocliente">20/04/2020</div>
                            <div className="resultadocliente">23/06/2020</div>
                        </div>
                        <div className="dataTelefone">Telefone
                            <div className="resultadocliente">(45) 99324-5234</div>
                            <div className="resultadocliente">(45) 99456-3457</div>
                        </div>
                        <div className="dataVeiculos">Veiculos
                            <div className="resultadocliente">2 veiculos</div>
                            <div className="resultadocliente">1 veiculos</div>
                        </div>
                    </div>
      </div>
    </div>
  );
}
export default UsuarioInfo;
