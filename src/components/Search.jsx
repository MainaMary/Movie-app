import React from 'react'
import styled from "styled-components"

 const Search = ({searchMovies, handleChange}) => {
    return (
        <SearchWrapper>
            <input type="text" placeholder="Search Movies" value={searchMovies} onChange={handleChange}/>
        </SearchWrapper>
    )
}

export default Search;
export const SearchWrapper= styled.div`
input{
    max-width: 400px;
    width: 100%;
    padding: 10px 20px;
    border: 2px solid #000;
    background-color: #fff;
    border-radius: 5px;
    font-size: 24px;
    font-weight: 500;
}

`