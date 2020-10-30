import React from 'react'
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap'

const HeroSection = ({data}) => {
  return (
    <div>
        <div style={{
          backgroundImage: 'url(/bg.jpg)',
          minHeight: '100vh',
          width: '100%'
        }}></div>
        <video autoplay loop muted id="mainbg">
          <source src="/bg-bella.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <div className="main-hero">
          <div className="container-fluid">
            <Row className="vh-100">
              <Col sm={12} md={5} className=""></Col>
              <Col sm={12} md={7} className="d-flex flex-column" style={{minHeight: '100vh'}}>
                <div className="title-container">
                  <h2 className="pt-md-4  font-weight-bold">
      {data.heroSection.mainTitle.split(' ').map((el, index) => (<span key={`hero-title-item-${index}`}>{el}{' '}{index === 1 && <br />}</span>))}
                  </h2>
                  <a href="/" size="lg" className="btn btn-primary mr-md-4 text-white">
                    {data.heroSection.btn1.text}
                  </a>
                  <a href="/" size="lg" className="btn btn-secondary mt-4 mt-md-0 text-white" variant="secondary">
                    {data.heroSection.btn2.text}
                  </a>
                </div>
                <div style={{marginLeft: 'auto', marginTop: 'auto'}}>
                <Carousel>

                {
                  data.heroSection.serviceCards.map((el, index) => (
                    <Carousel.Item key={`carousel-item-${index}`}>
                      <Card.Body className="card-carousel-item bg-white rounded">
                      <Card.Title className="font-weight-bold mt-2">{el.title}</Card.Title>
                          <Card.Text>
                            {el.description}
                          </Card.Text>
                          <Button variant="primary">{el.btn}</Button>  
                      </Card.Body>
                    </Carousel.Item>
                  ))
                }

                </Carousel>
   
                </div>
            </Col>
            </Row>
          </div>
        </div>
    </div>
  )
}

export default HeroSection
