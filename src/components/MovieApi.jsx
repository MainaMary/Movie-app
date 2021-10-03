import React, { useState, useEffect } from "react";
import axios from "axios";
import MoviesList from "./MovieList";
import MovieTitle from "./MovieTitle";
import Search from "./Search";
import AddFavourites from "./AddFavourites";
import { SearchWrapper } from "./MoviesList.styled";

function MovieApi() {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");
  const [favouriteMovies, setFavourite] = useState([]);
  const getMoviesList = (searchMovies) => {
    const apiKey = "b0312ded ";
    axios({
      method: "get",
      url: `http://www.omdbapi.com/?s=${searchMovies}&apikey=${apiKey}&`,
    }).then((response) => {
      const data = response.data.Search;
      if (data) {
        setMovies(data);
      }
    });
  };

  


  useEffect(() => {
    getMoviesList(searchMovies);
  }, [searchMovies]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchMovies(value);
  };

  const handleClick = (movie) => {
    const newFavouriteMovies = [...favouriteMovies, movie];
    setFavourite(newFavouriteMovies);
  };
  return (
    <div className="container">
      <div className="Navbar">
        <MovieTitle heading="Movies" />
      </div>
      <SearchWrapper>
        <Search search={searchMovies} handleChange={handleChange} />
      </SearchWrapper>

      <h2>{`Results search for ${searchMovies}`}</h2>
      <div
       
      >

        <MoviesList
          movies={movies}
          favouriteComponent={AddFavourites}
          handleClick={handleClick}
        />
      </div>

      <div className="Navbar">
        <MovieTitle heading="Add Favourite Movies" />
      </div>
      <div
        style={{
        
      
          backgroundColor: "blue",
          
        }}
      >
        <MoviesList
          movies={favouriteMovies}
          favouriteComponent={AddFavourites}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default MovieApi;
