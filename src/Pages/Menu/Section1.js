import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Section1() {
  return (
    <>
      <section className="hero_menu_section">
        <Container>
          <Row>
            <Col lg={4} className="mb-5 mb-lg-0">
              <div className="menu_hero_text text-center">
                <h1 className="text-white">Our Menu</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section1;
