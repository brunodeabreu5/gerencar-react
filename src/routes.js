import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Paginas de rotas
import main from "./pages/Main/index";
import login from "./pages/Login/index";
import cadastroClientes from "./pages/CadastroClientes/index";

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={login} />
        <Route path="/main" component={main} />
        <Route path="/cadastroClientes" component={cadastroClientes} />
        <Route path="/" component={login} />
        <Route path="/" component={login} />
        <Route path="/" component={login} />
      </Switch>
    </BrowserRouter>
  );
}
export default routes;
