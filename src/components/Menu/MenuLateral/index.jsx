import React from "react";
import "../../../styles/style.css";
import "./index.css";

import {Link } from "react-router-dom";

function MenuLateral() {
  return (
    <aside>
      <ul>
        <nav className="menuLateral">
          <Link className="link" to="/cadastroClientes">Clientes</Link>
          <Link className="link" to="/login">Serviços</Link>
          <Link className="link" to="/login">Veículos</Link>
          <Link className="link" to="/login">Produtos</Link>
          <Link className="link" to="/login">Relatório</Link>
          <Link className="link" to="/login">Estoque</Link>
        </nav>
      </ul>
    </aside>
  );
}

export default MenuLateral;
