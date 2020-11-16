import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Link from 'next/link'

import { HomeData } from '../data/HomeData'
import PromoCard from '../components/PromoCard'
import 'animate.css'
import HeroSection from '../sections/HeroSection'
import ServicesSection from '../sections/ServicesSection'
import NuestroPaquetes from '../sections/NuestroPaquetes'
import MainLayout from '../layout/MainLayout'
import Loader from '../components/Loader'

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
            <PromoCard
              subtitle="Featured Product"
              title="$20 de descuento en tu primera visita"
              btnText="Agendar Cita"
              link="/#"
              picture="temp.jpg"
            />
          </Container>
          <NuestroPaquetes data={data} />
          <Container>
            <PromoCard
              subtitle="Featured Product"
              title="2X3   with 2 Hydrafacial you can get 1 free dermaplaning"
              btnText="Agendar Cita"
              link="/#"
              picture="temp.jpg"
              side="left"
              />
            </Container>
        </div>
      </div>
      </MainLayout>
    )
  }
}
