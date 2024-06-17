import React from 'react';


export default function Banner({title,description}) {
  return (
    <div className='text-center bounceInUp'>
      <small className='d-inline-block fw-bold text-dark text-uppercase  border rounded-pill border-warning px-4 py-1 mb-4'>
        {title}
      </small>
      <h1>{description}</h1>
    </div>
  )
}


