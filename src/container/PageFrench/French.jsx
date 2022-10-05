import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react';
import { Contains, ContainsCard, ContainsInformation, ContainsPicture, ContainsName, 
  ContainsScore
} from '../../components/Contains/Contains';
import './French.css';

export const French = () => {
    const [apiMatchFrench , setApiMatchFrench] = useState(null);

    useEffect(() => {
      axios.get('http://localhost:8080/ligue1?league=ligue1')
      .then((response) => {
        setApiMatchFrench(response.data);
      })

      axios.get('http://localhost:8080/classement?ligue1?classement=classement?ligue1')
        .then((classement) => {
          console.log(classement);
        })
        
       }, []);
     
    return (
      <div className="App">
        
      {apiMatchFrench ?
        ( 
          <Contains >
          <img src={apiMatchFrench.sports_results.thumbnail} alt="premiere league"/>
          <h1> Match de ce week-end </h1>

        <h1>{apiMatchFrench.sports_results.title}</h1>     
          {apiMatchFrench.sports_results.games.map(( game ) => (
            <ContainsCard>
              <span className="date"> {game.date} </span>
              {
              game.teams.map(( team ) => (
                  <ContainsInformation appareance="appareance"> 
                  <ContainsPicture src={team.thumbnail} alt={team.name}/>
                  <ContainsName> {team.name}</ContainsName>
                  <ContainsScore> {team.score} </ContainsScore>
                 </ContainsInformation>
               
              ))}
            </ContainsCard>
          )
        )   
              }
        </Contains>
        )
        : 
        (
        <div> loading... </div> 
        )
      }
    
    </div>
    );
}