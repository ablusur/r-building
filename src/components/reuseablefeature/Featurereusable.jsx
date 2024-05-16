import React from 'react'
import { Col } from 'react-bootstrap';
import { TiTick } from "react-icons/ti";
import { IoAirplaneOutline } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { FaUsers , FaStopwatch } from "react-icons/fa";


const Featurereusable = () => {
  return (
    <>
                
            <Col lg={4}>
                <div className="feacher_item">
                    <div className="feature_icon">{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.para}</p>
                </div>
            </Col>
    </>
  )
}

export default Featurereusable