import React from "react";
import { useHistory } from "react-router-dom";

function Home(){
    const history = useHistory();

    return(
        <>
            <h1>Pagina Home</h1>
            <button onClick={()=>{
                history.push("login");
            }}
            >
                Login
            </button>
        </>
    )
}

export default Home;