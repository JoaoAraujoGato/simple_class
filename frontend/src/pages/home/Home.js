import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

function Home(){
    const history = useHistory();

    return(
        <div className="baseHome">
            <h1>Pagina Home</h1>
            <button onClick={()=>{
                history.push("login");
            }}
            >
                Login
            </button>
        </div>
    )
}

export default Home;