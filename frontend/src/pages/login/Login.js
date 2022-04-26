import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from '../../services/api';
import { logIn, userId } from "../../services/auth";
import { ImHome } from "react-icons/im";

import "./Login.css";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post("/user/login", {email, password});
            alert(`Bem vindo ${response.data.user.name}`);
            logIn(response.data.accessToken);
            userId(response.data.user._id);
            localStorage.setItem("userName", response.data.user.name);
            history.push("home");
        } catch(err){
            if(err.response.status === 400){
                alert("Credentials Invalids:");
            }
            else{
                alert(err.response.data.notification);
            }
            console.warn(err);
        }
    }
    return(
        <div className="base_login">
            <div className="box_login">
                <div className="elements_login">
                    <img src="./images/SimpleClassAzul.png" alt="Simple Class"/>
                    <div className="textoLogin">
                        <h5>Faça o seu login agora mesmo!</h5>
                    </div>
                    <form onSubmit={handleLogin}>  
                        <input  
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required={true}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required={true}
                        />
                        <button className="buttonLogin" type="submit">Login</button>
                        <button className="cadastroButton_login" onClick={() => history.push("cadastro")}>Cadastre-se</button>
                        <button className="homeButtonLogin" onClick={()=> history.push("home")}>
                            <ImHome style={{height: "25px", width: "25px"}}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;