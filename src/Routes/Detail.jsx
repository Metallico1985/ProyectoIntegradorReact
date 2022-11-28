import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Detail.css";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  ChakraProvider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Data from '../Api (Sin uso)/Data'

function Detail() {
  const [pokemones, setPokemones] = useState(Data);

  // useEffect(() => {
  //   fetch("http://localhost:3000/pokemones", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPokemones(data);
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const item = pokemones.find((item) => {
    return item.id === id;
  });

  /*///////////////////////FINDINDEX////////////////////////*/

  const indexActual = pokemones.findIndex((x) => {
    return x.id == id;
  });

  const getRightIndex = () => {
    if (indexActual == pokemones.length - 1) {
      // es el ultimo
      // devuelvo el primero
      return 0;
    }
    return indexActual + 1;
  };
  const getLeftIndex = () => {
    if (indexActual == 0) {
      // es el primero
      // devuelvo el ultimo
      return pokemones.length - 1;
    }
    return indexActual - 1;
  };

  const previous = () => {
    const pokemon = pokemones[getLeftIndex()];
    const pokeId = pokemon.id;
    navigate("/detail/" + pokeId);
  };
  const next = () => {
    const pokemon = pokemones[getRightIndex()];
    const pokeId = pokemon.id;
    navigate("/detail/" + pokeId);
  };

  return (
    <div className="backCont">
      {item && (
        <div className="mainDetail" style={{ backgroundColor: item.color[0] }}>
          <div className="pokeBall">
            <img src="../Images/Pokeball.png" alt="" />
          </div>
          <header className="headerDetail">
            <div className="nameDetContainer">
              <Link to={"/"}>
                {" "}
                <img src="../Icons/arrow-left.png" alt="" />
              </Link>
              <h3>{item.name}</h3>
            </div>
            <div className="nameDetContainer">
              <h4>{"#" + item.id}</h4>
            </div>
          </header>
          <div className="nextBack">
            <img src="../Icons/NextLeft.png" alt="" onClick={previous} />
            <img src="../Icons/NextRight.png" alt="" onClick={next} />
          </div>
          {/* /////////////////////////////AUDIO////////////////////////////////////////// */}
          <audio src={item.sound} autoplay="autoplay"></audio>
          {/* ////////////////////////////////////////////////////////////////////////// */}
          <img className="pokeImg" src={item.img} alt="" />
          <div className="statsCard">
            <div className="typeContainer">
              <div className="type">
                {item.type.length > 1 ? (
                  <div className="type">
                    <div
                      className="typeBtn"
                      style={{ backgroundColor: item.color[0] }}
                    >
                      {item.type[0]}
                    </div>
                    <div
                      className="typeBtn"
                      style={{ backgroundColor: item.color[1] }}
                    >
                      {item.type[1]}
                    </div>
                  </div>
                ) : (
                  <div className="type">
                    <div
                      className="typeBtn"
                      style={{ backgroundColor: item.color[0] }}
                    >
                      {item.type[0]}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="aboutTitle">
              <h3 style={{ color: item.color[0] }}>About</h3>
            </div>
            <div className="about">
              <div className="dataCont">
                <div className="data">
                  <img src="../Icons/Weight.svg" alt="" />
                  <span>{item.weight + "kg"}</span>
                </div>
                <p>Weight</p>
              </div>

              <div className="dataCont">
                <div className="data">
                  <img src="../Icons/Height.svg" alt="" />
                  <span>{item.height + "m"}</span>
                </div>
                <p>Height</p>
              </div>

              <div className="moves">
                <span>{item.moves[0]}</span>
                <span>{item.moves[1]}</span>
                <p>Moves</p>
              </div>
            </div>
            <div className="description">
              <p>{item.description}</p>
            </div>
            <div className="statsTitle">
              <h3 style={{ color: item.color[0] }}>Base stats</h3>
            </div>

            {/* --------------------------STAT BARS----------------------------------------- */}

            <ChakraProvider>
              <div className="slider">
                <div className="statName">
                  <h5 style={{ color: item.color[0] }}>HP</h5>
                </div>
                <span>{item.stats.hp}</span>
                <Slider
                  aria-label="slider-ex-1"
                  value={item.stats.hp}
                  max={200}
                  isDisabled
                >
                  <SliderTrack bg="#74cb4836">
                    <SliderFilledTrack bg={item.color[0]} />
                  </SliderTrack>
                </Slider>
              </div>
              <div className="slider">
                <div className="statName">
                  <h5 style={{ color: item.color[0] }}>ATK</h5>
                </div>
                <span>{item.stats.atk}</span>
                <Slider
                  aria-label="slider-ex-1"
                  value={item.stats.atk}
                  max={200}
                  isDisabled
                >
                  <SliderTrack bg="#74cb4836">
                    <SliderFilledTrack bg={item.color[0]} />
                  </SliderTrack>
                </Slider>
              </div>
              <div className="slider">
                <div className="statName">
                  <h5 style={{ color: item.color[0] }}>DEF</h5>
                </div>
                <span>{item.stats.def}</span>
                <Slider
                  aria-label="slider-ex-1"
                  value={item.stats.def}
                  max={200}
                  isDisabled
                >
                  <SliderTrack bg="#74cb4836">
                    <SliderFilledTrack bg={item.color[0]} />
                  </SliderTrack>
                </Slider>
              </div>
              <div className="slider">
                <div className="statName">
                  <h5 style={{ color: item.color[0] }}>SATK</h5>
                </div>
                <span>{item.stats.satk}</span>
                <Slider
                  aria-label="slider-ex-1"
                  value={item.stats.satk}
                  max={200}
                  isDisabled
                >
                  <SliderTrack bg="#74cb4836">
                    <SliderFilledTrack bg={item.color[0]} />
                  </SliderTrack>
                </Slider>
              </div>
              <div className="slider">
                <div className="statName">
                  <h5 style={{ color: item.color[0] }}>SDEF</h5>
                </div>
                <span>{item.stats.sdef}</span>
                <Slider
                  aria-label="slider-ex-1"
                  value={item.stats.sdef}
                  max={200}
                  isDisabled
                >
                  <SliderTrack bg="#74cb4836">
                    <SliderFilledTrack bg={item.color[0]} />
                  </SliderTrack>
                </Slider>
              </div>
              <div className="slider">
                <div className="statName">
                  <h5 style={{ color: item.color[0] }}>SPD</h5>
                </div>
                <span>{item.stats.sdef}</span>
                <Slider
                  aria-label="slider-ex-1"
                  value={item.stats.spd}
                  max={200}
                  isDisabled
                >
                  <SliderTrack bg="#74cb4836">
                    <SliderFilledTrack bg={item.color[0]} />
                  </SliderTrack>
                </Slider>
              </div>
            </ChakraProvider>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;

