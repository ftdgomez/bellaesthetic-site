import React from 'react'
import Link from 'next/link'
import MainLayout from '../layout/MainLayout'
import { Container, Row, Col } from 'react-bootstrap'
import SinglePageTitle from '../components/SinglePageTitle'
import MakeAppointmentBtn from '../components/MakeAppointmentBtn'


const paquetes = () => {
  return (
    <MainLayout headData={{title: 'Nuestros Paquetes', metaViewport: true}}>
      <SinglePageTitle data={{title: 'Nuestros Paquetes', bg: 'index'}} />
      <Container className="my-4">
          <div className="p-4 border rounded my-4">
            <h4 className="paquetes-title">Paquete Corporal</h4>
            <p> El número de sesiones y la duración de cada uno siempre serán determinados por nuestra especialista. En general se recomienda realizar entre 6 y 12 sesiones en tratamientos corporales, 12 sesiones 2 veces por semana 1 hora cada sesión   lo que seria 6 semanas de tratamiento corporal y  6 Sesiones 2 por semana 1 hora de tratamiento y son 3 semanas.</p>
            <p className="mt-2">Los resultados son visibles desde la primera sesión, pero el efecto es gradual y aumenta en el tiempo. Los máximos resultados se verán unas semanas después de la última sesión. En este momento los procesos activados en la piel están en pleno funcionamiento. Una vez finalizado el tratamiento se recomienda una sesión de mantenimiento cada cierto tiempo, dependiendo del tipo de piel. </p>
            <Row>
              <Col></Col>
              <Col sm={12} md={4} className="mb-4" >
                  <MakeAppointmentBtn text="Solicita 6 sesiones" />
              </Col>
              <Col sm={12} md={4} className="mb-4">
                <MakeAppointmentBtn text="Solicita 12 sesiones" />
              </Col>
              <Col></Col>
            </Row>
          </div>

          <div className="p-4 border rounded my-4">
            <h4 className="paquetes-title">Paquete facial</h4>
            <p>habitualmente se aplican   3 sesiones, una cada semana. A partir del año deberá realizarse un mantenimiento.</p>
            <Row>
              <Col></Col>
              <Col sm={12} md={3}>
                <MakeAppointmentBtn text="Solicita un paquete de 3 sesiones" />
              </Col>
              <Col></Col>
            </Row>
          </div>

        <div className="p-4 border rounded my-4">
          <h4 className="paquetes-title">Radiofrecuencia tripolar facial</h4>
          <p>Las sesiones recomendadas para obtener óptimos resultados con Radio Frecuencia Facial serán 6 como mínimo. Además, entre cada sesión, es necesario que transcurra un semana como minimo.</p>
          <Row>
            <Col></Col>
            <Col sm={12} md={3}>
              <MakeAppointmentBtn text="Solicita un paquete de 6 sesiones" />
            </Col>
            <Col></Col>
          </Row>
        </div>

        <div className="p-4 border rounded my-4">
          <div><h4 className="paquetes-title">Paquetes de IPL</h4></div>
            <p>Como promedio, se recomiendan de 6 a 12 sesiones. Los resultados se comienzan a ver a la semana de la primera sesión: piel más uniforme, luminosa, con disminución de poros, arañas vasculares y manchas.</p>
            <Row>
              <Col></Col>
              <Col sm={12} md={4} className="mb-4">
                <MakeAppointmentBtn text="Solicita 6 sesiones" />
              </Col>
              <Col sm={12} md={4} className="mb-4">
                <MakeAppointmentBtn text="Solicita 12 sesiones" />
              </Col>
              <Col></Col>
            </Row>
        </div>
        <div className="p-4"></div>
      </Container>
    </MainLayout>
  )
}

export default paquetes
