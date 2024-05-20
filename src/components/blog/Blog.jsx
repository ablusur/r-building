import React from 'react'
import "./blog.css"
import { Col, Container, Row } from 'react-bootstrap'
import Images from "../../assets/blog-1.jpg"
import { FaArrowRightLong } from "react-icons/fa6";


const Blog = () => {
  return (
    <section id="blog">
        <Container>
            <Row>
                <Col lg={4}>
                    <div className="blog_main">
                        <img src={Images}alt="blog" />
                        <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                        <p>See how pivoting to Webflow changed one personshello haos lotus sales strategy and allowed him to attrac</p>
                        <h6>View Projects <FaArrowRightLong/></h6>

                    </div>
                </Col>
                <Col lg={4}>
                    <div className="blog_main">
                        <img src={Images}alt="blog" />
                        <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                        <p>See how pivoting to Webflow changed one personshello haos lotus sales strategy and allowed him to attrac</p>
                        <h6>View Projects <FaArrowRightLong/></h6>

                    </div>
                </Col>
                <Col lg={4}>
                    <div className="blog_main">
                        <img src={Images}alt="blog" />
                        <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                        <p>See how pivoting to Webflow changed one personshello haos lotus sales strategy and allowed him to attrac</p>
                        <h6>View Projects <FaArrowRightLong/></h6>

                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Blog