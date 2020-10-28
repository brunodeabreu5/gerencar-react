import React from "react";
import "../../../styles/style.css";
import "./index.css";
import ItemStatus from "../ItemStatus";


function Notifica() {
  return (
    <div className="item-noti">
      <div className="statusservicos">
        <div className="servicosid">ID</div>
        <div className="servicosStatus">Status</div>
        <div className="servicosfuncionario">Nome</div>
        <div className="servicosPlaca">Placa</div>
        <div className="servicosEntrada">Entrada</div>
      </div>
      <ItemStatus></ItemStatus>
    </div>
  );
}
export default Notifica;
