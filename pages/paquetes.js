import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import MainLayout from '../layout/MainLayout'
import { Container, Row, Col } from 'react-bootstrap'
import SinglePageTitle from '../components/SinglePageTitle'
import MakeAppointmentBtn from '../components/MakeAppointmentBtn'
import { PackagesData } from '../data/PackagesData'
import Loader from '../components/Loader'

const paquetes = () => {
  const [data, setData] = useState(null)
  useEffect(()=> {
    if (!data)
    {
      setData(PackagesData(location.search.split('=')[1]))
    }
  },[data])

  if (!data)
  {
    return <Loader />
  }

  return (
    <MainLayout headData={{title: 'Nuestros Paquetes', metaViewport: true}}>
      <SinglePageTitle data={{title: 'Nuestros Paquetes', bg: 'index'}} />
      <Container className="my-4">
        {
          data.sections.map((section, index) => (
            <div key={section.title[0]+index} className="p-4 border rounded my-4">
                <h4 className="bg-primary text-white p-2 rounded text-center">{section.title}</h4>
                <p className="py-4 text-center">{section.text}</p>
                  {
                    section.buttons.length > 1 ?
                    <Row>
                      <Col></Col>
                      <Col sm={12} md={4} className="mb-4">
                        <MakeAppointmentBtn text={section.buttons[0]} />
                      </Col>
                      <Col sm={12} md={4} className="mb-4">
                        <MakeAppointmentBtn text={section.buttons[1]} />
                      </Col>
                      <Col></Col>
                    </Row>
                    :
                    <Row>
                      <Col></Col>
                      <Col sm={12} md={3}>
                        <MakeAppointmentBtn text={section.buttons[0]} />
                      </Col>
                      <Col></Col>
                    </Row>
                  }
            </div>
          ))
        }
        <div className="p-4"></div>
      </Container>
    </MainLayout>
  )
}

export default paquetes
