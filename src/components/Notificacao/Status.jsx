import React from "react";
import "../css/style.css";

import Notifica from "./Notifica"

function Status() {
  return (
    <section>
      <div className="item">Serviços em andamentos</div>
      <Notifica></Notifica>
    
    </section>
  );
}
export default Status;
