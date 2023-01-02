import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main(props) {
    return (
<<<<<<< HEAD
        <div className="mainContainerGrid">
=======
>>>>>>> b54d4f0307f91aaa1e1603b9b7a38a42f6024fd3
        <div className="gridContainer">
            <div className="cardContainer">
                {props.list.map((item) => (
                    <Link
                        to={`detail/${item.id}`}
                        className="card color"
                        style={{ borderColor: item.color[0] }}
                    >
                        <div className="cardId" style={{ color: item.color[0] }}>
                            {"#" + item.id}
                        </div>
                        <div className="cardImg">
                            <img src={item.img} alt="" />
                        </div>
                        <div
                            className="cardName"
                            style={{ backgroundColor: item.color[0] }}
                        >
                            {item.name}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
<<<<<<< HEAD
        </div>
=======
>>>>>>> b54d4f0307f91aaa1e1603b9b7a38a42f6024fd3
    );
}

export default Main;