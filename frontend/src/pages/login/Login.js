import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ImHome } from "react-icons/im";

import { useDispatch } from "react-redux";
import { logInUserRequest } from "../../store/actions/userActions";

import "./Login.css";

function Login(){
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function handleLogin(e){
        e.preventDefault();
        try{
            dispatch(logInUserRequest({email, password}));
            setTimeout(()=>{history.push("home")}, 3000);
        } catch(err){
            if(err === 400){
                alert("Credentials Invalids:");
            }
            else{
                alert(err);
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