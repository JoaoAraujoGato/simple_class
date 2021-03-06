import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

import { connect } from "react-redux";
import { adicionarNovoCurso } from "../../store/actions/actionsCourse";

function Home(props){
    const history = useHistory();

    const cursoTeste = {
        name: "testeNome",
        category: "testeCategoria",
        ownerName: "testeDono",
        createdAt: "07/04/1998",
        price: 20,
        duration: 10
    }
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
                <div onClick={()=>history.push("categorias/DesenvolvimentoWeb")}>
                    <p>Cursos de Desenvolvimento Web</p>
                    <img src="./images/categorias/CursoDesenvolvimentoWeb.png" alt="Curso de Desenvolvimento Web" style={{width:"200px"}}/>
                </div>
                <div onClick={()=>history.push("categorias/Design")}>
                    <p>Cursos de Design</p>
                    <img src="./images/categorias/CursoDesign.png" alt="Curso de Design" style={{width:"200px"}}/>
                </div>
                <div onClick={()=>history.push("categorias/Financas")}>
                    <p>Cursos de Finanças</p>
                    <img src="./images/categorias/CursoFinancas.png" alt="Curso de Finanças" style={{width:"200px"}}/>
                </div>
                <div onClick={()=>history.push("categorias/EstudoAcademico")}>
                    <p>Cursos de Ensino e Estudo Acadêmico</p>
                    <img src="./images/categorias/CursoEstudoAcademico.png" alt="Curso de Estudo Academico" style={{width:"200px"}}/>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center">
                <button onClick={()=>props.addCurso(cursoTeste)}>Add Curso</button>
                <div className="TabelaQueVaiSerApagada w-75">
                    <table className="table table-striped table-hover table-sm table-bordered">
                        <caption>Lista de Cursos disponíveis</caption>
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
                            {props.cursos.map((curso, index)=>{
                                return(
                                    <tr key={index}>
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
    )
}

function mapStateToProps(state){
    return{
        cursos: state.cursos
    }
}

function mapDispatchToProp(dispatch){
    return {
        addCurso(novoCurso){
            const action = adicionarNovoCurso(novoCurso);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Home);