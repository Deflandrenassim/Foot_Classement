import React from 'react';
import './Contains.css';

export const Contains = ({children, appareance}) => {
  return (
    <div className={`contains ${appareance} `}>
      {children}
    </div>
  )
}
export const ContainsCard = ({children}) => {
  return (
    <div className='contains_card'>
      {children}
    </div>
  )
}
export const ContainsInformation = ({children}) => {
  return (
    <li className='contains_information'>
      {children}
    </li>
  )
}
export const ContainsPicture = ({children, src, alt}) => {
  return (
    <img src={src}  className='contains_picture' alt={alt} >
      {children}
    </img>
  )
}
export const ContainsScore = ({children}) => {
  return (
    <div  className='contains_score'>
      {children}
    </div>
  )
}
export const ContainsName = ({children}) => {
  return (
    <div  className='contains_name' >
      {children}
    </div>
  )
}
