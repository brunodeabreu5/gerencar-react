import React from "react";

import { Link } from 'react-router-dom';
import "./index.css";

function MenuLateral() {
  return (
    <nav className="navMenu">
    <Link to="/cadastroClientes"><a>Clientes</a></Link>
    <Link ><a>Blog</a></Link>
    <Link><a >Work</a></Link>
    <Link><a >About</a></Link>
    </nav>
  );
}

export default MenuLateral;
