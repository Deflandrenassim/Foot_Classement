import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
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
          <img src={apiMatch.sports_results.thumbnail} />

        <h1>{apiMatch.sports_results.title}</h1>
       
          {apiMatch.sports_results.games.map(( game ) => (
            <ul>
              <span>{game.time.toLowerCase().replace('.', 'h').replace('pm', 'Après-midi')  }</span>
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

export default App;
