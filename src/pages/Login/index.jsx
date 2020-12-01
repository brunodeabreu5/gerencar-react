import React, { useState } from "react";
import "../../styles/style.css";
import axios from "axios";
import "./index.css";
import LogoLogin from "../../components/section/logoLogin/index";
import FormLogin from "../../components/Form/FormLogin/index";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  const handleSubmit = async (e) => {};

  if (user) {
    return <div>{user.name} is loggged in</div>;
  }

  return (
    <form className="frame"onSubmit={handleSubmit}>
      <label htmlFor="username">Usuario: </label>
      <input
        type="text"
        value={username}
        placeholder="enter a username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
        <label htmlFor="password">Senha: </label>
        <input
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
