import React from "react";

import { Link } from 'react-router-dom';
import "./index.css";

function MenuLateral() {
  return (
    <nav className="navMenu">
      <Link to="/cadastroClientes">
        <a>Clientes</a>
      </Link>
      <Link>
        <a>Serviço</a>
      </Link>
      <Link>
        <a>Estoque</a>
      </Link>
      <Link>
        <a>Sobre</a>
      </Link>
    </nav>
  )
}

export default MenuLateral;
