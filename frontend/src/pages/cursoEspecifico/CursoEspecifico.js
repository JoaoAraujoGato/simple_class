import React, { useEffect, useState } from "react";
import { isAuthenticated, USER_ID } from "../../services/auth";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

function CursoEspecifico(props){
    const history = useHistory();

    const [cursosAluno, setCursosAluno] = useState([]);

    const curso = props.location.state;
    // console.log(isAuthenticated())
    let tipoUsuario;
    if(isAuthenticated()){
        tipoUsuario = localStorage.getItem("userType")
    }
    async function getCursosAluno(){
        const response = await api.get(`user/${sessionStorage.getItem(USER_ID)}`);
        setCursosAluno(response.data.Data.user_course);
    }

    async function adicionarCurso(){
        console.log("cursosAluno1", cursosAluno);
        const aux = cursosAluno.push(curso._id);
        setCursosAluno(aux);
        console.log("cursosAluno2", cursosAluno);
        await api.patch(`user/${sessionStorage.getItem(USER_ID)}`, {user_course: cursosAluno});
        history.push("perfil")
    }
    useEffect(()=>{
        getCursosAluno();
    }, []);
    return(
        <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column align-items-center" style={{flexGrow: "1"}}>
                <h1>{curso.name}</h1>
                <h6>{curso.category}</h6>
                <h4>{curso.description}</h4>
                <h6>Criado por: {curso.ownerName}</h6>
                {isAuthenticated() ? 
                    <>
                    {tipoUsuario === "Aluno" ? 
                        <>
                        {!cursosAluno.includes(curso._id) ? 
                            <button className="p-1" onClick={()=> adicionarCurso()}>Adicionar curso à sua lista</button>
                        :   <h6>Curso já adicionado à sua lista</h6>}
                        </> 
                    : <h6>Apenas Alunos podem adquirir um curso</h6>}
                    </>
                :   
                    <button onClick={()=>history.push("cadastro")}>Adquira já</button>
                }

            </div>
        </div>
    );
}

export default CursoEspecifico;