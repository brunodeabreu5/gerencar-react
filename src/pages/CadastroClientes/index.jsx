import React from "react";
import "../../styles/style.css";

import MenuLateral from "../../components/Menu/MenuLateral/index";
import BarraCima from "../../components/Header/BarraCima/index";
import Status from "../../components/Notificacao/Status/index";

function CadastroCliente() {
  return (
    <div >
      <BarraCima></BarraCima>
      <div className="Noti">
      <MenuLateral></MenuLateral>
      <Status></Status>
      </div>
    </div>
  );
}

export default CadastroCliente;