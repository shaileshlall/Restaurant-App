import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import '../../Styles/BlogStyles.css'

const Section1 = () => {
  return (
    <section className="hero_blog_section">
        <Container>
          <Row>
            <Col lg={4} className="mb-5 mb-lg-0">
              <div className="blog_hero_text text-center">
                <h1 className="text-white">Our Blog</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  )
}

export default Section1