import React from "react";
import { directors } from "../data";

function Directors() {
 

    const listOfDirectors = directors.map((item)=>(
      <div>
      <strong>Name: {item.name}</strong>
       <div>
        <br></br>
          movies: <ul>
                 {item.movies.map((item)=>(
                   <li>{item}</li> ))}
                 </ul>
        </div>
      </div>))
      
  return <div>{/*{code here}*/}
             <h1>Directors Page</h1>
             {listOfDirectors}
         </div>;
}

export default Directors;
