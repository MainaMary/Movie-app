import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import axios from "axios";
import MoviesList from "./MovieList";
import MovieTitle from "./MovieTitle";
import Toggle from "./Toggle"
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
    <Container>
      <Navbar>
        <MovieTitle heading="Movies" />
        <Toggle />
      </Navbar>
      <SearchWrapper>
        <Search search={searchMovies} handleChange={handleChange} />
      </SearchWrapper>

      <h2>{`Results search for ${searchMovies}`}</h2>
      <MoviesListWrapper>
        <MoviesList
          movies={movies}
          favouriteComponent={AddFavourites}
          handleClick={handleClick}
        />
      </MoviesListWrapper>

      <FavouritesCont>
        <MovieTitle heading="Add Favourite Movies" />
      </FavouritesCont>
      <MoviesListWrapper>
        <MoviesList
          movies={favouriteMovies}
          favouriteComponent={AddFavourites}
          handleClick={handleClick}
        />
      </MoviesListWrapper>
    </Container>
  );
}

export default MovieApi;

export const Navbar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const FavouritesCont = styled.div``
export const MoviesListWrapper= styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`
export const Container = styled.div`
padding: 0 40px;
`