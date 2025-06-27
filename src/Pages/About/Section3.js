import React from "react";

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

      <div className="booking-box">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-9">
            <div className="row g-3 align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="input-group d-flex justify-content-center">
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
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="input-group d-flex justify-content-center">
                  <span className="input-group-text">
                    <i className="bi bi-calendar"></i>
                  </span>
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="input-group d-flex justify-content-center">
                  <span className="input-group-text">
                    <i className="bi bi-clock"></i>
                  </span>
                  <input type="time" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 text-center gap-3">
            <button type="submit" className="btn book_now w-100">
              Book Now
            </button>
          </div>
        </div>
      </div>


      {/* <form action="/">
        <div className="booking-box">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-3 col-md-4">
              <div className="input-group">
                <input  type="text" className="form-control" placeholder="Person" />
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="input-group">
                <input type="date" className="form-control" placeholder="Date" />
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="input-group">
                <input type="time" className="form-control" placeholder="Time" />
              </div>
            </div>

            <div className="col-lg-2 col-md-4">
              <div className="input-group">
                <button className="btn book_now w-100">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </form> */}
    </section>
  );
}

export default Section3;
