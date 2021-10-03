import React from 'react'

 const Search = ({searchMovies, handleChange}) => {
    return (
        <div>
            <input type="text" placeholder="Search Movies" value={searchMovies} onChange={handleChange}/>
        </div>
    )
}

export default Search;