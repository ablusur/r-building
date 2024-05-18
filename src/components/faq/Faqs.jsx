import React from 'react'
import {Container, Row, Col, Accordion} from  'react-bootstrap'
import "./faq.css"

const Faqs = () => {
  let accordion = [
    {
      evenky:'0',
      nembetr:'01',
      accordinghead:'How much time does he takes?',
      accordingbody:'lorem insporation lorem insporation lorem insporation md ablusur rahman dihiderr Lotus from Jamalpur.md ablusur insporation md ablusur rahman dihiderr Lotus from Jamalpur.'
    },
    {
      evenky:'1',
      nembetr:'02',
      accordinghead:'What is your class naiming convention?',
      accordingbody:'lorem insporation lorem insporation md ablusur rahman dihiderr Lotus from Jamalpur.'
    },
    {
      evenky:'2',
      nembetr:'03',
      accordinghead:'How do we communicate?',
      accordingbody:'lorem insporation lorem insporation md ablusur rahman dihiderr Lotus from Jamalpur.md ablusur rahman dihider'
    },
    {
      evenky:'3',
      nembetr:'04',
      accordinghead:'I have a biggen project. Can you help me?',
      accordingbody:'lorem insporation md ablusur rahman dihiderr lorem insporation Lotus from Jamalpur.'
    },
    {
      evenky:'4',
      nembetr:'05',
      accordinghead:'What is your class naiming convention today?',
      accordingbody:'lorem insporation md ablusur rahman dihiderr Lotus from Jamalpur. lorem insporation'
    },
  ]
  return (

    <>
    <section id="faq">
    <Container>
      <Row>
        <Col lg={4}>
        <div className="faq_left">
            <h2>Frequently asked questions</h2>
            <p>Contact us for more info</p>
        </div>
        </Col>
        <Col lg={8}>
            <div className="faq_right">
              <Accordion defaultActiveKey={['0']} alwaysOpen>
                {accordion.map((props,index)=>(
                  <Accordion.Item eventKey={props.evenky} key={index}>
                    <Accordion.Header><h4><span>{props.number}</span>{props.accordinghead}</h4></Accordion.Header>
                    <Accordion.Body><p>{props.accordingbody}</p></Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
        </Col>
      </Row>
    </Container>
    </section>
    </>

  )
}

export default Faqs