import React from "react";
import "../../../styles/style.css";
import "./index.css";

import Notifica from "../Notifica/index";

function Status(props) {
  return (
    <section>
      <div className="item">{props.texto}</div>
      <Notifica/>
    </section>
  );
}
export default Status;
