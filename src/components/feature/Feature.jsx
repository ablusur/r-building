import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaUsers , FaStopwatch } from "react-icons/fa";
import "./feature.css"
import { TiTick } from "react-icons/ti";
import { IoAirplaneOutline } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { FaBook } from "react-icons/fa6";

const Feature = () => {

    let jalononame = [
    {
        title: "User Clint First",
        para:"Lorem ipsum dolor adipisicing elit. Dolorum tempore labor delectus in tenetur quam porro1",
        icon: <FaUsers className="icon_color"/>
    },

    {
        title: "Two free revision round",
        para:"Lorem ipsum dolor adipisicing elit. Dolorum tempore labor delectus in tenetur quam porro2",
        icon: <TiTick className="icon_color"/>
    },

    {
        title: "24/7 Support",
        para:"Lorem ipsum dolor adipisicing elit. Dolorum tempore labor delectus in tenetur quam porro3",
        icon: <IoAirplaneOutline className="icon_color"/>
    },

    {
        title: "User Clint First",
        para:"Lorem ipsum dolor adipisicing elit. Dolorum tempore labor delectus in tenetur quam porro4",
        icon: <MdContactSupport className="icon_color"/>
    },

    {
        title: "Quick Delivery",
        para:"Lorem ipsum dolor adipisicing elit. Dolorum tempore labor delectus in tenetur quam porro5",
        icon: <FaStopwatch className="icon_color"/>
    },

    {
        title: "Hands and support",
        para:"Lorem ipsum dolor adipisicing elit. Dolorum tempore labor delectus in tenetur quam-6",
        icon: <FaBook className="icon_color"/>
    },



]
  return (

    <section id="feature">
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
    <Container>
        <Row>
            {jalononame.map((item)=>(
            <Col lg={4}>
                <div className="feacher_item">
                    <div className="feature_icon">{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.para}</p>
                </div>
            </Col>
            ))}
        </Row>
    </Container>
    </section>
  )
}

export default Feature