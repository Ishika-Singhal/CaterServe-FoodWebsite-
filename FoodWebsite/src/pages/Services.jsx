import React from 'react';
import Banner from '../components/Banner';
import { services } from '../data/Services';
import { Link } from 'react-router-dom';
import './Services.css'

export default function Services() {
  return (
   <>
     <div className='container-fluid service py-5'>
       <div className='container py-5'>
         <Banner title="Our Services"  description="What we Offer"/>
         <div className='row g-4 pt-5'>
           {services.map((val,index)=>(
                  <div className='col-lg-4 col-md-6 col-sm-12 wow bounceInUp' key={index}>
                    <div className="rounded service-item">
                      <div className="service-content d-flex align-items-center justify-content-center p-4">
                        <div className="service-content-icon text-center">
                          {val.icon}
                          <h4 className="mb-3">{val.name}</h4>
                          <p className="mb-4">{val.discription}</p>
                          <Link
                            to="/service"
                            className="btn btn-warning px-4 py-2 rounded-pill"
                          >
                            {val.btn}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
           ))}
           <div>
           </div>
         </div>
       </div>
     </div>
     
   </>
  )
}


