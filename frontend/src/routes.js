import React from "react";
import { BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import Home from "./pages/home";
import Menu from "./pages/menu";

function Routes(){
    return(
        <>
            <BrowserRouter forceRefresh={true}>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/cadastro" component={Cadastro}/>
                    <Route path="/" component={UserMenu}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

function UserMenu(){
    return(
        <Menu>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route component={() => <Redirect to="/home"/>}/>
            </Switch>
        </Menu>
    );
}

export default Routes;