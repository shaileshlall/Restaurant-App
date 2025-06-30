import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Section5() {
  return (
    <section className="aboutUs_section5 pt-180 pb-170">
      <Container>
        <Row className="align-items-center justify-content-end">
          <Col lg={6} className="px-5">
            <span className="section_title">About Our Restaurant</span>
            <h2>We Provide Good Food For Your Family!</h2>
            <p>
              Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco
              laboris nisi ufsit aliquip ex ea commodo consequat is aute irure
              m, quis nostrud exer
            </p>
            {/* Form Section */}
            <form className="search-box" action={"#"}>
              <div className="inout_form">
                <input type="text" placeholder="Your Email" />
              </div>
              <div className="search_form">
                <button type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section5;
