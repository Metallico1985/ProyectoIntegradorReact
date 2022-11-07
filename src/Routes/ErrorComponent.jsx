import React from 'react'
import './Error.css'
// import image from 'public/Images/pikachuRoto.jpg'

function ErrorComponent() {
    return (
        <div className='errorContainer'>
            <div>

                <p className='error'>Error 404</p>
                <p>Tecleaste cualquiera papu...</p>
                <img src="../Images/pikachuRoto.jpg" alt="pikachu todo roto" />
            </div>

        </div>
    )
}

export default ErrorComponent