import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
import "./projects.css"

const Projects = () => {
  return (
    <>
    <section id="project">
    <Container>
        <Row>
            <div className="project_heading">
          <Row>
            <Col lg={6}>
                <h2>View our projects.</h2>
            </Col>
            <Col lg={{span:2,offset:4}}>
            <h6>View More <FaArrowRightLong/></h6>
            </Col>
         </Row>
           </div>

        <Col lg={8}>
          <div className="project_left">
            <Row>
                 <Col lg={6} sm={6} xs={6}>
                 <h3>Workhub office webflow interior design</h3>
                 <p>Lorem ipsum dolor dolor sit amet consectetur amet consectetur.</p>
                 <h6>View Projects <FaArrowRightLong/></h6>
                 </Col>
            </Row>
          </div>
        </Col>

        <Col lg={4}>
            <div className="project_right">
                <div className="project_right_top">
                    <div className="project_content">
                        <h3>Unsisis project disign</h3>
                        <p>View Projects <FaArrowRightLong/></p>
                    </div>
                </div>
                <div className="project_right_top">
                    <div className="project_content">
                        <h3>Unsisis project disign</h3>
                        <p>View Projects <FaArrowRightLong/></p>
                    </div>
                </div>
            </div>
        </Col>
        </Row>
    </Container>
    </section>
    
    </>
  )
}

export default Projects