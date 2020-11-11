import React from "react";

//componentes
import MenuLateral from "../../components/Menu/MenuLateral/index";
import BarraCima from "../../components/Header/BarraCima/index";
import Status from "../../components/Notificacao/Status/index";

function Main() {
  return (
    <>
      <BarraCima />
      <div className="Noti">
        <MenuLateral />
        <Status texto="Serviços em andamentos" />
       
      </div>
    </>
  );
}

export default Main;
