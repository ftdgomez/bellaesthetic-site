import {Row, Col, Container, Card} from 'react-bootstrap'
import PricingItem from '../components/PricingItem'
import Link from 'next/link'




const NuestroPaquetes = ({data}) => {
  return (
    <div className="np-bg" style={{backgroundImage: 'url(/bg-cool.jpg)'}}>
      <div className="np-dark-bg">
        <Container className="py-4">
            <h3 className="text-center">{data.nuestrosPaquetes.title}</h3>
            <Row>
              <div className="col-sm-12 col-md-4 mb-4">
                  <Link href="/paquetes">
                    <a>
                      <Card className="bg-primary border-0">
                        <Card.Img variant="top" src={`/primera.jpg`} style={{mixBlendMode: 'multiply'}} />
                        <Card.Header><h4 className="text-center"><strong>3 {data.nuestrosPaquetes.ses}</strong></h4></Card.Header>
                      </Card> 
                    </a>
                  </Link>
              </div>
              <div className="col-sm-12 col-md-4 mb-4">
                <Link href="/paquetes">
                  <a>
                  <Card className="bg-primary border-0">
                    <Card.Img variant="top" src="/segunda.jpg" style={{mixBlendMode: 'multiply', height: '273.7px'}} />
                    <Card.Header><h4 className="text-center"><strong>6 {data.nuestrosPaquetes.ses}</strong></h4></Card.Header>
                  </Card>
                  </a>
                </Link>
              </div>
              <div className="col-sm-12 col-md-4 mb-4">
                  <Link href="/paquetes">
                    <a>
                      <Card className="bg-primary border-0">
                        <Card.Img variant="top" src="/tercera.jpg" style={{mixBlendMode: 'multiply'}} />
                        <Card.Header><h4 className="text-center"><strong>12 {data.nuestrosPaquetes.ses}</strong></h4></Card.Header>
                      </Card>
                    </a>
                  </Link>
              </div>
            </Row>
            <p className="text-center mt-4">
              <strong>
                {data.nuestrosPaquetes.text}
              </strong>
            </p>
            <p className="text-center text-uppercase">
              <Link href="/paquetes">
                  <a className="btn btn-primary px-4 py-2"><strong>See our packages</strong></a>
              </Link>                
            </p>
        </Container>
      </div>
    </div>
  )
}

export default NuestroPaquetes
