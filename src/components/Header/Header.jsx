import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <div className="header"> 
         <ul>
          <li className="li">
            <Link to="/premiereleague">Premiere League </Link>
          </li>
          <li>
            <Link to="/ligue1">Ligue 1 </Link>
          </li>
          <li>
            <Link to="/liga">Liga </Link>
          </li>
        </ul>
    </div>
  )
}
