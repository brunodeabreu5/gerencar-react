import React from "react";
import "../../styles/style.css";
import "./index.css";
import LogoLogin from "../../components/section/logoLogin/index";
import FormLogin from "../../components/Form/FormLogin/index";

function Login() {
  return (
    <div className="fundoLogin">
      <div className="frame">
        <LogoLogin />
        <h1>Gerencar</h1>
        <FormLogin />
      </div>
    </div>
  );
}

export default Login;
