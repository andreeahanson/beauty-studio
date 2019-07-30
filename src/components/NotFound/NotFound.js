import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <>
    <h3 className='not-found'>Page not found. Go back to <Link className='not-found' to='/'>home</Link> page</h3>
    </>
  )
}

export default NotFound;