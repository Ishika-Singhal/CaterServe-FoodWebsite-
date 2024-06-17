import React from 'react';
import './Welcome.css'
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <>
      <div className='container-fluid welcome py-5  mt-0'>
        <div className='container'>
          <div className='row g-5 align-items-center '>
            <div className='col-lg-7 col-md-12'>
              <small className='d-inline-block fw-bold text-dark text-uppercase  border rounded-pill border-warning px-4 py-1 mb-4 animated bounceInDown'>
                Welcome to CaterServe
              </small>
              <h2 className="mb-4 animated bounceInDown">
                Book <span className=" welcometitle">Cater</span> Serve For Your Dream
                Event
              </h2>
              <Link to='/' className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft">Book Now</Link>
              <Link to='/' className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 animated bounceInLeft">Know More</Link>
            </div>
            <div className='col-lg-5 col-md-12'>
              <img src="assets/img/welcome.png" alt="welcome"  className="img-fluid rounded animated zoomIn"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


