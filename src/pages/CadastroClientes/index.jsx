import React from "react";
//estilos
import "../../styles/style.css";
//componentes
import BarraCima from "../../components/Header/BarraCima/index";
import MenuLateral from "../../components/Menu/MenuLateral/index";



function CadastroCliente() {
  return (
    <div>
      <BarraCima/>
      <MenuLateral/>
    </div>
  );
}
export default CadastroCliente;
