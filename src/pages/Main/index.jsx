import React from "react";

//componentes
import BarraCima from "../../components/Header/BarraCima/index";
import Status from "../../components/Notificacao/Status/index";

import "../../styles/style.css";

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
