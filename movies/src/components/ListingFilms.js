import React from 'react';
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import moment from 'moment';
import { Card } from "./Card";
import { Filters } from "./Filters";
import { getAllFilms } from "./../utils/service";

function ListingFilms() {

  const initialFilters = {
    fromDate: moment().subtract(10, 'years').format('YYYY'),
    toDate: moment().format('YYYY'),
    director: 'all',
    producer: 'all',
  }
  
  const [filters, setFilters] = useState(initialFilters)
  const [films, setFilms] = useState([])

  const navigate = useNavigate()

  useEffect(()=> {
    const getFilms = async() => {
      try {
        const films = await getAllFilms()
        setFilms(films)
      } catch (error) {
        setFilms([])
      }
    }
    getFilms()
  }, [])

  const getNewSet = (array) => {
    return [...(new Set(array))]
  }

  const directors = getNewSet(films?.map((e)=> e.director))
  const producers = getNewSet(films?.map((e)=> e.producer))

  const moviesFilteredByDirector = films?.filter((e)=> {
      if(filters.director !== 'all'){
        return e.director === filters.director
      }
      return e
  })

  const filteredByProducer = moviesFilteredByDirector.filter((e)=> {
    if(filters.producer !== 'all'){
      return (e.producer === filters.producer)
    }
    return e
  })

  const filterByRealseDate = filteredByProducer.filter((e)=> {
    return (Number(e.release_date) > Number(filters.fromDate) && Number(e.release_date) < Number(filters.toDate))
  })

  return (
    <div className="container mt-5"> 
      <div className="row justify-content-between px-3">
        <h3>Movies</h3>
        <div>
          <Button
            color='primary'
            variant='outlined'
            onClick={()=>{
                navigate('/create')
            }}
          >
            Add Film
          </Button>
        </div>
      </div>
      <div className=" row mt-3 mb-5">
        <Filters 
          filters={filters}
          setFilters={setFilters}
          directors={directors}
          producers={producers}
        />
      </div>
      <div className="row">
        {filterByRealseDate.map((e)=> {
          return(
            <Card film={e} key={e.id}/>
          )
        })}
      </div>
    </div>
  );
}

export default ListingFilms;
