import React from "react";
import "../../Styles/AboutStyles.css";

function Section3() {
  return (
    <section className="aboutUs_booking_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="section-tittle text-center mb-40">
              <span className="section_title">About Our Restaurant</span>
              <h2>Book A Table</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="booking-box d-flex justify-content-center align-items-center flex-wrap h-auto">
        <div className="col-lg-3 col-md-6 col-12">
          {/* Person Input Section */}
          <div className="input-group d-flex justify-content-center mb-3">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <select className="form-control">
              <option selected disabled>
                Person
              </option>
              <option>1 Person</option>
              <option>2 Persons</option>
              <option>3 Persons</option>
              <option>4+ Persons</option>
            </select>
          </div>
          {/* Date Input Section */}
          <div className="input-group d-flex justify-content-center mb-3">
            <span className="input-group-text">
              <i className="bi bi-calendar"></i>
            </span>
            <input type="date" className="form-control" />
          </div>

          {/* Time Input Section */}
          <div className="input-group d-flex justify-content-center">
            <span className="input-group-text">
              <i className="bi bi-clock"></i>
            </span>
            <input type="time" className="form-control" />
          </div>

          {/* Button Section */}
          <div className="input-group d-flex justify-content-center mt-3">
            <button className="btn book_now">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
