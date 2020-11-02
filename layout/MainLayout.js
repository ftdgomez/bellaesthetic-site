import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { HeaderData } from '../data/HeaderData'
import Loader from '../components/Loader'
import GoogleMaps from '../components/GoogleMaps'
import Footer from '../components/Footer'

const MainLayout = ({children, headData}) => {
  const [headerData, setHeaderData] = useState(false)

  useEffect(()=>{
    if (!headerData)
    {
      const search = location.search.split('=')[1];
      setHeaderData(HeaderData(search ? 'es' : ''))
    }
  }, [headerData])

  if (!headerData)
  {
    return <Loader />
  }
  else
  {
    return (
      <>
        <Head>
          <title>{headData.title}- Bella Esthetics | Weight Reduction, Skin Care, Laser Treatment, Spa Service In Fairfax VA</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="keywords" content="facial treatment, weight reduction, skin care, aesthetics, esthetic clinic, acne treatment, anti-stress massage, massage, anti-ageing, vein removal, hair removal, laser treatment, wellness, healthy life, spa, salon, place, clinic, fairfax, virginia, area, annandale, alexandria"></meta>
          {headData.metaViewport &&
          <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
          }
          <link rel="stylesheet" href="https://cdn.iconmonstr.com/1.3.0/css/iconmonstr-iconic-font.min.css"></link>
        </Head>
        <Header data={headerData} />
        {children}
        <Footer />
      </>
    )
  }
}

export default MainLayout