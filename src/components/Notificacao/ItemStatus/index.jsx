import React from "react";

import "./index.css";
import "../../../styles/style.css";
import { servicos } from "../../../servicos.json";
//componentes
import EditarStatus from "../../Button/EditarStatus/index";
import InfoVeiculo from "../../Button/StatusInformacao/index";
import EmAndamento from "../../StatusServicos/EmAndamento";


function ItemStatus() {
  const statusPronto = false;
  const statusPeca = false;
  const Statusstrasado = true;
  const statusEmdamento = true;

  return servicos.map((servico, key) => {
    return (
      <div className="statusveiculos">
        <div className="statusid">{servico.id}</div>
        <div
          className={
            servico.status == "em andamento"
              ? "statusStatus"
              : servico.status == "esperando peça"
              ? "statusStatuspeca"
              : servico.status == "atrasado"
              ? "statusStatusstrasado"
              : servico.status == "pronto"
              ? "statusStatuspronto"
              : "statusStatus"
          }
        >
          {servico.status == "em andamento"
            ? "Em Andamento"
            : servico.status == "pronto"
            ? "Pronto"
            : servico.status == "esperando peça"
            ? "esperando peça"
            : servico.status == "no aguardo"
            ? "No Aguardo"
            : "atrasado"}
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
