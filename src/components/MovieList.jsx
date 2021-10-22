import React from "react";
import { MovieItems, MovieCards, Overlay, MovieHolder } from "./MoviesList.styled";


function MovieList(props) {
  const FavouriteMovies = props.favouriteComponent;
  
  return (
    <MovieItems>
      {props.movies?.map((movie, index) => {
        return (
          <MovieHolder>
            <MovieCards key={index}>
              <img src={movie.Poster} alt={movie.Title}/>
              <Overlay onClick={() => props.handleClick(movie)}>
                <FavouriteMovies />
              </Overlay>
            </MovieCards>
          </MovieHolder>
        );
      })}
    </MovieItems>
  );
}

export default MovieList;
