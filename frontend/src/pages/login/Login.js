import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from '../../services/api';
import { logIn } from "../../services/auth";

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
            logIn(response.data.accessToken)
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
                            required="true"
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required="true"
                        />
                        <button className="buttonLogin" type="submit">Login</button>
                        <button className="cadastroButton_login" onClick={() => history.push("Cadastro")}>Cadastre-se</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;