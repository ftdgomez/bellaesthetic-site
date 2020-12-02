import {Row, Col, Container} from 'react-bootstrap'
import PricingItem from '../components/PricingItem'

const NuestroPaquetes = ({data}) => {
  return (
    <div className="np-bg" style={{backgroundImage: 'url(/bg-cool.jpg)'}}>
      <div className="np-dark-bg">
        <Container className="py-4">
            <h3 className="text-center">{data.nuestrosPaquetes.title}</h3>
            <Row>
              <Col>
                <PricingItem 
                  title="Paquetes Corporales"
                  items={[
                    '12 sesiones',
                    '2 veces por semana',
                    '1 hora cada sesión',
                    '6 semanas de tratamiento.'
                  ]}
                />
              </Col>
              <Col>
                <PricingItem 
                  title="Paquetes Corporales"
                  items={[
                    '6 sesiones',
                    '2 veces por semana',
                    '1 hora cada sesión',
                    '3 semanas de tratamiento.'
                  ]}
                />
              </Col>
              <Col>
                <PricingItem 
                  title="Paquete facial"
                  items={[
                    '3 sesiones',
                    '1 cada 3 semanas'
                  ]}
                />
              </Col>
              <Col>
                <PricingItem 
                  title="Radiofrecuencia tripolar facial"
                  items={[
                    '1 sesión semanal',
                    '6 semanas',
                  ]}
                />
              </Col>
              <Col>
                <PricingItem 
                  title="Paquetes de IPL"
                  items={[
                    'Paquete 6 sesiones',
                    '12 sesiones',
                  ]}
                />
              </Col>
            </Row>

            <p className="text-center mt-4">
              <strong>
                {data.nuestrosPaquetes.text}
              </strong>
            </p>
        </Container>
      </div>
    </div>
  )
}

export default NuestroPaquetes
