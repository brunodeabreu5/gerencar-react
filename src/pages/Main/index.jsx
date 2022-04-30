import React from "react";

//componentes
import MenuLateral from "../../components/Menu/MenuLateral/index";
import BarraCima from "../../components/Header/BarraCima/index";
import Status from "../../components/Notificacao/Status/index";

function Main() {
  return (
    <div className="root">
      <BarraCima />
      <div className="Noti">
       
        <Status texto="Serviços em andamentos" />
      </div>
    </div>
  );
}
export default Main;
