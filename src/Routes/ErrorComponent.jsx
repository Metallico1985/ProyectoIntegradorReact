import React from "react";
import './Error.css'
import { Link } from "react-router-dom";

function ErrorComponent() {
    return (
        <div className='errorContainer'>
            <div>
                <p className='error'>Error 404</p>
                <p>Tecleaste cualquiera papu...</p>
                <img src="../Images/pikachuRoto.jpg" alt="pikachu todo roto" />
            </div>
            <Link to="/"><button>Home</button></Link>
        </div>
    )
}

export default ErrorComponent;
