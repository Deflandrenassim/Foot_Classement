import React from 'react';
import './Classement.css';
import { Contains } from '../Contains/Contains';

export const Classement = ({children, name}) => {
  return (
   <Contains>
    <div> {name}</div>
        {children}
    </Contains>
  )
}
export const ClassementName = ({children, name}) => {
    return (
        <div>
            {name}
            {children}
        </div>
    )
}
export const ClassementLogo = ({children, img}) => {
    return (
        <div>
            <img src={img} alt=""/>
            {children}
        </div>
    )
}
