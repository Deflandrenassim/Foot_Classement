import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react';
import './French.css';

export const French = () => {
    const [apiMatchFrench , setApiMatchFrench] = useState(null);
    useEffect(() => {
      axios.get('http://localhost:8080/ligue1?league=ligue1')
      .then((response ) => {
        console.log(response);
        setApiMatchFrench(response.data);
      })
        
       }, []);
    return (
      <div className="App">
        
        {apiMatchFrench ?
          ( 
          <div>
            <img src={apiMatchFrench.sports_results.thumbnail} alt="ligue 1 "/>
  
          <h1>{apiMatchFrench.sports_results.title}</h1>
         
            {apiMatchFrench.sports_results.games.map(( game ) => (
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
          <div> Loading... </div> 
          )
        }
      
      </div>
    );
}