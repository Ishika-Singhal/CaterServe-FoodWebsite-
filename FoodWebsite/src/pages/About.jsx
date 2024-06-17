import React from "react";
import "./About.css";
import Banner from "../components/Banner";
import { features } from "../data/Features";
import { aboutinfo } from "../data/Aboutinfo";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="container-fluid welcome py-5 mt-0">
        <div className="container">
          <div className="row g-5 align-items-center ">
            <div className="col-lg-5 bounceInUp wow">
              <img src="assets/img/about.jpg" className="img-fluid rounded" />
            </div>
            <div className="col-lg-7 bounceInUp wow">
              <Banner
                title="About Us"
                description="Trusted By 200 + satisfied clients"
              />
              <p className="mb-4">
                All our ingredients are sourced from local producers to ensure
                quality and freshness. That's why our menu is seasonal.
              </p>
              <div className="row g-4 text-dark mb-5">
                {features.map((val, index) => (
                  <div key={index} className="col-sm-6">
                    {val.icon} {val.text}
                  </div>
                ))}
              </div>
              <Link to="" className="btn btn-warning py-3 px-5 rounded-pill">
                About Us<i className="fas fa-arrow-right ps-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid faqt py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <div className="row g-4">
                {aboutinfo.map((val, index) => (
                  <div className="col-sm-4 wow bounceInUp" key={index}>
                    <div className="faqt-item bg-warning rounded p-4 text-center">
                      {val.icon}
                      <h1 className="display-4 fw-bold">{val.counter}</h1>
                      <p className="text-dark text-uppercase fw-bold mb-0">
                        {val.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 wow bounceInUp">
              <div className="video">
                <button
                  type="button"
                  className="btn btn-play"
                  data-src="https://cdn.pixabay.com/video/2023/02/22/151773-801433081_tiny.mp4"
                >
                 
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
