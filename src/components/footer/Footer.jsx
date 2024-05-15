import React from 'react'
import "./footer.css"
import { Col, Container, Row } from 'react-bootstrap'
import Logo from "../../assets/logo.png"
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <Container-fluid>
            <Row className='footer_main'>
                <Col lg={4}>
                    <div className="footer_left">
                        <img src={Logo}alt="" />
                        <h6>We are always to open the discuss your project and improve your online presence.</h6>
                    </div>
                </Col>
                <Col lg={8}>
                    <div className="footer_right">
                        <h1>Lets Talk!</h1>
                        <h6>We are always to open the discuss your project and improve your online presence and help with your UI/XI design challanges.</h6>
                    </div>
                </Col>
                <a href=""><FaFacebook/></a>
                
            </Row>
            
        </Container-fluid>
    </footer>
  )
}

export default Footer