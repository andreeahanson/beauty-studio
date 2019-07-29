import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <>
    <h2 className='not-found'>Page not found or loading</h2>
    <h2 className='not-found'>Go back to <Link className='not-found' to='/'>home</Link> page</h2>
    </>
  )
}

export default NotFound;