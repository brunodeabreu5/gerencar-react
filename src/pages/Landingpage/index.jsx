import React from "react";
import './index.css';
import Landingp from "../../components/Landingp/index";
import Formulario from "../../components/Formulario/index";


function Landingpage() {
  return (
    <>
    <div>
    <header class="arriba"> <img class="cab" src="logo.png" alt="logo"/></header>
    </div>
    <section class="seccion"> <Landingp/> <Formulario/></section>
    <footer class="foot"></footer>
    </>
  );
}

export default Landingpage
