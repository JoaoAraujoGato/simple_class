import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import Home from "./pages/home";

function Routes(){
    return(
        <>
            <BrowserRouter forceRefresh={true}>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/cadastro" component={Cadastro}/>
                    <Route path="/home" component={Home}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes;