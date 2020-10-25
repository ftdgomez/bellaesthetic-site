import Head from 'next/head'
import Header from './components/Header'
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap'
import Link from 'next/link'
import PromoCard from './components/PromoCard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bella Esthetics | Weight Reduction, Skin Care, Laser Treatment, Spa Service In Fairfax VA </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="facial treatment, weight reduction, skin care, aesthetics, esthetic clinic, acne treatment, anti-stress massage, massage, anti-ageing, vein removal, hair removal, laser treatment, wellness, healthy life, spa, salon, place, clinic, fairfax, virginia, area, annandale, alexandria"></meta>
      </Head>
      <Header />
      {/* <MainSlider /> */}
      {/* Main Section */}
      <div style={{
        backgroundImage: 'url(/bg.jpg)',
        minHeight: '100vh',
        width: '100%'
      }}
        className="video-container"
      >
        <video autoPlay loop muted id="mainbg">
          <source src="/bg-bella.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
      <div style={{ minHeight: '100vh', width: '100%'}}>
        <div className="container-fluid">
          <Row className="vh-100">
            <Col sm={12} md={5} className=""></Col>
            <Col sm={12} md={7} className="d-flex flex-column" style={{minHeight: '100vh'}}>
              <div className="title-container">
                <h2 className="pt-md-4  font-weight-bold">
                  Natural looking <br />
                  results. A <br />
                  Sensation Of Beauty
                </h2>
                <Button size="lg" className="mr-4 text-white">Conoce Nuestros Servicios</Button>
                <Button size="lg" variant="secondary" className="text-white">Agenda Una Cita Ya</Button>
              </div>
              <div style={{marginLeft: 'auto', marginTop: 'auto'}}>
              <Carousel>

                <Carousel.Item>
                  <Card.Body className="card-carousel-item bg-white rounded">
                      <Card.Title className="font-weight-bold mt-2">Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>  
                  </Card.Body>
                </Carousel.Item>

                 <Carousel.Item>
                  <Card.Body className="card-carousel-item bg-white rounded">
                      <Card.Title className="font-weight-bold mt-2">Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>  
                  </Card.Body>
                </Carousel.Item>

              </Carousel>
 
              </div>
          </Col>
          </Row>
        </div>
      </div>
      <Container className="mp-container" style={{backgroundImage: 'url(/img/bg-cool-1.png)'}}>
        <h4 className="text-center my-4">Most Popular</h4>
        <Row>
          <Col sm={12} md={4}>
            <Link href="/">
              <div className="mp-img"
              style={{
              backgroundImage: 'url(/img/hidrofacials.jpg)',
              }}>
                <div className="mp-item">
                   Hidrofacials
                </div>
              </div>
           </Link>
          </Col>
          <Col sm={12} md={4}>
            <Link href="/">
              <div className="mp-img"
              style={{
              backgroundImage: 'url(/img/linfa.jpg)',
              }}>
                <div className="mp-item">
                   Hidrofacials
                </div>
              </div>
           </Link>
          </Col>
           <Col sm={12} md={4}>
            <Link href="/">
              <div className="mp-img"
              style={{
              backgroundImage: 'url(/img/ipl.jpg)',
              }}>
                <div className="mp-item">
                   Hidrofacials
                </div>
              </div>
           </Link>
          </Col>
 
        </Row>
        <PromoCard
          subtitle="Featured Product"
          title="$20 de descuento en tu primera visita"
          btnText="Agendar Cita"
          link="/#"
          picture="temp.jpg"
        />
      </Container>
    </div>
  )
}
