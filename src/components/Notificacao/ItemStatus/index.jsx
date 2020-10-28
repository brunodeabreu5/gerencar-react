import React from "react";
import "./index.css";
import "../../../styles/style.css";

import EditarStatus from "../../Botton/EditarStatus/index";

function ItemStatus() {
  return (
    <div className="item-status">
      <div className="statusveiculos">
        <div className="statusid">2</div>
        <div className="statusStatus">
          Em <br></br>Andamento
        </div>
        <div className="statusfuncionario">Rodrigo</div>
        <div className="statusPlaca">MNL-8385</div>
        <div className="statusEntrada">14/09/2020</div>
        <div className="botaoeditarstaus">
          <EditarStatus></EditarStatus>
        </div>
      </div>
      <div className="statusveiculos">
        <div class="statusid">5</div>
        <div class="statusStatuspronto">Pronto</div>
        <div class="statusfuncionario">Geraldo</div>
        <div class="statusPlaca">JYY-3665</div>
        <div class="statusEntrada">20/09/2020</div>
        <div className="botaoeditarstaus">
          <EditarStatus></EditarStatus>
        </div>
      </div>
      <div className="statusveiculos">
        <div className="statusid">8</div>
        <div className="statusStatuspeca">
          Esperando <br></br>peça
        </div>
        <div className="statusfuncionario">Rodrigo</div>
        <div className="statusPlaca">DDT-6434</div>
        <div className="statusEntrada">11/09/2020</div>
        <div className="botaoeditarstaus">
          <EditarStatus></EditarStatus>
        </div>
      </div>
      <div className="statusveiculos">
        <div class="statusid">10</div>
        <div class="statusStatusstrasado">Atrasado</div>
        <div class="statusfuncionario">Vinicius</div>
        <div class="statusPlaca">KOJ-1058</div>
        <div class="statusEntrada">01/09/2020</div>
      </div>
      <div className="statusveiculos">
        <div class="statusid">4</div>
        <div class="statusStatus">
          Em <br></br> Andamento
        </div>
        <div class="statusfuncionario">Rodrigo</div>
        <div class="statusPlaca">GLP-8790</div>
        <div class="statusEntrada">01/09/2020</div>
      </div>
      <div className="statusveiculos">
        <div class="statusid">11</div>
        <div class="statusStatuspronto">Pronto</div>
        <div class="statusfuncionario">Rodrigo</div>
        <div class="statusPlaca">NEW-4842</div>
        <div class="statusEntrada">06/09/2020</div>
      </div>
      <div class="statusveiculos">
        <div class="statusid">15</div>
        <div class="statusStatuspronto">
          No<br></br>aguardo
        </div>
        <div class="statusfuncionario"></div>
        <div class="statusPlaca">GLH-0724</div>
        <div class="statusEntrada">12/10/2020</div>
      </div>
    </div>
  );
}
export default ItemStatus;
