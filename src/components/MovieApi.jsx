import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import axios from "axios";
import MoviesList from "./MovieList";
import MovieTitle from "./MovieTitle";
import Toggle from "./Toggle"
import Search from "./Search";
import AddFavourites from "./AddFavourites";
import Remove from "./Remove"
import { SearchWrapper } from "./MoviesList.styled";

function MovieApi() {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");
  const [favouriteMovies, setFavourite] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [removeCard, setRemove] = useState([]);

  

  useEffect(() => {
    const getMoviesList = (searchMovies) => {
      const apiKey = "b0312ded ";
      axios({
        method: "get",
        url: `https://www.omdbapi.com/?s=${searchMovies}&apikey=${apiKey}&`,
      }).then((response) => {
        const data = response.data.Search;
       
        if (data) {
          setMovies(data);
        }
      });
      
    };

    getMoviesList(searchMovies);
    
  }, [searchMovies]);

  //get the items in Local storage when the page loads
  
  useEffect(()=>{
    const savedItems=localStorage.getItem('storage-key') ? JSON.parse(localStorage.getItem('storage-key')): []
    
    setFavourite(savedItems)
  }, [])

  //Saving movies into localstorage

  
  function setLocalStorage(items) {
 
    localStorage.setItem('storage-key', JSON.stringify(items));
  }
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchMovies(value);
    
  };

  const handleClick = (movie) => {
    console.log(favouriteMovies)
    const found = favouriteMovies.find(item => item.id === movie)
    if(found){
 console.log('movie already added to the list')
    }else{
      const newFavouriteMovies = [...favouriteMovies, movie];
   
    setFavourite(newFavouriteMovies);

    setLocalStorage(newFavouriteMovies)
    }
    
  };

  const handleRemove = (movie) =>{
    const removeMovies = favouriteMovies.filter(removeItem=>removeItem.imdbID !== movie.imdbID)
    setFavourite(removeMovies)
    console.log(removeMovies)
  }
  return (
    <Container>
      <Navbar>
        <MovieTitle heading="Movies" />
        <Toggle />
      </Navbar>
      <SearchWrapper>
        <Search search={searchMovies} handleChange={handleChange} />
      </SearchWrapper>

     
      <MoviesListWrapper>
        <MoviesList
        search={searchMovies}
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
           favouriteComponent={Remove}
           handleClick={handleRemove}
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