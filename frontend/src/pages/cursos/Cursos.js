import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { Modal } from "@material-ui/core";
import FiltroModal from "../../components/filtroModal";

export default function Cursos(){
    const [allCourses, setAllCourses] = useState([]);
    const [nomeEstaOrdenado, setNomeEstaOrdenado] = useState();
    const [precoEstaOrdenado, setPrecoEstaOrdenado] = useState();
    const [duracaoEstaOrdenado, setDuracaoEstaOrdenado] = useState();
    const [filterView, setFilterView] = useState(false);

    async function getAllCourses(){
        try{
            const response = await api.get("course");
            setAllCourses(response.data.Data);
        }catch(err){
            console.warn(err);
        }
    };
    async function getCoursesByFilter(filterData){
        const {category, price} = filterData;
        try{
            let query = "";
            if(category !== undefined) query = query + `category=${category}&`;
            if(price !== undefined) query = query + `price=${price}&`;
            if((category === "Todas" || category === undefined) && (price === undefined || price === "")){
                const response = await api.get("course");
                setAllCourses(response.data.Data);
            }else{
                const response = await api.get(`course/byFilter?${query}`);
                setAllCourses(response.data.Data);
            }
        }catch(err){
            console.warn(err);
        }
    };

    useEffect(()=>{
        getAllCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    function ordenarNome(){
        switch (nomeEstaOrdenado) {
            case false:
                allCourses.sort(function(a,b) {
                    return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
                });
                return(
                    <FaSortDown style={{height: "25px", width: "25px"}}/>
                )
            case true:
                allCourses.sort(function(a,b) {
                    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                });
                return(
                    <FaSortUp style={{height: "25px", width: "25px"}}/>
                )
            default:
                return(
                    <FaSort style={{height: "25px", width: "25px"}}/>
                )
        }
    }
    function ordenarPreco(){
        switch (precoEstaOrdenado) {
            case false:
                allCourses.sort(function(a,b) {
                    return a.price < b.price ? 1 : a.price > b.price ? -1 : 0;
                });
                return(
                    <FaSortDown style={{height: "25px", width: "25px"}}/>
                )
            case true:
                allCourses.sort(function(a,b) {
                    return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
                });
                return(
                    <FaSortUp style={{height: "25px", width: "25px"}}/>
                )
            default:
                return(
                    <FaSort style={{height: "25px", width: "25px"}}/>
                )
        }
    }
    function ordenarDuracao(){
        switch (duracaoEstaOrdenado) {
            case false:
                allCourses.sort(function(a,b) {
                    return a.duration < b.duration ? 1 : a.duration > b.duration ? -1 : 0;
                });
                return(
                    <FaSortDown style={{height: "25px", width: "25px"}}/>
                )
            case true:
                allCourses.sort(function(a,b) {
                    return a.duration < b.duration ? -1 : a.duration > b.duration ? 1 : 0;
                });
                return(
                    <FaSortUp style={{height: "25px", width: "25px"}}/>
                )
            default:
                return(
                    <FaSort style={{height: "25px", width: "25px"}}/>
                )
        }
    }

    function handleFilter(filterData){
        getCoursesByFilter(filterData);
    }
    return(
        <>
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column w-75 p-2">
                <div className="d-flex align-self-end p-2">
                    <button className="w-10 p-1" onClick={()=>setFilterView(true)}>
                        Filtro
                    </button>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover table-sm table-bordered">
                        <caption>Lista de Cursos disponíveis</caption>
                        <thead>
                            <tr>
                                {/*                           verificamos se nao existe uma ordenaçao                        Caso ja exista ordenamos e resetamos as outras formas de ordenação     */}
                                <th scope="col" onClick={()=>{if(nomeEstaOrdenado === undefined) setNomeEstaOrdenado(true); else {setNomeEstaOrdenado(!nomeEstaOrdenado); setDuracaoEstaOrdenado(undefined); setPrecoEstaOrdenado(undefined)}}}>
                                    Name {ordenarNome()}</th>
                                <th scope="col">Category</th>
                                <th scope="col">Owner Name</th>
                                <th scope="col">Created At</th>
                                <th scope="col" onClick={()=>{if(precoEstaOrdenado === undefined) setPrecoEstaOrdenado(true); else {setPrecoEstaOrdenado(!precoEstaOrdenado); setNomeEstaOrdenado(undefined); setDuracaoEstaOrdenado(undefined)}}}>
                                    Price {ordenarPreco()}</th>
                                <th scope="col" onClick={()=>{if(duracaoEstaOrdenado === undefined) setDuracaoEstaOrdenado(true); else {setDuracaoEstaOrdenado(!duracaoEstaOrdenado); setNomeEstaOrdenado(undefined); setPrecoEstaOrdenado(undefined)}}}>
                                    Duration {ordenarDuracao()}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allCourses.map((curso)=>{
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
        <Modal
            open={filterView}
            onClose={()=>setFilterView(false)}
            className="d-flex justify-content-center align-items-center"
        >
            <FiltroModal onClose={()=>setFilterView(false)} onSave={handleFilter}/>
        </Modal>
        </>
    );
}