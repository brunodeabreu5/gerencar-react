import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Paginas de rotas
import main from "./pages/Main/index";
import login from "./pages/Login/index";
import cadastroClientes from "./pages/CadastroClientes/index";
import landingpage from "./pages/Landingpage/index";

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={login} />
        <Route path="/main" component={main} />
        <Route path="/cadastroClientes" component={cadastroClientes} />
        <Route path="/landingpage" component={landingpage} />
        <Route path="/" component={login} />
        <Route path="/" component={login} />
        <Route path="/" component={login} />
        <Route path="/" component={login} />
        <Route element={<EdtCliente />} path="/edit/:id" />
      </Switch>
    </BrowserRouter>
  )
}
export default routes;
