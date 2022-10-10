import React from "react";
import { actors } from "../data";

function Actors() {
  //const {name, movies} = actors

  const listOfActors = actors.map((item)=>(
            <div>
              <strong>Name: {item.name}</strong>
            <div> 
             
           <br></br> 
            Movies: <ul>  {item.movies.map((item)=>(
                         <li>{item}</li>
  ))}              </ul>
            </div>
            </div>
  ))
   
  return <div>{/*{code here}*/}
             <h1>Actors Page</h1>
             {listOfActors}
         </div>;
}

export default Actors;
