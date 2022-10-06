import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loading } from '../../components/loading/Loading';
import {
  Contains, ContainsCard, ContainsInformation, ContainsPicture, ContainsName,
  ContainsScore
} from '../../components/Contains/Contains';
import './England.css';

export const England = () => {
    const [apiMatch , setApiMatch] = useState(null);
    useEffect(() => {
      axios.get('http://localhost:8080/premiereleague?league=premiereleague')
      .then((response ) => {
        setApiMatch(response.data);
      })
        
       }, []);
    return (
      <div className="england">
        {apiMatch ?
          ( 
            <Contains>
            <img className="england_Logo"src={apiMatch.sports_results.thumbnail} alt="premiere league"/>
              <h1 className="title"> Match de ce week-end :</h1>
            {apiMatch.sports_results.games.map(( game ) => (
              <ContainsCard>
                 <ContainsInformation>
                {game.date}
                </ContainsInformation>
                <ContainsInformation>
                {game.stadium} 
                </ContainsInformation>
                <ContainsInformation>
                {game.time}
                </ContainsInformation>
                {
                game.teams.map(( team ) => (
                    <ContainsInformation> 
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
          <div>
            <Loading />
          </div>
        )
      }

    </div>
  );

}

