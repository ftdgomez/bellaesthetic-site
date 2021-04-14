import React from 'react'
import {Row, Col, Container, ListGroup} from 'react-bootstrap'
import ContactData from './ContactData'
import GoogleMaps from './GoogleMaps'
const Footer = () => {
  return (
    <>
      <div className="container">
        <Row>
          <Col sm={12} md={4} className="px-4 d-flex flex-column justify-content-center">
            <h4 className="mx-2 display-4">Contact Us</h4>
            <ContactData /> 
          </Col>
          <Col sm={12} md={4}>
            <ListGroup className="p-4">
              <ListGroup.Item>
                <i className="mr-4 im im-calendar"></i> Monday, Tuesday and Friday<br />
                <i className="mr-4 im im-clock"></i> 8:00am - 2:00pm<br />
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="mr-4 im im-calendar"></i>Wednesdey<br />
                <i className="mr-4 im im-clock"></i> 8:00am - 2:00pm<br />
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="mr-4 im im-calendar"></i>Saturday<br />
                <i className="mr-4 im im-clock"></i> 7:00am - 2:00pm<br />
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="mr-4 im im-calendar"></i>Sunday<br />
                <i className="mr-4 im im-clock"></i> Closed<br />
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={12} md={4}>
            <GoogleMaps />
          </Col>
        </Row>
      </div>
      <p className="text-center py-4 bg-primary mt-4 mb-0 text-white">Copyright {new Date().getFullYear()} ©  Bella Esthetics LLC. All rights reserved.</p>
    </>
  )
}

export default Footer
