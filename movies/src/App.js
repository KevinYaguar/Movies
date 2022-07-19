import { Card } from "./components/Card";
import { mock } from "./components/mock";
import { useState } from "react";
import { Filters } from "./components/Filters";
import moment from 'moment';

function App() {

  const initialFilters = {
    fromDate: moment().subtract(10, 'years').format('YYYY'),
    toDate: moment().format('YYYY'),
    director: 'all',
    producer: 'all',
  }

  
  const [filters, setFilters] = useState(initialFilters)

  const getNewSet = (array) => {
    return [...(new Set(array))]
  }

  const directors = getNewSet(mock.map((e)=> e.director))
  const producers = getNewSet(mock.map((e)=> e.producer))

  const moviesFilteredByDirector = mock.filter((e)=> {
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

  console.log(filters)

  const filterByRealseDate = filteredByProducer.filter((e)=> {
    return (Number(e.release_date) > Number(filters.fromDate) && Number(e.release_date) < Number(filters.toDate))
  })

  return (
    <div className="container"> 
      <div className="mt-5">
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
            <Card key={e.title} src={e.movie_banner} name={e.title} director={e.director} producer={e.producer}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
