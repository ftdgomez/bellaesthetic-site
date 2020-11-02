import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import ContactData from './ContactData'
import GoogleMaps from './GoogleMaps'
const Footer = () => {
  return (
    <>
      <div className="border">
        <Row>
          <Col sm={12} md={6} className="px-4 d-flex flex-column justify-content-center">
            <h4 className="mx-4">Contact Us</h4>
            <ContactData /> 
          </Col>
          <Col sm={12} md={6}>
            <GoogleMaps />
          </Col>
        </Row>
      </div>
      <p className="text-center py-4 bg-primary m-auto text-white">Copyright {new Date().getFullYear()} ©  Bella Esthetics LLC. All rights reserved.</p>
    </>
  )
}

export default Footer
