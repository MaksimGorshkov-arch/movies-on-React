import React from "react";
import { Modals } from "./Modals";

export function Movie(props){
  
    return(
      <div>
        <a href="#modal1" className="modal-trigger"  onClick={props.clickInfoMovie}>
        <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={props.poster} alt="" />
            </div>
            <div className="card-content">
              <p>{props.name}</p>
              <span className="left">{props.type}</span>
              <span className="right">{props.year}</span>
            </div>
          </div>
        </div> 
      </div>
      </a>
      <Modals name = {props.name} type={props.type} year={props.year} poster={props.poster} />
      </div>
        
    )
}