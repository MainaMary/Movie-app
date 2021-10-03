import React from "react";
import { MovieItems, MovieCards, Overlay } from "./MoviesList.styled";

function MovieList(props) {
 
  const FavouriteMovies = props.favouriteComponent;
  return (
    <MovieItems>
     {props.movies.map(( movie,index)=>{
       console.log(movie)
       return(
         <div style={{display: "flex"}}>
            <MovieCards  key={index}>
        <img src={movie.Poster} />
        <Overlay onClick={()=>props.handleClick(movie)}>
          <FavouriteMovies />
        </Overlay>
      </MovieCards>
         </div>
       
       )
     })}
    </MovieItems>
  );
}

export default MovieList;
