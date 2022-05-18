import React, { useEffect, useState } from "react";
import { USER_ID, logOut } from "../../services/auth";
import api from "../../services/api";
import { calculateAge } from "../../shared";
import "./Perfil.css";
import { useHistory } from "react-router-dom";

import { Modal } from "@material-ui/core";
import NovoCursoModal from "../../components/novoCursoModal";

function Perfil(){
    const history = useHistory();

    const [infoUser, setInfoUser] = useState({});
    const [cursosUsuario, setCursosUsuario] = useState([]);
    const idUsusario = sessionStorage.getItem(USER_ID);
    const idadeUsuario = calculateAge(infoUser.birth);
    const tipoUsuario = localStorage.getItem("userType");

    const [criarCursoModal, setCriarCursoModal] = useState(false);

    async function getInfoUsuario(){
        try{
            const response = await api.get(`user/${idUsusario}`);
            setInfoUser(response.data.Data);
        }catch(err){
            console.warn(err);
        }   
    };
    async function getCursosUsuario(){
        let response;
        try{
            if(tipoUsuario === "Aluno"){
                // let cursos = infoUser.user_course;
                // response = await api.get("course/student", {cursos});
            }else{
                response = await api.get(`course/owner/${idUsusario}`);
                setCursosUsuario(response.data.Data);
            }
        }catch(err){
            console.warn(err);
        }   
    };

    async function cadastrarCursoNovo(curso){
        try{
            const response = await api.post("/course", curso);
            console.log(response.data)
        }catch(err){
            console.warn(err);
        }
    }
    useEffect(()=>{
        getInfoUsuario();
        getCursosUsuario();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[idUsusario, criarCursoModal]);

    return(
        <>
        <div className="container d-flex justify-content-center align-items-stretch">
            <div className="DadosUsuario col-3">
                <h1>{infoUser.name}</h1>
                <h5>Idade: {idadeUsuario} anos</h5>
                <h6>{infoUser.type}</h6>
                {infoUser.phone ?? <h6>{infoUser.phone}</h6>}
                <h6>{infoUser.email}</h6>
                <button onClick={()=>{
                    logOut();
                    localStorage.removeItem("userName");
                    localStorage.removeItem("userType");
                    history.push("home")
                }}>
                    Logout
                </button>
            </div>
            <div className="CursosUsuario col-8">
                <h3>Meus Cursos</h3>
                <div className="table-responsive">
                    <table className="table table-striped table-hover table-sm table-bordered">
                        <caption>Lista de Meus Cursos</caption>
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Owner Name</th>
                                <th scope="col">Created At</th>
                                <th scope="col">Price</th>
                                <th scope="col">Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cursosUsuario.map((curso)=>{
                                return(
                                    <tr key={curso._id} onClick={()=> alert("Clicou no curso: " + curso.name)}>
                                        <td>{curso.name}</td>        
                                        <td>{curso.category}</td>        
                                        <td>{curso.ownerName}</td>        
                                        <td>{curso.createdAt}</td>        
                                        <td>{curso.price}</td>        
                                        <td>{curso.duration}</td>        
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div>
                    {tipoUsuario === "Professor" ?
                        <button className="w-10 p-1" onClick={() => setCriarCursoModal(true)}>
                            Criar Curso
                        </button>
                    : 
                         <button className="w-10 p-1" onClick={() => history.push("cursos")}>
                            Procurar Cursos
                        </button>
                    }
                </div>
            </div>
        </div>
        <Modal
            open={criarCursoModal}
            onClose={()=>setCriarCursoModal(false)}
            className="d-flex justify-content-center align-items-center"
        >
            <NovoCursoModal userId={idUsusario} nomeUsuario={infoUser.name} onClose={()=>setCriarCursoModal(false)} onSave={(e) => cadastrarCursoNovo(e)}/>
        </Modal>
        </>
    )
}

export default Perfil;