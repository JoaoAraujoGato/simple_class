import React from "react";
import { BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Cursos from "./pages/cursos";
import CursoEspecifico from "./pages/cursoEspecifico";
import Perfil from "./pages/perfil";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: "/home", state: { from: props.location }}}
                />
            )
        }
    />
);

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
                <PrivateRoute path="/cursoUsuarioX"/>
                <Route path="/home" component={Home}/>
                <Route path="/cursos" component={Cursos}/>
                <Route path="/curso" component={CursoEspecifico}/>
                <PrivateRoute path="/perfil" component={Perfil}/>
                <Route component={() => <Redirect to="/home"/>}/>
            </Switch>
        </Menu>
    );
}

export default Routes;