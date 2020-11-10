import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Main from "./pages/Main/index";
import Login from "./pages/Login/index";
import CadastroClientes from "./pages/CadastroClientes/index";


function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Main" exact component={Main} />
                <Route path="/CadastroClientes" exact component={CadastroClientes} />
               
            </Switch>
        </BrowserRouter>
    );
}
export default routes;