import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Paginas de rotas
import Main from "./pages/Main/index";
import Login from "./pages/Login/index";
import CadastroClientes from "./pages/CadastroClientes/index";

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Main" component={Main} />
        <Route path="/CadastroClientes" component={CadastroClientes} />
        <Route path="/" component={Login} />
        <Route path="/" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
export default routes;
