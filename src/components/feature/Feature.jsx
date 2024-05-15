import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaUsers, FaStopwatch } from "react-icons/fa";
// import { FaStopwatch } from "react-icons/fa";
import "./feature.css"
import { TiTick } from "react-icons/ti";
import { IoAirplaneOutline } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { FaBook } from "react-icons/fa6";

const Feature = () => {
  return (

    <section id="feature">
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
    <Container>
        <Row>
            <Col lg={4}>
                <div className="feacher_item">
                    <div className="feature_icon">
                        <FaUsers className='icon_color'/>
                    </div>
                    <h4>User Clint First</h4>
                    <p>Lorem ipsum dolor adipisicing elit. Dolorum tempore labore, 
                        delectus in tenetur quam porro?</p>
                </div>
            </Col>

            <Col lg={4}>
                <div className="feacher_item">
                    <div className="feature_icon">
                        <TiTick className='icon_color'/>
                    </div>
                    <h4>Two free revision round</h4>
                    <p>Lorem ipsum dolor adipisicing elit. Dolorum tempore labore, 
                        delectus in tenetur quam porro?</p>
                </div>
            </Col>

            <Col lg={4}>
                <div className="feacher_item">
                    <div className="feature_icon">
                        <IoAirplaneOutline className='icon_color'/>
                    </div>
                    <h4>Templace custimazitation</h4>
                    <p>Lorem ipsum dolor adipisicing elit. Dolorum tempore labore, 
                        delectus in tenetur quam porro?</p>
                </div>
            </Col>

            <Col lg={4}>
                <div className="feacher_item">
                    <div className="feature_icon">
                        <MdContactSupport className='icon_color'/>
                    </div>
                    <h4>24/7 Support</h4>
                    <p>Lorem ipsum dolor adipisicing elit. Dolorum tempore labore, 
                        delectus in tenetur quam porro?</p>
                </div>
            </Col>

            <Col lg={4}>
                <div className="feacher_item">
                    <div className="feature_icon">
                        <FaStopwatch className='icon_color'/>
                    </div>
                    <h4>Quick Delivery</h4>
                    <p>Lorem ipsum dolor adipisicing elit. Dolorum tempore labore, 
                        delectus in tenetur quam porro?</p>
                </div>
            </Col>

            <Col lg={4}>
                <div className="feacher_item">
                    <div className="feature_icon">
                        <FaBook className='icon_color'/>
                    </div>
                    <h4>Hands and support</h4>
                    <p>Lorem ipsum dolor adipisicing elit. Dolorum tempore labore, 
                        delectus in tenetur quam porro?</p>
                </div>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Feature