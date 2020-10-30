import {Row, Col, Container} from 'react-bootstrap'

const NuestroPaquetes = ({data}) => {
  return (
    <div className="np-bg" style={{backgroundImage: 'url(/bg-cool.jpg)'}}>
      <div className="np-dark-bg">
        <Container className="py-4">
            <h3 className="text-center">{data.nuestrosPaquetes.title}</h3>
            <Row>
              <Col sm={12} md={6} >
                <img src={data.nuestrosPaquetes.picture1} alt=""/>
              </Col>
              <Col sm={12} md={6} >
                <img src={data.nuestrosPaquetes.picture2} alt=""/>
              </Col>
            </Row>
            <p className="text-center mt-4">
              {data.nuestrosPaquetes.text} <br />
              <a className="np-btn" href={data.nuestrosPaquetes.btn.link}>
                {data.nuestrosPaquetes.btn.text}
              </a>
            </p>
        </Container>
      </div>
    </div>
  )
}

export default NuestroPaquetes
