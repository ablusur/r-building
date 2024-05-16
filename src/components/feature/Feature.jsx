import React from 'react'
import "./feature.css"
import { Container, Row} from 'react-bootstrap'
import Featurereusable from '../reuseablefeature/Featurereusable';

const Feature = () => {

//     let jalononame = [
//     {
//         title: "User Clint First",
//         para:"Lorem ipsum dolor adipisicing elit. Dolorum tempore labor delectus in tenetur quam porro1",
//         icon: <FaUsers className="icon_color"/>
//     },

//     {
//         title: "Two free revision round",
//         para:"Lorem ipsum dolor adipisicing elit. Dolorum tempore labor delectus in tenetur quam porro2",
//         icon: <TiTick className="icon_color"/>
//     },

//     {
//         title: "24/7 Support",
//         para:"Lorem ipsum dolor adipisicing elit. Dolorum tempore labor delectus in tenetur quam porro3",
//         icon: <IoAirplaneOutline className="icon_color"/>
//     },

//     {
//         title: "User Clint First",
//         para:"Lorem ipsum dolor adipisicing elit. Dolorum tempore labor delectus in tenetur quam porro4",
//         icon: <MdContactSupport className="icon_color"/>
//     },

//     {
//         title: "Quick Delivery",
//         para:"Lorem ipsum dolor adipisicing elit. Dolorum tempore labor delectus in tenetur quam porro5",
//         icon: <FaStopwatch className="icon_color"/>
//     },

//     {
//         title: "Hands and support",
//         para:"Lorem ipsum dolor adipisicing elit. Dolorum tempore labor delectus in tenetur quam-6",
//         icon: <FaBook className="icon_color"/>
//     },



// ]
  return (

    <section id="feature">
       <h2>Lorem ipsum dolor sit amet consectetur.</h2> 
    <Container>
        <Row>
           <Featurereusable/>
        </Row>
    </Container>
    </section>
  )
}

export default Feature