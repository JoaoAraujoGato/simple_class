import React, { useState } from "react";
import { Categorias } from "../../shared/index";

function NovoCursoModal({nomeUsuario, userId, onSave, onClose}){
    const [novoCurso, setNovoCurso] = useState({
        name: null,
        description: null,
        category: null,
        ownerId: userId,
        ownerName: nomeUsuario,
        createdAt: new Date().toISOString(),
        price: null,
        duration: null
    });

    function handleCriarCurso(e){
        e.preventDefault();
        onSave(novoCurso);
        onClose();
    }
    
    return(
        <div className="d-flex flex-column justify-content-center align-items-center filtroModal" style={{height: "55vh"}}>
            <h4 className="mb-2 text-light">Criar novo curso</h4>
            <form className="d-flex flex-column" onSubmit={handleCriarCurso}>
                <input 
                    type="text" 
                    name="name" 
                    className="mb-1" 
                    placeholder="Nome do curso" 
                    onChange={(e)=>setNovoCurso({...novoCurso, name: e.target.value})} 
                    required={true}/>
                <textarea 
                    rows="5" 
                    cols="20" 
                    className="mb-1" 
                    name="description" 
                    placeholder="Descrição do curso"
                    style={{borderRadius: "8px", textAlign: "center"}} 
                    onChange={(e)=>setNovoCurso({...novoCurso, description: e.target.value})} 
                    required={true}/>
                <select  
                    placeholder="Categoria"
                    className="mb-1"
                    onChange={e => setNovoCurso({...novoCurso, category: e.target.value})}
                    defaultValue=""
                    required={true}
                >
                    <option disabled={true} value="">Selecione uma Categoria</option>
                    {Categorias.map((categoria)=>(
                        <option value={categoria.name}>{categoria.name}</option>
                    ))}
                </select>
                <input 
                    type="number" 
                    className="mb-1" 
                    name="price" 
                    placeholder="Preço do curso (R$)" 
                    onChange={(e)=>setNovoCurso({...novoCurso, price: e.target.value})} 
                    required={true}/>
                <input 
                    type="number" 
                    className="mb-1" 
                    name="duration" 
                    placeholder="Duração do curso (h)" 
                    onChange={(e)=>setNovoCurso({...novoCurso, duration: e.target.value})} 
                    required={true}/>
                <input 
                    type="submit"/>
            </form>
        </div>
    );
}

export default NovoCursoModal;