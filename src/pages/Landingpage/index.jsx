import React from "react";
import './index.css';
import Landingp from "../../components/Landingp/index";
import Formulario from "../../components/Formulario/index";


function Landingpage() {
  return (
    <>
    <div>
    <header class="cabezera"> <img class="logo" src="logo.png" alt="logo"/></header>
    </div>
    <section> <Landingp/> <Formulario/></section>
    </>
  );
}

export default Landingpage
