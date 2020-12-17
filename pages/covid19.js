import React from 'react'
import SinglePageTitle from '../components/SinglePageTitle'
import MainLayout from '../layout/MainLayout'
import { Container, Row, Col } from 'react-bootstrap'

const AboutUs = () => {
  return (
    <MainLayout headData={{title: 'Covid 19'}}>
      <SinglePageTitle data={{title: 'Coronavirus (COVID-19)'}} />
      <Container>
        <h4 className="border-bottom pb-2 my-4 text-center">In-Office Safety Precautions</h4>
        <p>
          Throughout the pandemic, it’s important that we continue to provide you with care both related, and unrelated, to Coronavirus. We have important information about the Coronavirus for you and your family and continue to update our protocols following guidance from the Centers for Disease Control and Prevention (CDC) and local health authorities to ensure your safe return for in-office appointments. This includes:
        </p>
        <Row>
          <Col sm={12} md={6}>
            <img className="text-center d-block mx-auto mb-2" style={{ width: '200px', height: '200px' }} src="/one.png" alt="" />
            <p>
              Screening all patients, visitors and staff for any signs of a respiratory infection or potential exposure.
            </p>
          </Col>
          <Col sm={12} md={6}>
            <img className="text-center d-block mx-auto mb-2" style={{ width: '200px', height: '200px' }} src="/two.png" alt="" />
            <p>
              Arranging seating areas to allow for social distancing and following proper office and medical cleaning routines.
            </p>
          </Col>
          <Col sm={12} md={6}>
            <img className="text-center d-block mx-auto mb-2" style={{ width: '200px', height: '200px' }} src="/tres.png" alt="" />
            <p>
            Limiting visitors coming into our office.
            </p>
          </Col>
          <Col sm={12} md={6}>
            <img className="text-center d-block mx-auto mb-2" style={{ width: '200px', height: '200px' }} src="/cuatro.png" alt="" />
            <p>
            Requiring masks or face-coverings for all patients, visitors and staff.
            </p>
          </Col>
        </Row>
        <p>
          There is currently no vaccine to prevent the Coronavirus (COVID-19). The best way to prevent illness is to avoid being exposed to this virus. We encourage you to continue washing your hands with soap and water often, avoiding close contact with others, and cleaning and disinfecting frequently touched objects and surfaces.
        </p>

      </Container>
    </MainLayout>
  )
}

export default AboutUs
