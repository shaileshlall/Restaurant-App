import React from "react";
import { Container, Row } from "react-bootstrap";

function Section6() {
  return (
    <section className="aboutUs_section6 pt-180 pb-170">
      <Container>
        <Row className="align-items-center justify-content-end">
          <span className="section_title text-center">Services We Offer</span>
          <h2 className="text-center mb-5 mt-3">Our Best Services</h2>

          <div className="card_container d-flex gap-3 justify-content-center align-items-center">
            <div className="row gx-4 gy-4">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <div className="cards d-flex flex-column align-items-center justify-content-center gap-2">
                  <span class="cards-icons material-symbols-outlined">
                    chef_hat
                  </span>
                  <h5 className="text-center mt-3">
                    <a href="/">Best Chef</a>
                  </h5>
                  <span className="cards_text text-center mt-3 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <div className="cards cards-2 d-flex flex-column align-items-center justify-content-center gap-2">
                  <span class="cards-icons material-symbols-outlined">
                    calendar_meal
                  </span>
                  <h5 className="text-center mt-3">
                    <a href="/">Quality Food</a>
                  </h5>
                  <span className="cards_text text-center mt-3 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <div className="cards d-flex flex-column align-items-center justify-content-center gap-2">
                  <span class="cards-icons material-symbols-outlined">
                    dine_in
                  </span>
                  <h5 className="text-center mt-3">
                    <a href="/">Perfact Cook</a>
                  </h5>
                  <span className="cards_text text-center mt-3 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;
