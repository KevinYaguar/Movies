import React from 'react';
import { useNavigate } from "react-router-dom";

export const Card = ({src, film}) => {

    const navigate = useNavigate()

    return (
        <div className='col-3 mb-2 rounded' style={{cursor: 'pointer'}}>
            <div className=' shadow d-flex flex-column bg-light rounded p-2' onClick={()=> {navigate('/edit', {state: film})}}>
                <img alt='' src={film.movie_banner} className='rounded'/>
                <div className='mt-2 d-flex flex-column'>
                    <span>{film.title}</span>
                    <span>Director: {film.director}</span>
                    <span>Producer: {film.producer}</span>
                </div>
            </div>
        </div>
    )
}