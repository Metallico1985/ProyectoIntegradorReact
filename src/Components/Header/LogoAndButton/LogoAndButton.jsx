import './LogoAndButton.css'

function LogoAndButton(props) {
    return (
        <div className="mainContainer">
            <div className="logo">
                <img src="../Images/Pokeball.png" alt="" />
                <h1>Pokedex</h1>
            </div>
            <div className="btnContainer">
                {props.active ? (
                    <div className="sortByName">

                        <img className='btnSort' src="../Icons/SortById.png" alt="" onClick={props.sortByName}></img>

                    </div>
                ) : (
                    <div className="sortById">

                        <img className='btnSort' src="../Icons/SortByName.png" alt="" onClick={props.sortById}></img>

                    </div>
                )}
            </div>
        </div>
    );
}

export default LogoAndButton;