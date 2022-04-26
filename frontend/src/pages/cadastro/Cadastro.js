import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from '../../services/api';
import InputMask from 'react-input-mask';

import "./Cadastro.css";

function Cadastro(){
    const [userType, setUserType] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birth, setBirth] = useState("");
    const [phone, setPhone] = useState("");
    const [cpf, setCpf] = useState("");
    const history = useHistory();

    async function handleCadastro(e){
        e.preventDefault();
        try{
            const data = {
                type: userType,
                name,
                email,
                password,
                birth,
                phone,
                cpf
            }
            const response = await api.post("/user", data);
            console.log(response.data);
            alert(`Cadastro feito com Sucesso: ${data.name}`);
            history.push("login");
        } catch (error) {
            alert("Erro no cadastro, tente novamente.");
        }
    }
    return(
        <div className="base_cadastro">
            <div className="box_cadastro">
                <div className="elements_cadastro">
                    <img src="./images/SimpleClassBranco.png" alt="Simple Class"/>
                    <div className="textoCadastro">
                        <h5>Faça o seu cadastro agora mesmo!</h5>
                    </div>
                    <form onSubmit={handleCadastro}>  
                        <select  
                            placeholder="Tipo de Usuario"
                            value={userType}
                            onChange={e => setUserType(e.target.value)}
                            defaultValue=""
                            required="true"
                        >
                            <option disabled={true} value="">*Selecione um tipo de Usuario</option>
                            <option value="Professor">Professor</option>
                            <option value="Aluno">Aluno</option>
                        </select>
                        <input
                            type="text"
                            placeholder="*Nome"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required="true"
                        />
                        <input
                            type="email"
                            placeholder="*E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required="true"
                        />
                        <input
                            type="password"
                            placeholder="*Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required="true"
                        />
                        <input
                            type="date"
                            placeholder="Data de Nascimento"
                            value={birth}
                            onChange={e => setBirth(e.target.value)}
                            required="false"
                        />
                        <InputMask
                            mask={'(99)99999.9999'}
                            value={phone}
                            onChange={(e)=> setPhone(e.target.value)}
                            placeholder='Telefone para Contato'
                        />
                        <InputMask
                            mask={'999.999.999-99'}
                            value={cpf}
                            onChange={(e)=> setCpf(e.target.value)}
                            placeholder='CPF'
                        />
                        <div style={{display: 'flex', flexDirection:'column', width:'100%', alignItems:'center', marginTop: '10px'}}>
                            <button className="buttonCadastro" type="submit">Cadastre-se</button>
                            <button className="loginButton_cadastro" onClick={() => history.push("login")}>Faça o Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;
