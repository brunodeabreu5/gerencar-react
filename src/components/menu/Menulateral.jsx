import React from "react";
import "../css/style.css";

function MenuLateral() {
  return (
    <aside>
      <ul>
        <nav id="menuLateral">
          <a href="">
            <div class="link">Clientes</div>
          </a>
          <a href="">
            <div class="link">Serviços</div>
          </a>
          <a href="">
            <div class="link">Veículos</div>
          </a>
          <a href="">
            <div class="link">Produtos</div>
          </a>
          <a href="">
            <div class="link">Relatório</div>
          </a>
          <a href="">
            <div class="link">Estoque</div>
          </a>
        </nav>
      </ul>
    </aside>
  );
}

export default MenuLateral;
