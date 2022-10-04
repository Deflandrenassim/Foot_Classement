import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react';
import './England.css';

export const England = () => {
    const [apiMatch , setApiMatch] = useState(null);
    useEffect(() => {
      axios.get('http://localhost:8080/premiereleague?league=premiereleague')
      .then((response ) => {
        console.log(response);
        setApiMatch(response.data);
      })
        
       }, []);
    return (
      <div className="App">
        
        {apiMatch ?
          ( 
          <div>
            <img src={apiMatch.sports_results.thumbnail} alt="premiere league"/>
  
          <h1>{apiMatch.sports_results.title}</h1>
         
            {apiMatch.sports_results.games.map(( game ) => (
              <ul>
                <span>{game.time }</span>
                {
                game.teams.map(( team ) => (
                  <li> {team.name}
                    <img src={team.thumbnail} alt="" />
                   </li>
                 
                ))}
              </ul>
            )
          )   
                }
          </div>
          )
          : 
          (
          <div> No games ce week-end </div> 
          )
        }
      
      </div>
    );
}

