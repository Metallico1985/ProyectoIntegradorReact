import React from "react";
import Main from "../Components/Main/Main";
import { useState, useEffect } from "react";
import SearchBar from "../Components/Header/SearchBar/SearchBar";
import LogoAndButton from "../Components/Header/LogoAndButton/LogoAndButton";
import Data from '../Api (Sin uso)/Data';

function Home() {
  const [list, setList] = useState(Data);
  const [resetear, setResetear] = useState(false);


  useEffect(() => {
    // fetch("http://localhost:3000/pokemones", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },

    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setList(data);
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
    setList(Data);
  }, [resetear]);


  const search = (x) => {
    if (x !== "") {
      const filtrados = [...list].filter((pokemon) => {
        if (pokemon.name.toLowerCase().includes(x) || pokemon.id.includes(x)) {
          return true;
        } else return false;
      });
      setList(filtrados);
    } else {
      //Cambio el estado del array de dependecias del useEffect para que se ejecute el fetch nuevamente.
      setResetear(!resetear);
    }
  };

  const [active, setActive] = useState(true);

  const sortById = () => {
    const newId = [...list].sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    setList(newId);
    setActive(true);
  };

  const sortByName = () => {
    const name = [...list].sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    setList(name);
    setActive(false);
  };

  return (
    <div className="mainAppContainer">
      <header>
        <audio src="../Music/pokemon-intro.mp3" autoplay="autoplay"></audio>
        <LogoAndButton
          sortById={sortById}
          sortByName={sortByName}
          active={active}
        />
        <SearchBar search={search} />
      </header>
      <Main list={list} />
    </div>
  );
}

export default Home;
