import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

import { useDispatch, useSelector } from "react-redux";
import { getAllCoursesRequest } from "../../store/actions/courseActions";
import { getAllUsersRequest } from "../../store/actions/userActions";

function Home(){
    const history = useHistory();
    const dispatch = useDispatch();
    const allCourses = useSelector(state => state.cursos);
    const user = useSelector(state => state.usuarios);
    useEffect(()=>{
        if(allCourses === null){
            dispatch(getAllCoursesRequest());
        }
        if(user.allUsers === null && user.userLogIn){
            if(user.userLogIn.user.type !== "Aluno"){
                dispatch(getAllUsersRequest());
            }
        }
    },[allCourses, user, dispatch])

    return(
        <div className="baseHome">
            <div className="apresentacaoHome">
                <p>Conecte-se onde quiser e comece o seu desenvolvimento profissional,</p>
                <p>academico e pessoal na nova plataforma de ensino a distância.</p>
                <p style={{fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>SIMPLE CLASS</p>
                <div className="botaoApresentacaoHome">
                    <img src="./images/imagemHome.png" alt="Home imagem" style={{width:"350px"}}/>
                    <button>Conheça nossa historia</button>
                </div>
            </div>
            <div className="algumasCategorias">
                <div onClick={()=>setTimeout(()=>{history.push("categorias/DesenvolvimentoWeb")},2000)}>
                    <p>Cursos de Desenvolvimento Web</p>
                    <img src="./images/categorias/CursoDesenvolvimentoWeb.png" alt="Curso de Desenvolvimento Web" style={{width:"200px"}}/>
                </div>
                <div onClick={()=>setTimeout(()=>{history.push("categorias/Design")},2000)}>
                    <p>Cursos de Design</p>
                    <img src="./images/categorias/CursoDesign.png" alt="Curso de Design" style={{width:"200px"}}/>
                </div>
                <div onClick={()=>setTimeout(()=>{history.push("categorias/Financas")},2000)}>
                    <p>Cursos de Finanças</p>
                    <img src="./images/categorias/CursoFinancas.png" alt="Curso de Finanças" style={{width:"200px"}}/>
                </div>
                <div onClick={()=>setTimeout(()=>{history.push("categorias/EstudoAcademico")},2000)}>
                    <p>Cursos de Ensino e Estudo Acadêmico</p>
                    <img src="./images/categorias/CursoEstudoAcademico.png" alt="Curso de Estudo Academico" style={{width:"200px"}}/>
                </div>
            </div>
        </div>
    )
}

export default Home;