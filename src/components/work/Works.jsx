import React from 'react'
import "./work.css"
import { Container, Row, Col } from 'react-bootstrap'
import Pointer from "../../assets/pointer1.png"


const Works = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <div className="work_test">
            <h2>How we work</h2>
            <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, debitis.</h6>
            <a href="#">Get in touch with us</a>
          </div>
        </Col>
        <Col lg={8}>
          <div className="about_item">
            <div className="a_icon">
              <img src={Pointer} alt="pointer" />
            </div>
            <h3>Strategy</h3>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Works