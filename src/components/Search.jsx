import React,{useState} from "react";

export function Search(props){
    const[search,setSearch] = useState('');
    const[radio,setRadio] = useState('all');
    const handlerChange = (event)=>{
        setSearch(event.target.value)
    }
    const handlerRadioChange = (event)=>{
        setRadio(event.target.value)
    }
    return(
        <div className="row">
        <div className="input-field col s12">
          <input id="search" name="search" type="search" className="validate" placeholder="Search" onChange={handlerChange}/>
          <p className="left">
            <label className="label_radio">
                <input className="with-gap" name="radio" value = "all" type="radio" onChange = {handlerRadioChange} checked = {radio === 'all'} />
                <span className="span_radio">all</span>
            </label>
            <label className="label_radio">
                <input className="with-gap" name="radio" value = "movie" type="radio" onChange = {handlerRadioChange} checked = {radio === 'movie'} />
                <span className="span_radio">movies</span>
            </label>
            <label className="label_radio">
                <input className="with-gap" name="radio" value = "series" type="radio" onChange = {handlerRadioChange} checked = {radio === 'series'} />
                <span className="span_radio">series</span>
            </label>
            <label className="label_radio">
                <input className="with-gap" name="radio" value = "game" type="radio" onChange = {handlerRadioChange} checked = {radio === 'game'} />
                <span className="span_radio">game</span>
            </label>
          </p>
          <button className="waves-effect waves-light btn" onClick={() =>props.callBackSearch(search,radio)}>Search</button>
        </div>
      </div>
    )
}