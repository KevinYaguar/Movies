import React from 'react';
import { CreateFilmsForm } from './CreateFilmsForm';

export const CreateFilmPage = () => {

    return (
        <div className='container mt-5'>
            <h3>Add new film</h3>
            <CreateFilmsForm />
        </div>
    )
}