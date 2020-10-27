import React from "react";
import "../css/style.css";

function ItemStatus(){
    return(
        <div className="item-status">
        <div className="statusveiculos">
          <div className="statusid">2</div>
          <div className="statusStatus">Em <br></br>Andamento</div>
            <div className="statusfuncionario">Rodrigo</div>
            <div className="statusPlaca">MNL-8385</div>
            <div className="statusEntrada">14/09/2020</div>
          </div>
        </div>
    );
}
export default ItemStatus;