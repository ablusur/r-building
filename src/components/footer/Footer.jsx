import React from 'react'
import "./footer.css"
import { Col, Container, Row } from 'react-bootstrap'
import Logo from "../../assets/logo.png"
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiTwitter, CiLinkedin } from "react-icons/ci";

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
                         <a href="#"><FaFacebook className='socalicon'/><CiTwitter className='socalicon'/><FaInstagram className='socalicon'/><CiLinkedin className='socalicon'/></a>
                    </div>

                </Col>    

            </Row>
            
        </Container-fluid>
    </footer>
  )
}

export default Footer