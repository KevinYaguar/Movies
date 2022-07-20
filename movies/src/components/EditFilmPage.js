import React from 'react';
import {useLocation} from 'react-router-dom';
import { EditFilmsForm } from './EditFilmsForm';

export const EditFilmPage = () => {

    const film = useLocation().state

    return (
        <div className='container mt-5'>
            <h3>Edit film</h3>
            <EditFilmsForm film={film}/>
        </div>
    )
}