import Head from 'next/head'
import Header from './components/Header'
import { Row, Container, Col, Button, Card, Image } from 'react-bootstrap'
import MainSlider from './components/MainSlider'
import Link from 'next/link'

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
      <div style={{backgroundImage: `url(bg.jpg)`, minHeight: '100vh', width: '100%', backgroundSize: 'cover'}}>
        <div className="container-fluid">
          <Row className="vh-100 d-flex align-items-center">
            <Col sm={12} md={8}>
              <div className="ml-md-4">
                <h2 className="pt-4 display-3 font-weight-bold">
                  Natural looking <br />
                  results. A <br />
                  Sensation Of Beauty
                </h2>
                <Button size="lg" className="mr-4 text-white">Conoce Nuestros Servicios</Button>
                <Button size="lg" variant="secondary" className="text-white">Agenda Una Cita Ya</Button>
              </div>
            </Col>
            <Col className="d-flex h-100">
              <Card className="mt-auto ml-auto">
                <Row>
                  <Col sm={12} md={4}>
                    <Card.Img src="/img/default.jpg" className="fluid w-md-auto"/>
                  </Col>
                  <Col sm={12} md={8}>
                    <Card.Body>
                        <Card.Title className="font-weight-bold mt-2">Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>  
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

    </div>
  )
}
