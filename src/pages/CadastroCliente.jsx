import React from "react";
import logo from "./logo.svg";
import "./App.css";



function CadastroCliente() {
  return (
    <div >
      <BarraCima></BarraCima>
      <div className="Noti">
      <MenuLateral></MenuLateral>
      <Status></Status>
      </div>
    </div>
  );
}

export default CadastroCliente;