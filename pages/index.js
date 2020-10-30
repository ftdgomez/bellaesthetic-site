import Head from 'next/head'
import {useState, useEffect} from 'react'
import Header from '../components/Header'
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap'
import { HeaderData } from '../data/HeaderData'
import Loader from '../components/Loader'
import Link from 'next/link'

import PromoCard from '../components/PromoCard'
import { HomeData } from '../data/HomeData'
import 'animate.css'
import HeroSection from '../sections/HeroSection'
import ServicesSection from '../sections/ServicesSection'
import NuestroPaquetes from '../sections/NuestroPaquetes'

export default function Home() {
  const [data, setData] = useState(null)
  const [headerData, setHeaderData] = useState(null)

  useEffect(() => {
    if (!data)
    {
      setData(HomeData(location.search.split('=')[1]))
    }
    if (!headerData)
    {
      setHeaderData(HeaderData(location.search.split('=')[1]))
    }
  },[data, headerData])

  if (!data || !headerData)
  {
    return <Loader />
  }
  else
  {
    return (
      <div className="animate__animated animate__fadeIn">
        <Head>
          <title>Bella Esthetics | Weight Reduction, Skin Care, Laser Treatment, Spa Service In Fairfax VA </title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="keywords" content="facial treatment, weight reduction, skin care, aesthetics, esthetic clinic, acne treatment, anti-stress massage, massage, anti-ageing, vein removal, hair removal, laser treatment, wellness, healthy life, spa, salon, place, clinic, fairfax, virginia, area, annandale, alexandria"></meta>
          <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
        </Head>
        <Header data={headerData} />

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
              title="$20 de descuento en tu primera visita"
              btnText="Agendar Cita"
              link="/#"
              picture="temp.jpg"
              side="left"
              />
            </Container>
        </div>
      </div>
    )
  }
}
