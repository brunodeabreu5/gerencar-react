import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function MenuPesquisa() {
  return (
    <div className="menuPesquisabotao">
      <Link className="botaopesquisa">Pesquisar</Link>
    </div>
  );
}

export default MenuPesquisa;
