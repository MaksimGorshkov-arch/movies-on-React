import React, { useEffect, useState } from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "./Preloader";
import M from 'materialize-css';
   
const API_KEY = process.env.REACT_APP_API_KEY;

export function Main(){
    const [movies,setMovies]=useState([]);
    const [errorMsg,setErrorMsg] = useState('');
    const[isLoading,setIsLoading] = useState(true);
    const handlerClickInfoMovie = () =>{
        var elems = document.querySelector('.modal');
        let instance = M.Modal.init(elems);
    }
    const handlerSearch = (nameMovie,type) =>{
        if(type ==='all'){
         type = '';    
        }
        if(nameMovie === ''){
            alert("Введите название фильма!")
        }
        else{
            
            fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${nameMovie}&type=${type}`)
            .then(response=>response.json())
            .then(data=>{
                if(!data.Search){
                    setErrorMsg('error');
                }
                else{
                    
                    setIsLoading(false)
                    setMovies(data.Search);}
                })
        } 
    }
    
    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=Dog`)
        .then(response=>response.json())
        .then(data=>{
            setIsLoading(false)
            setMovies(data.Search);})
        },[isLoading])
    return(
        <div className="container main-content">
            {
                !isLoading ? (errorMsg ==='error' ? (
                    <h1>Page not foung</h1>
                ) : (<div>
                    <Search callBackSearch = {handlerSearch} />
                    <Movies movies = {movies} clickInfoMovie = {handlerClickInfoMovie}/> 
                </div>)
                ) :(<Preloader />)
            }
        </div>
    )
}