import React from "react";

import "./index.css";

import { Link } from "react-router-dom";

function MenuLateral() {
  return (
   
      <ul>
        <nav className="menuLateral">
          <Link className="link" to="/cadastroClientes">
            Clientes
          </Link>
          <Link className="link" to="/login">
            Serviços
          </Link>
          <Link className="link" to="/login">
            Veículos
          </Link>
          <Link className="link" to="/login">
            Relatório
          </Link>
          <Link className="link" to="/login">
            Estoque
          </Link>
        </nav>
      </ul>
    
  );
}

export default MenuLateral;
