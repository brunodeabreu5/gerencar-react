import React from "react";
//biblioteca
import Popup from "reactjs-popup";
//estilização
import "./index.css";
//imagem
import iconseditar from "../../../Assets/icons/iconseditar.png";
//componentes
import TelaStatus from "../../TelaPopup/TelaStatus";

function EditarStatus() {
  return (
    <>
      <Popup
        trigger={
          <button className="meuBtn1">
            <img src={iconseditar} alt="Editar" />
          </button>
        }
        modal
      >
        <TelaStatus />
      </Popup>
    </>
  );
}
export default EditarStatus;
