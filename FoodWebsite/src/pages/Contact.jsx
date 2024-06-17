import React from 'react';
import {Link} from 'react-router-dom'
import './Contact.css'
import Banner from '../components/Banner';


export default function Contact() {
  return (
    <>
      <div className="container-fluid py-6 my-6 mt-0 contact">
        <div className="container text-center animated bounceInDown">
          <h1 className="display-1 mb-4 pt-5">Contact</h1>
          <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
            <Link className="breadcrumb-item text-dark text-xl" to="/">
              Home
            </Link>
            <Link  className="breadcrumb-item text-xl" aria-current="page">
              Contact
            </Link>
           
          </ol>
        </div>
      </div>
      <div className='container-fluid contact py-6 wow bounceInUp'>
        <div className='container'>
          <div className='p-5 rounded contact-form '>
            <div className="row g-4">
              <div className="col-12">
                <Banner
                  title="Get in touch"
                  description="Contact Us For Any Queries!"
                />
              </div>
              <div className="col-md-6 col-lg-7">
                <p className="mb-4">
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax & PHP in a few minutes. Just
                  copy and paste the files, add a little code and you're done.
                </p>
                <form>
                  <input
                    type="text"
                    className="w-100 form-control p-3 mb-4 border-warning bg-light"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    className="w-100 form-control p-3 mb-4 border-warning bg-light"
                    placeholder="Enter Your Email"
                  />
                  <textarea
                    className="w-100 form-control mb-4 p-3 border-warning bg-light"
                    rows="4"
                    cols="10"
                    placeholder="Your Message"
                  ></textarea>
                  <button
                    className="w-100 btn btn-warning form-control p-3 border-warning bg-warning rounded-pill text-dark"
                    type="submit"
                    onClick={(e)=> {e.preventDefault()}}
                  >
                    Submit Now
                  </button>
                </form>
              </div>
              <div className="col-md-6 col-lg-5 py-5 my-5">
                <div>
                 <img src="public/assets/img/index.jpg" alt="img" className="object-cover bounceInUp animated object-fit-fill border rounded conatctimg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}


