import React from "react";
import { Movie } from "./Movie";


export function Movies(props){
    
    return(<div className="content-movies">
            {
            props.movies.map((movie)=>(
               <Movie key={movie.imdbID} name={movie.Title} year={movie.Year} type={movie.Type} poster={movie.Poster} clickInfoMovie = {props.clickInfoMovie}/>
            ))
            }
        </div>
    )
}