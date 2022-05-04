import "./filtroModal.css";
import React, { useState } from "react";
import { Categorias } from "../../shared/index";

function FiltroModal({onSave, onClose}){
    const [filtroData, setFiltroData] = useState({
        price: undefined,
        category: undefined
    });

    function handleChange(value, field){
        if(field === "category") filtroData.category = value;
        if(field === "price") filtroData.price = value;
        setFiltroData({...filtroData});
    };

    function filtrarCursos(){
        onSave({...filtroData});
        onClose();
    }
    return(
        <div className="d-flex flex-column justify-content-center align-items-center filtroModal">
            <h4 className="mb-5 text-light">Filtrar cursos</h4>
            <select
                 placeholder="Selecione uma Categoria"
                 value={filtroData.category}
                 onChange={e => handleChange(e.target.value, "category")}
                 defaultValue="vazio"
                 required={true}
                 className="mb-4 border-0 text-secondary"
            >
                <option disabled={true} value="vazio">Selecione uma Categoria</option>
                <option value="Todas">Todas categoria</option>
                {Categorias.map((category)=>{
                    return(
                        <option value={category.name} key={category.name}>{category.name}</option>
                    )
                })}
            </select>
            <input
                type="number"
                placeholder="Preço máximo"
                value={filtroData.price}
                onChange={e => handleChange(e.target.value, "price")}
                className="mb-4 border-0"
            />
            <div className="ButtonsRow d-flex justify-content-around w-100">
                <button className="p-1 rounded bg-danger border-0 text-white" onClick={onClose}>Cancelar</button>
                <button className="p-1 rounded bg-success border-0 text-white buttonFiltrar" onClick={filtrarCursos}>Filtrar</button>
            </div>
        </div>
    );
}

export default FiltroModal;