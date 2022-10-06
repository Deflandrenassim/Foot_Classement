import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Contains, ContainsCard, ContainsInformation, ContainsPicture, ContainsName,
  ContainsScore
} from '../../components/Contains/Contains';
import { Loading } from '../../components/loading/Loading';
import './French.css';
import { Classement, ClassementLogo, ClassementName } from '../../components/classement/Classement';

export const French = () => {
    const [apiMatchFrench , setApiMatchFrench] = useState(null);
    const [classement, setClassement]= useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/ligue1?league=ligue1')
      .then((response) => {
        console.log(response.data)
        setApiMatchFrench(response.data);
      })
      axios.get('http://localhost:8080/classement?classement=ligue1teams')
      .then((response) => {
        console.log(response.data);
        setClassement(response.data);
        
      })

  }, []);
  return (
    <div className="App">

      {apiMatchFrench ?
        (
          <Contains >
            <img src={apiMatchFrench.sports_results.thumbnail} alt="premiere league" />

            <h1 className="title"> Tableau des Matchs : </h1>
            {apiMatchFrench.sports_results.games.map((game, key) => (
              <ContainsCard key={key}>
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
                  game.teams.map((team, key) => (
                    <ContainsInformation key={key} appareance="appareance">
                      <ContainsPicture src={team.thumbnail} alt={team.name} />
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
      {classement ? 
      (
      <Classement>
        {classement.knowledge_graph.sports_teams_ligue_1.map((classement, key) => (
          <div key={key}>
            <ClassementName name={classement.name}/>
            <ClassementLogo img={classement.image}/>
            {classement.pts}
          </div>
      ))}
      </Classement>
      )
      :
      <div> no </div>
      }
    </div>
  );
}