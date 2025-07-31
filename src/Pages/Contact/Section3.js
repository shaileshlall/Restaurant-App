import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Styles/ContactStyles.css";

const Section3 = () => {
  return (
    <section className="contactUs_section3 mt-5 mb-5">
      <Container>
        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <div>
              <h2>Get in Touch</h2>
            </div>
            <div className="contact_form mt-4">
              <form action="#">
                <textarea
                  className="contact_textarea mb-3"
                  placeholder="Enter Message"
                ></textarea>
                <div className="name_email_field mb-3">
                  <input
                    className="input_field"
                    type="text"
                    placeholder="Enter your name"
                  />
                  <input
                    className="input_field"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <input
                    className="input_field mb-4"
                    type="text"
                    placeholder="Enter subject"
                  />
                </div>
                <button className="contact_submit_btn">Submit</button>
              </form>
            </div>
          </Col>

          <Col lg={6}>
            <div className="contact_right_slider3">
              <div className="slider_content">
                {/* Card1 */}
                <div className="card mb-0">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <i class="bi bi-house-door fs-1"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <span className="card-title">
                          Buttonwood, California.
                        </span>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            Rosemead, CA 91770
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card2 */}
                <div className="card mb-0">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <i class="bi bi-tablet fs-1"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <span className="card-title">+1 253 565 2365</span>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            Mon to Fri 9am to 6pm
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card3 */}
                <div className="card mb-0">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <i class="bi bi-envelope fs-1"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <span className="card-title">
                          support@testyburger.com
                        </span>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            Send us your query anytime!
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section3;
