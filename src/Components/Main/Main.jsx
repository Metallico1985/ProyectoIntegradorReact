import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main(props) {
    return (
        <div className="gridContainer">
            <div className="cardContainer">
                {props.list.map((item) => (
                    <Link
                        to={`detail/${item.id}`}
                        className="card color"
                        style={{ borderColor: item.color[0] }}
                    >
                        <div className="cardId" style={{ color: item.color[0] }}>
                            <span>{"#" + item.id}</span>
                        </div>
                        <div className="cardImg">
                            <img src={item.img} alt="" />
                        </div>
                        <div
                            className="cardName"
                            style={{ backgroundColor: item.color[0] }}
                        >
                            <span>{item.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Main;