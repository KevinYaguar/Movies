import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { createFilm } from '../utils/service';
import { Button, CircularProgress } from '@mui/material';

const FilmCreateSchema = Yup.object().shape({
    description: Yup.string().required("Description is a required field"),
    title: Yup.string().required("Title is a required field"),
    director: Yup.string().required("Director is a required field"),
    producer: Yup.string().required("Producer is a required field"),
    release_date: Yup.string().required("ReleaseDate is a required field"),
});

export const CreateFilmsForm = () => {

  const navigate = useNavigate()
  const [progress, setProgress] = useState(false)

  const initialValues = {
      title: '',
      director: '',
      producer: '',
      description: '',
      release_date: '',
  }
  
  const handleSubmit = async(values) => {

    try {
        await createFilm(values)
        setTimeout(()=>{
            setProgress(false)
            navigate('/')
        }, [3000])
    } catch (error) {
        setProgress(false)
        console.error(error)
    }
  }

  return(
      <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={FilmCreateSchema}
          onSubmit={(values) => {
              setProgress(true)
              handleSubmit(values)
          }}
          validateOnMount
      >
      {({ handleSubmit, handleBlur, isValid, isSubmitting}) => (
        <>
          <Form className="form form-label-right">
            <div className="row">
              <div className="col-lg-4">
                <Field
                  onBlur={handleBlur}
                  className='form-control'
                  name="title"
                  placeholder="Title"
                  label="Title"
                />
                <ErrorMessage name='title'>{msg => <div className='text-danger'>{msg}</div>}</ErrorMessage>
              </div>
              <div className="col-lg-4">
                <Field
                  className='form-control'
                  name="director"
                  placeholder="Director"
                  label="Director"
                />
                <ErrorMessage name='director'>{msg => <div className='text-danger'>{msg}</div>}</ErrorMessage>
              </div>
              <div className="col-lg-4">
                <Field
                  className='form-control'
                  name="producer"
                  placeholder="Producer"
                  label="Producer"
                />
                <ErrorMessage name='producer'>{msg => <div className='text-danger'>{msg}</div>}</ErrorMessage>
              </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-4">
                  <Field
                    className='form-control'
                    name="description"
                    placeholder="Description"
                    label="Description"
                  />
                  <ErrorMessage name='description'>{msg => <div className='text-danger'>{msg}</div>}</ErrorMessage>
                </div>
                <div className="col-lg-4">
                  <Field
                    className='form-control'
                    name="release_date"
                    placeholder="ReleaseDate"
                    label="ReleaseDate"
                  />
                  <ErrorMessage name='description'>{msg => <div className='text-danger'>{msg}</div>}</ErrorMessage>
                </div>
              </div>
              <Button
                disabled={!isValid || isSubmitting}
                variant="contained"
                color="secondary"
                type="submit"
                className="mt-4"
                size="large"
                onClick={handleSubmit}
                endIcon={
                  progress && <CircularProgress size={20} color="secondary"/>  
                }
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="ml-5 mt-4"
                size="large"
                onClick={()=>{
                  navigate('/')
                }}
              >
                Back
              </Button>
          </Form>
        </>
      )}
    </Formik>
  )
}