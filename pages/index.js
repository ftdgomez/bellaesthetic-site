import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { HomeData } from '../data/HomeData'
import 'animate.css'
import HeroSection from '../sections/HeroSection'
import ServicesSection from '../sections/ServicesSection'
import NuestroPaquetes from '../sections/NuestroPaquetes'
import MainLayout from '../layout/MainLayout'
import Loader from '../components/Loader'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [data, setData] = useState(null)


  useEffect(() => {
    if (!data)
    {
      setData(HomeData(location.search.split('=')[1]))
    }
  },[data])

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
              <Image src="/descuento.jpeg" alt="descuento primera visita" width="1250px" height="503px" />
            </Container>
            <NuestroPaquetes data={data} />
            <Container className="mt-4">
              <Image src="/2x3.jpeg" alt="promoción 2 x 3" width="1250px" height="503px" />
              </Container>
          </div>
        </div>
      </MainLayout>
    )
  }
}
