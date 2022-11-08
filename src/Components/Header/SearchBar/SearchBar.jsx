import React from "react";
import "./SearchBar.css";
import { TextField } from "@mui/material"

function SearchBar(props) {
  const handleInput = (e) => {
    props.search(e.target.value.toLowerCase());
  };

  return (
    <div className='searchBarContainer'>
      <TextField
        className="searchMui"
        size="small"
        id="searchBar"
        placeholder="🔎 Search"
        type="search"
        variant="outlined"
        onChange={handleInput}
      />
    </div>
  )
}

export default SearchBar;
