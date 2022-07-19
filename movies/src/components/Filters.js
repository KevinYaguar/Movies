import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import moment from 'moment';

export const Filters = ({filters, setFilters, directors, producers}) => {

    return (
        <div className='row mb-5'>
            <div className='col-3'>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                        views={['year']}
                        label="From"
                        value={filters.fromDate}
                        onChange={(newValue) => {
                        setFilters({
                            ...filters,
                            fromDate: moment(newValue).format('YYYY')
                        });
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <div className='col-3'>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                        views={['year']}
                        label="To"
                        value={filters.toDate}
                        onChange={(newValue) => {
                        setFilters({
                            ...filters,
                            toDate:  moment(newValue).format('YYYY')
                        });
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <div className='col-3'>
                <FormControl fullWidth>
                    <InputLabel >Director</InputLabel>
                    <Select
                        value={filters.director}
                        label="Director"
                        onChange={(e)=> {
                            setFilters({
                                ...filters,
                                director: e.target.value
                            })
                        }}
                    >
                        
                        <MenuItem value='all' key={'all'} >ALL</MenuItem>
                        {directors.map((e)=> {
                            return(
                                <MenuItem key={e} value={e}>{e}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>
            <div className='col-3'>
                <FormControl fullWidth>
                    <InputLabel >Producer</InputLabel>
                    <Select
                        value={filters.producer}
                        label="Producer"
                        onChange={(e)=> {
                            setFilters({
                                ...filters,
                                producer: e.target.value
                            })
                        }}
                    >
                        
                        <MenuItem value='all' key={'all'} >ALL</MenuItem>
                        {producers.map((e)=> {
                            return(
                                <MenuItem key={e}  value={e}>{e}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}