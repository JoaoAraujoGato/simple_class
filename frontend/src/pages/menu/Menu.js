import React from "react";
import "./Menu.css";
import { AppBar, Avatar, Toolbar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";

export default function Menu(props){
    const history = useHistory();
    const userName = localStorage.getItem("userName");
    function styleAvatar() {
        const avatarNome = ()=>{
            if(userName.includes(' '))   
                return (userName.split(' ')[0][0] + userName.split(' ')[1][0]);
            else    
                return (userName[0] + userName[1]);
        }
        return{
            children: avatarNome(),
            style: {
                backgroundColor: "#021B3D",
                border: "1px solid #ffffff"
            }
        }
    }
    return (
        <div className="baseMenu">
            <AppBar>
                <Toolbar style={{ height: "64px", backgroundColor:"#021B3D"}}>
                    <div className="todosElementosMenu">
                        <div className="elementosGeraisMenu">
                            <img className="logoMenu" src="./images/SimpleClassBrancoToolbar.png" alt="Simple Class" onClick={()=>history.push("cadastro")}/>
                            <button className="categoriasBotaoMenu" onClick={()=>history.push("categorias")}>Categorias</button>
                            <input type="text" placeholder="Pesquisar um Curso"/>
                            <button className="todosCursosBotaoMenu" onClick={()=>history.push("cursos")}>Todos os Cursos</button>
                        </div>
                        <div className="elementosUserMenu">
                            {isAuthenticated() ? 
                            <>
                                <button className="cursosUsuario" onClick={()=>history.push("cursosUsuario")}>Meus Cursos</button>
                                <Avatar {...styleAvatar()} />
                            </>
                            :
                            <>
                                <button className="cadastrarMenu" onClick={()=>history.push("cadastro")}>Cadastre-se</button>
                                <button className="loginMenu" onClick={()=>history.push("login")}>Faça o Login</button>
                            </>
                            }
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <div style={{marginTop:"64px"}}>
                {props.children}
            </div>
        </div>
    )
}