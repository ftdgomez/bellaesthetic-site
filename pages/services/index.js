import {useState, useEffect} from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import { Container, Row, Col  } from 'react-bootstrap'
import { HeaderData } from '../../data/HeaderData'
import { ServicesData } from '../../data/ServicesData'
import Link from 'next/link'

const services = ({headerData, data}) => {

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
            <h2>{data.bodyT.title}</h2>
            <Row>
              {
                data.bodyT.items.map((el, index) => (
                  <Col
                   key={`body-t-${index}`} sm={12} md={4}>
                     <Link 
                     href={`/services/${el.url}/${data.query ? data.query : ''}`}>
                       <a
                        style={{backgroundImage: `url(${el.picture})`}}
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
            <h2>{data.faceT.title}</h2>
            <Row>
              {
                data.faceT.items.map((el, index) => (
                  <Col
                   key={`body-t-${index}`} sm={12} md={4}>
                     <Link
                       href={`/services/${el.url}/${data.query ? data.query : ''}`}>
                      <a 
                      style={{backgroundImage: `url(${el.picture})`}}
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


export async function getServerSideProps({ query }) {
  const headerData = HeaderData(query.lang)
  const data = await ServicesData(query.lang)
  return {
    props: {
      headerData,
      data
    },
  }
}
/* 
export const getStaticProps = async ({ params: service }) => {
  // const headerData = HeaderData(location.search.split('=')[1])
  console.log(service)
  return {
    props: {
      // headerData
    }
  }
}
 */
export default services
