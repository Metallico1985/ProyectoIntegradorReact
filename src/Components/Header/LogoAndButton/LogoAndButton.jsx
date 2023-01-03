import './LogoAndButton.css'


function LogoAndButton(props) {
    return (
        <div>
            <div className="mainContainer">
                <div className="logo">
                   <img src="../Images/poke.png" alt="" />
                    
                </div>
                <div className='title'><h1>Pokedex</h1></div>
                <div className="btnContainer">
                    {props.active ? (
                        <div className="sortByName">
                            <button onClick={props.sortByName}>
                                <img src="../Icons/sortbynumber.svg" alt="" />
                            </button>
                        </div>
                    ) : (
                        <div className="sortById">
                            <button onClick={props.sortById}>
                                <img src="../Icons/sortbyalphabet.svg" alt="" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LogoAndButton;