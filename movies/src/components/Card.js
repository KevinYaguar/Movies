import React from 'react';

export const Card = ({src, name, director, producer}) => {

    return (
        <div className='d-flex flex-column col-3'>
            <img alt='' src={src} />
            <span>{name}</span>
            <span>Director: {director}</span>
            <span>Producer: {producer}</span>
        </div>
    )
}