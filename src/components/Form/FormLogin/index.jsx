import React from "react";
import "./index.css";

//componentes
import Usuario from "../../Form/FormLogin/Usuario/index";
import SenhaUsuario from "../../Form/FormLogin/SenhaUsuario/index";
import ButtonLogin from "../../Button/ButtonLogin/index";

function FormLogin() {
  return (
    <form>
      <Usuario />
      <br></br>
      <SenhaUsuario />
      <br></br>
      <ButtonLogin />
    </form>
  );
}
export default FormLogin;
