import React from "react";
import "./index.css";

function ServicoStatusLabel(prosp) {
  switch (prosp.status) {
    case "em_andamento":
      return <span className="status-label em_andamento">Em Andamento</span>;
    case "esperando_peca":
      return <span className="status-label esperando_peca">Esperando Peça</span>;
    case "pronto":
      return <span className="status-label pronto">Pronto</span>;
    case "atrasado":
      return <span className="status-label atrasado">Atrasado</span>;
    case "aguardando":
      return <span className="status-label aguardando">Aguardando</span>;
    default:
      return <span className="status-label">Não indentificado</span>;
  }
}
export default ServicoStatusLabel;
