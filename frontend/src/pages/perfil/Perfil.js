import React, { useEffect, useState } from "react";
import { USER_ID, logOut } from "../../services/auth";
import api from "../../services/api";
import { calculateAge } from "../../shared";
import "./Perfil.css";
import { useHistory } from "react-router-dom";

function Perfil(){
    const history = useHistory();

    const [infoUser, setInfoUser] = useState({});
    const [cursosUsuario, setCursosUsuario] = useState([]);
    const idUsusario = sessionStorage.getItem(USER_ID);
    const idadeUsuario = calculateAge(infoUser.birth);
    
    async function getInfoUsuario(){
        try{
            const response = await api.get(`user/${idUsusario}`);
            setInfoUser(response.data.Data);
        }catch(err){
            console.warn(err);
        }   
    };
    async function getCursosUsuario(){
        try{
            let response;
            if(infoUser.type === "Aluno"){
                response = await infoUser.user_course.map((cursoId)=>{
                    let aux = api.get(`course/${cursoId}`);
                    return aux.data.Data;
                })
                setCursosUsuario(response)
            }else{
                response = await api.get(`course/owner/${idUsusario}`);
                setCursosUsuario(response.data.Data);
            }
        }catch(err){
            console.warn(err);
        }   
    };
    
    useEffect(()=>{
        getInfoUsuario();
        getCursosUsuario();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[idUsusario]);

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
                                    <tr key={curso._id} onClick={()=> alert("Clicou no curo: " + curso.name)}>
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
            </div>
        </div>
        </>
    )
}

export default Perfil;