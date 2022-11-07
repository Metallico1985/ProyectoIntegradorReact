import React from 'react';
import Main from '../Components/Main/Main';
import pokemones from '../Api/Data';
import { useState } from 'react'
import SearchBar from '../Components/Header/SearchBar/SearchBar';
import LogoAndButton from '../Components/Header/LogoAndButton/LogoAndButton'
//prueba
function Home() {
    const [list, setList] = useState(pokemones);

    const search = (x) => {
        if (x !== "") {
            const filtrados = [...list].filter((pokemon) => {
                if (pokemon.name.toLowerCase().includes(x)) {
                    return true;
                } else return false;
            });
            setList(filtrados);
        } else {
            setList(pokemones);
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
        <div className='mainAppContainer'>
            <header>
                <LogoAndButton sortById={sortById} sortByName={sortByName} active={active} />
                <SearchBar search={search} />
            </header>

            <Main list={list} />
        </div>
    )
}

export default Home;