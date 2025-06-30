import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutImg from "../../assets/About_Page/about.png";

function Section4() {
  return (
    <section className="aboutUs_section4">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="px-5">
            <span className="section_title">Discover Your Test</span>
            <h2>
              We Provide Good Food <br /> For Your Family!
            </h2>
            <p>
              Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco
              laboris nisi ufsit aliquip ex ea commodo consequat is aute irure
              m, quis nostrud exer.
            </p>

            <div className="about_icon_text d-flex mt-5 mb-4 gap-3">
              <span className="about_icon">
                <span class="icons material-symbols-outlined">chef_hat</span>
                <span>
                  Ut enim ad minim veniam, <br /> quis nostrud exer.
                </span>
              </span>

              <span className="about_icon">
                <span class="icons material-symbols-outlined">dining</span>
                <span>
                  Ut enim ad minim veniam, <br /> quis nostrud exer.
                </span>
              </span>
            </div>

            <div className="about_icon_text d-flex gap-3">
              <span className="about_icon">
                <span class="icons material-symbols-outlined">menu_book_2</span>
                <span>
                  Ut enim ad minim veniam, <br /> quis nostrud exer.
                </span>
              </span>

              <span className="about_icon">
                <span class="icons material-symbols-outlined">dine_in</span>
                <span>
                  Ut enim ad minim veniam, <br /> quis nostrud exer.
                </span>
              </span>
            </div>
          </Col>

          <Col lg={6} className="text-center mb-5 mb-lg-0">
            <img src={AboutImg} className="img-fluid" alt="Promotion img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section4;
