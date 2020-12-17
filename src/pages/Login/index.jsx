import React from "react";
import logoLogin from "../../Assets/CARRO-preto.png";
import "./index.css";
import { MDBBtn, MDBInput } from "mdbreact";

function Login() {


  
  return (
    <form class="telaLogin">
      <div className="login">
        <div className="textLogoLogin">
          <div className="textLogo">
            <img className="logoLogin" src={logoLogin} alt="logo" />
            <h3 className="textLogo">Gerencar</h3>
          </div>
        </div>
        <div className="tamanhoLogin">
          <MDBInput label="Usuário" type="text" validate />
          <MDBInput label="Senha" group type="password" validate />

          <div className="text-center mb-4 mt-5">
            <MDBBtn
              color="danger"
              type="button"
              className="btn-block z-depth-2"
            >
              Login
            </MDBBtn>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
