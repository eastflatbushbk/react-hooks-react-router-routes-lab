import React from "react";
import { movies } from "../data";

function Movies() {
 // const {title, time, genres} = movies
  const listOfTitles = movies.map((item)=> (
    <div>
     <strong>Title: {item.title}</strong>
     <div>
     <br></br>
     <div>Time: {item.time}</div>
     <br></br>
      Genres: <ul> {item.genres.map((item)=> (
                  <li>{item}</li>
                 ))}
                 
       </ul>
    </div></div>
  ))
   
  return <div>{/*{code here}*/}
            <h1>Movies Page</h1>
            {listOfTitles}
         </div>;
}

export default Movies;
