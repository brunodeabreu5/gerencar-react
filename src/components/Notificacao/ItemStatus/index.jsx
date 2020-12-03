import React from "react";

import "./index.css";
import "../../../styles/style.css";
import { servicos } from "../../../servicos.json";
//componentes
import EditarStatus from "../../Button/EditarStatus/index";
import InfoVeiculo from "../../Button/StatusInformacao/index";
import ServicoStatusLabel from "../../ServicoStatusLabel";

function ItemStatus() {
  return servicos.map((servico, key) => {
    return (
      <div className="statusveiculos">
        <div className="statusid">{servico.id}</div>
        <ServicoStatusLabel status={servico.status} />
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
