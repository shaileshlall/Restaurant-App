import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Section1() {
  return (
    <>
      <section className="hero_about_section">
        <Container>
          <Row>
            <Col lg={4} className="mb-5 mb-lg-0">
              <div className="about_hero_text text-center">
                <h1 className="text-white">About Us</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section1;
