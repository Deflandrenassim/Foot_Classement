import React, { useEffect } from 'react';
import axios from 'axios';
import './Spanish.css';

export const Spanish = () => {
    useEffect(() => {
        axios.get('http://localhost:8080/liga?liga=liga')
            .then((response)=>{
                console.log(response.data);
            })
    }, [])
  return (
    <div> return  </div> 
  )
}
