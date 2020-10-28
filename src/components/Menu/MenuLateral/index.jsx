import React from "react";
import "../../../styles/style.css";
import "./index.css";


function MenuLateral() {
  return (
    <aside>
      <ul>
        <nav className="menuLateral">
          <a href="">
            <div className="link">Clientes</div>
          </a>
          <a href="">
            <div className="link">Serviços</div>
          </a>
          <a href="">
            <div className="link">Veículos</div>
          </a>
          <a href="">
            <div className="link">Produtos</div>
          </a>
          <a href="">
            <div className="link">Relatório</div>
          </a>
          <a href="">
            <div className="link">Estoque</div>
          </a>
        </nav>
      </ul>
    </aside>
  );
}

export default MenuLateral;
