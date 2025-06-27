import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";

function Section2() {
  return (
    <section className="aboutUs_section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center mb-5 mb-lg-0">
            <img
              src={Burger}
              className="img-fluid"
              alt="Promotion img"
            />
          </Col>
          <Col lg={6} className="px-5">
            <span className="section_title">About Our Restaurant</span>
            <h2>We Provide Good Food For Your Family!</h2>
            <p>
              Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco
              laboris nisi ufsit aliquip ex ea commodo consequat is aute irure
              m, quis nostrud exer
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected our, or randomised words which don't look even slightly
              believab If you are going to use a passage.
            </p>
            <Link to="/" className="btn btn_red px-4 py-2 rounded-0 mt-3">
              Learn More
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section2;
