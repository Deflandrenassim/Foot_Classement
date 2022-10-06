import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import './Loading.css';

export const Loading = () => {
    return (
        <div className='loading'>
            <MagnifyingGlass
                visible={true}
                height="80"
                align="center"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor='#c0efff'
                color='#e15b64'
            />
        </div>
    )
}
