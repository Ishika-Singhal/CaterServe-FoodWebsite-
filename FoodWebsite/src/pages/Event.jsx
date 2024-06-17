import React, { useState } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import "./Event.css";
import { event } from "../data/Eventitem";

export default function Event() {
  const [eventitem, seteventitem] = useState(event);

  const eventcategory = (category) => {
    const categoryitem = event.filter((item) => item.category === category);
    seteventitem(categoryitem);

    if (category === "all") {
      seteventitem(event);
      return;
    }
  };

  return (
    <>
      <div className="container-fluid event py-5  mt-0">
        <div className="container">
          <Banner
            title="Latest Events"
            description="Our Social and Professional Event Gallery"
          />
          <div className="text-center tab-class">
            <ul className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp ">
              <li className="nav-item p-2">
                <Link
                  to="/event"
                  className="d-flex mx-2 py-2 border border-warning eventlink rounded-pill"
                  onClick={() => eventcategory("all")}
                >
                  {" "}
                  <span className="text-dark" style={{ width: "150px" }}>
                    All Events
                  </span>
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  to="/event"
                  className="d-flex mx-2 py-2 border border-warning eventlink rounded-pill"
                  onClick={() => eventcategory("wedding")}
                >
                  {" "}
                  <span className="text-dark" style={{ width: "150px" }}>
                    Wedding
                  </span>
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  to="/event"
                  onClick={()=>eventcategory("corporate")}
                  className="d-flex mx-2 py-2 border border-warning eventlink rounded-pill"
                >
                  {" "}
                  <span className="text-dark" style={{ width: "150px" }}>
                    Corporate
                  </span>
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  to="/event"
                  onClick={()=>eventcategory("cocktail")}
                  className="d-flex mx-2 py-2 border border-warning eventlink rounded-pill"
                >
                  {" "}
                  <span className="text-dark" style={{ width: "150px" }}>
                    Cocktail
                  </span>
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  to="/event"
                  onClick={()=>eventcategory("buffet")}
                  className="d-flex mx-2 py-2 border border-warning eventlink rounded-pill"
                >
                  {" "}
                  <span className="text-dark" style={{ width: "150px" }}>
                    Buffet
                  </span>
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div className="fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {eventitem.map((val, index) => (
                        <div
                          key={index}
                          className="col-md-6 col-lg-3 wow bounceInUp"
                        >
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src={val.image}
                              alt="img"
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">{val.category}</h4>
                              <Link to="#" className="my-auto">
                                {val.icon}
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
