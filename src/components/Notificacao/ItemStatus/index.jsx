import React from "react";
import { createContext } from "react";
import "./index.css";
import "../../../styles/style.css";
import { servicos } from "../../../servicos.json";
//componentes
import EditarStatus from "../../Button/EditarStatus/index";
import InfoVeiculo from "../../Button/StatusInformacao/index";
import EmAndamento from "../../StatusServicos/EmAndamento";
import Pronto from "../../StatusServicos/Pronto";

function ItemStatus() {
  return servicos.map((servico, key) => {
    return (
      <div className="statusveiculos">
        <div class="statusid">{servico.id}</div>
        <div className="{status.cor}">

          
        </div>
        <div class="statusfuncionario">{servico.nome}</div>
        <div class="statusPlaca">{servico.placa}</div>
        <div class="statusEntrada">{servico.entrada}</div>
        <EditarStatus />
        <InfoVeiculo />
      </div>
    );
  });
}
export default ItemStatus;
