import React from "react";
//estilos
import "../../styles/style.css";
import "./index.css";
//componentes
import BarraCima from "../../components/Header/BarraCima/index";
import MenuLateral from "../../components/Menu/MenuLateral/index";
import UsuarioInfo from "../../components/section/UsuarioInf/index";

function CadastroCliente() {
  return (
    <div>
      <BarraCima/>
      <div className="item1">
      <MenuLateral/>
      <UsuarioInfo/>
      </div>
    </div>
  );
}
export default CadastroCliente;
