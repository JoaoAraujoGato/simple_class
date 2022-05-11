import React from "react";
import { isAuthenticated, USER_ID } from "../../services/auth";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

function CursoEspecifico(props){
    const history = useHistory();

    const curso = props.location.state;
    // console.log(isAuthenticated())
    let tipoUsuario;
    if(isAuthenticated()){
        tipoUsuario = localStorage.getItem("userType")
    }
    async function getCursosAluno(){
        const userId = sessionStorage.getItem(USER_ID);
        const response = await api.get(`user/${userId}`);
        return response.data.Data.user_course
    }
    function verificarSeAlunoTemCurso(){
        const cursosAluno = getCursosAluno();
        console.log()
        return cursosAluno.includes(curso._id);
    };
    console.log(getCursosAluno())
    return(
        <>
            <div>
                <h1>{curso.name}</h1>
                <h6>{curso.category}</h6>
                <h4>{curso.description}</h4>
                <h6>Criado por: {curso.ownerName}</h6>

                {isAuthenticated() ? 
                    tipoUsuario === "Aluno" ?? !verificarSeAlunoTemCurso() ?? <button>Adicionar curso à sua lista</button>
                :   
                    <button onClick={()=>history.push("cadastro")}>Adquira já</button>
                }
            </div>
        </>
    );
}

export default CursoEspecifico;