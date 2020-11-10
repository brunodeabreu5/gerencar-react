import React from "react";
import "../../../styles/style.css";
import "./index.css";

import {Link } from "react-router-dom";

function MenuLateral() {
  return (
    <aside>
      <ul>
        <nav className="menuLateral">
          <Link className="link" to="/CadastroClientes">Clientes</Link>
          <Link className="link" to="/Login">Serviços</Link>
          <Link className="link" to="/Login">Veículos</Link>
          <Link className="link" to="/Login">Produtos</Link>
          <Link className="link" to="/Login">Relatório</Link>
          <Link className="link" to="/Login">Estoque</Link>
        </nav>
      </ul>
    </aside>
  );
}

export default MenuLateral;
