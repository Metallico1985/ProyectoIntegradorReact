import React from 'react'
import "./SearchBar.css"

function SearchBar(props) {


    const handleInput = (e) => {

        props.search(e.target.value.toLowerCase())
    }

    return (
        <div className='searchBarContainer'>
            <input type='text' placeholder='🔎Buscar ' onChange={handleInput}></input>
        </div>
    )
}

export default SearchBar