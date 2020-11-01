import {useState, useEffect} from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import { Container, Row, Col  } from 'react-bootstrap'
import { HeaderData } from '../../data/HeaderData'
import { ServicesData } from '../../data/ServicesData'
import Link from 'next/link'
import matter from 'gray-matter'
import Loader from '../../components/Loader'
import { execSync } from 'child_process'
import fs from 'fs'

const services = ({enddata}) => {

    const [data, setData] = useState(false)
    const [headerData, setHeaderData] = useState(false)

    useEffect(()=> {
      if (!data){
        const search = location.search.split('=')[1];
        setData( search === 'es' ? enddata.es : enddata.en)
      }
      if (!headerData)
      {
        setHeaderData(HeaderData('en'))
      }
      console.log(data)
    }, [data, headerData])
    if (!data || !headerData)
    {
      return <Loader />
    }
    else
    {
      return (
        <>
          <Head>
            <title>Services - Bella Esthetics | Weight Reduction, Skin Care, Laser Treatment, Spa Service In Fairfax VA </title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="keywords" content="facial treatment, weight reduction, skin care, aesthetics, esthetic clinic, acne treatment, anti-stress massage, massage, anti-ageing, vein removal, hair removal, laser treatment, wellness, healthy life, spa, salon, place, clinic, fairfax, virginia, area, annandale, alexandria"></meta>
          </Head>
          <Header data={headerData} />
          <div className="s-title-container" style={{backgroundImage: 'url(/services-bg.png)'}}>
            <h1>{data.title}</h1> 
          </div>
          <Container>
            <div className="text-center">
              <h2>{data.subtitle}</h2>
              {data.description.map((el, index) => (<p key={`p-desc-4${index}`}>{el}</p>))} 
               <h2>{data.bodyTtitle}</h2>
              <Row>
                {
                  data.bodyT.map((el, index) => (
                    <Col
                     key={`body-t-${index}`} sm={12} md={4}>
                       <Link 
                       href={`/services/${el.url}/${data.query ? data.query : ''}`}>
                         <a
                          style={{backgroundImage: `url()`}}
                          className="body-t-item">
                          <h4>{el.title}</h4>
                         </a>
                       </Link>
                    </Col>
                  ))
                }
              </Row> 
             </div> 
             <div className="text-center mt-4">
              <h2>{data.faceTtitle}</h2>
              <Row>
                {
                  data.faceT.map((el, index) => (
                    <Col
                     key={`body-t-${index}`} sm={12} md={4}>
                       <Link
                         href={`/services/${el.url}/${data.query ? data.query : ''}`}>
                        <a 
                        style={{backgroundImage: `url()`}}
                        className="body-t-item">
                            <h4>{el.title}</h4>
                        </a>
                       </Link>
                    </Col>
                  ))
                }
              </Row>
            </div>
          </Container>
        </>
      )
    }
  }

export async function getStaticProps({})
{ 
  const esBodyPaths = execSync(`find ./treatments/ES/body -name '*.md'`).toString().split('\n').slice(0, -1)
  const esFacialPaths = execSync(`find ./treatments/ES/facial -name '*.md'`).toString().split('\n').slice(0, -1)
  const enBodyPaths = execSync(`find ./treatments/EN/body -name '*.md'`).toString().split('\n').slice(0, -1)
  const enFacialPaths = execSync(`find ./treatments/EN/facial -name '*.md'`).toString().split('\n').slice(0, -1)
  const esBodyFilesData = []
  esBodyPaths.forEach(el => {
    esBodyFilesData.push(matter(fs.readFileSync(el).toString()).data)
  })

  const esFacialFilesData = []
  esFacialPaths.forEach(el => {
    esFacialFilesData.push(matter(fs.readFileSync(el).toString()).data)
  })

  const enBodyFilesData = []
  enBodyPaths.forEach(el => {
    enBodyFilesData.push(matter(fs.readFileSync(el).toString()).data)
  })

  const enFacialFilesData = []
  enFacialPaths.forEach(el => {
    enFacialFilesData.push(matter(fs.readFileSync(el).toString()).data)
  })
  
  const enData = ServicesData('en')
  const esData = ServicesData('es')

  let enddata = {
    en: {
      ...enData,
      faceT: enFacialFilesData,
      bodyT: enBodyFilesData
    },
    es: {
      ...esData,
      faceT: esFacialFilesData,
      bodyT: esBodyFilesData
    }
  }

  return {
    props: {
        enddata
    }
  }

}

export default services
