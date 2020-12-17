import React from 'react'
import SinglePageTitle from '../components/SinglePageTitle'
import MainLayout from '../layout/MainLayout'
import { Container, Row, Col } from 'react-bootstrap'

const AboutUs = () => {
  return (
    <MainLayout headData={{title: 'About Us'}}>
      <SinglePageTitle data={{title: 'About Us'}} />
      <Container>
        <h4 className="border-bottom pb-2 my-4 text-center">Our Goals</h4>
        <div className="d-sm-block d-md-flex text-left justify-content-center">
          <p className="border-left border-primary px-4">To provide the best customer service.</p>
          <p className="border-left border-primary px-4">To make each client feel like the only one.</p>
          <p className="border-left border-primary px-4">To  promote a Healthy living.</p>
        </div>
        <Row className="my-4">
          <Col className="border my-4 d-flex aling-items-center justify-content-center flex-column p-md-4">
            <h4>About Us</h4>
            <p>
            Our aim is to provide  anti aging treatments and procedures that complement and enhance the existing  beauty of our patients by helping to restore the youthful definition of the  face and body.
            <br /><br />
            Our business was established in 2009, and we pride  ourselves on providing customers with high-quality product and personal service. Our office is coveniently located in the heart of Fairfax City.
            </p>
          </Col>
          <Col className="d-flex algin-items-center justify-content-center">
            <img style={{maxWidth: '420px', height: 'auto'}} src="/about-us-1.jpg" />
          </Col>
        </Row>
        <Row className="my-4">
          <Col className="d-flex algin-items-center justify-content-center">
            <img style={{maxWidth: '420px', height: 'auto'}} src="/about-us-2.jpg" />
          </Col>
          <Col className="border my-4 d-flex aling-items-center justify-content-center flex-column p-md-4">
            <p>
            Providing good service means taking time to listen. We will work with you every step of the way to make sure you receive the services you need. Our business is client-oriented, and we maintain strict confidentiality.
            <br /><br />
            Our firm was established to provide efficient, expert solutions to women. Our primary services include, body and facial treatments. We also offer a host of specialty services to cater to the unique needs of our clients. Our partners and staff serve a wide range of individuals.           
            </p>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  )
}

export default AboutUs
