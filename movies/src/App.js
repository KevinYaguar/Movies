
import React from 'react';
import {Redirect, Route, Routes} from "react-router-dom";
import { CreateFilmPage } from './components/CreateFilmPage';
import { EditFilmPage } from './components/EditFilmPage';
import ListingMovies from './components/ListingFilms';

function App() {

  return (
    <Routes>
      <Route path='/' exact element={<ListingMovies/>}/>
      <Route path='/create' exact element={<CreateFilmPage/>}/>
      <Route path='/edit' exact element={<EditFilmPage/>}/>
    </Routes>
  )
}

export default App;
