import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function Cursos(){
    const [allCourses, setAllCourses] = useState([]);

    async function getAllCourses(){
        try{
            const response = await api.get("course");
            setAllCourses(response.data.Data);
        }catch(err){
            console.warn(err);
        }
    };

    useEffect(()=>{
        getAllCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <div className="table-responsive">
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
                    {allCourses.map((curso)=>{
                        return(
                            <tr onClick={()=> alert("Clicou no curo: " + curso.name)}>
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
    );
}