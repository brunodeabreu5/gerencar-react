import React from "react";
import "../../../styles/style.css";
import "./index.css";
import Login from "../../../pages/Login"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function MenuLateral() {
  return (
    <Router>
    <aside>
      <ul>
        <nav className="menuLateral">
          <li><Link className="link" to="Login">Login</Link></li>
          <a href="">
            <div className="link">Serviços</div>
          </a>
          <a href="">
            <div className="link">Veículos</div>
          </a>
          <a href="">
            <div className="link">Produtos</div>
          </a>
          <a href="">
            <div className="link">Relatório</div>
          </a>
          <a href="">
            <div className="link">Estoque</div>
          </a>
        </nav>
      </ul>
      <Switch>
          <Route path="Login" component={Login}/>
      </Switch>
    </aside>
    </Router>
  );
}



export default MenuLateral;
