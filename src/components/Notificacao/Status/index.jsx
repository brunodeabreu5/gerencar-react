import React from "react";
import "../../../styles/style.css";
import "./index.css";

import Notifica from "../Notifica/index";

function Status() {
  return (
    <section>
      <div className="item">Serviços em andamentos</div>

      <Notifica></Notifica>
    </section>
  );
}
export default Status;
