import { useState, useEffect } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import { HomeData } from '../data/HomeData'
import 'animate.css'
import HeroSection from '../sections/HeroSection'
import ServicesSection from '../sections/ServicesSection'
import NuestroPaquetes from '../sections/NuestroPaquetes'
import MainLayout from '../layout/MainLayout'
import Loader from '../components/Loader'
import Image from 'next/image'
import Link from 'next/link'
import MakeAppBrnContainer from '../components/MakeAppBtnContainer'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'

export default function Home() {
  const [data, setData] = useState(null)
  const [services, setServices ] = useState(false)
  const [lang, setLang] = useState('en')
  useEffect(() => {
    if (!data)
    {
      setData(HomeData(location.search.split('=')[1]))
      setLang(location.search.split('=')[1] || 'en')
      axios.get(`/api/services/${location.search.split('=')[1] || 'en'}`)
      .then(function (response) {
        // handle success
 /*        console.log(response.data); */
        setServices(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
  },[data, services])

  if (!data)
  {
    return <Loader />
  }
  else
  {
    return (
      <MainLayout headData={{title: 'Home', metaViewport: true}}>
        <div className="animate__animated animate__fadeIn">
          <HeroSection data={data} />
          <div className="main-content">
            <Container className="mp-container" style={{backgroundImage: 'url(/img/bg-cool-1.png)'}}>
              <ServicesSection data={data} />
              <Carousel className="mb-4 pb-4">
              {
                services 
                ?
                services.map(service => (
                  <Carousel.Item key={`${service.url}__`}>
                    <div style={{display: 'grid', gridTemplateColumns: window.innerWidth < 1024 ? '1fr' : '300px 2fr', alignItems: 'center'}}>
                      <div style={{background: `url(${'/' + service.pic})`, backgroundSize: 'cover', height: '300px', width: '100%'}}></div>
                      <div className="bg-white p-4 h-100 d-flex align-items-center justify-content-center">
                        <div className={`${window.innerWidth < 1024 && 'text-center'}`}>
                          <h4 className={`text-uppercase`}>{service.title}</h4>
                          <p>{service.content.slice(0, 160).replace(/#/g, '')}...</p>
                          <a className="btn btn-primary text-white" href={`/services/${service.url}`}>{ lang === 'es' ? 'Ver Más' : 'See More'}</a>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))
                :
                <div className="d-flex justify-content-center bg-white p-4 align-items-center mb-4" style={{minHeight: '300px'}}>
                  <Spinner animation="border" role="status" variant="primary">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              }
              </Carousel>
              <MakeAppBrnContainer>
                <Image src="/descuento.jpeg" alt="descuento primera visita" width="1250px" height="503px" />
              </MakeAppBrnContainer>
            </Container>
            <NuestroPaquetes data={data} />
            <Container className="mt-4">
              <MakeAppBrnContainer>
                  <Image src="/2x3.jpeg" alt="promoción 2 x 3" width="1250px" height="503px" />
              </MakeAppBrnContainer>
              </Container>
          </div>
        </div>
      </MainLayout>
    )
  }
}


