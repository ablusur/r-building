import React from 'react'
import {Container, Row, Col, } from 'react-bootstrap'
import "./baaner.css"
import Baaner from "../../assets/baaner.png"

const Baaner = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg-6>
                    <div className="baaner_text">
                        <h2>Building stellar websites for early startups</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi.</p>
                        <span><a href="#"> View our work</a><b> view pricing </b></span>

                    </div>
                </Col>
                <Col lg-6>
                    <div className="baaner_img">
                       <img src={Baaner}alt="baaner" />
                    </div>
                    </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Baaner