import {useState, useEffect} from 'react'
import { Container, Row, Col  } from 'react-bootstrap'
import { ServicesData } from '../../data/ServicesData'
import Link from 'next/link'
import matter from 'gray-matter'
import Loader from '../../components/Loader'
import { execSync } from 'child_process'
import fs from 'fs'
import MainLayout from '../../layout/MainLayout'
import SinglePageTitle from '../../components/SinglePageTitle'

const services = ({enddata}) => {

    const [data, setData] = useState(false)

    useEffect(()=> {
      if (!data){
        const search = location.search.split('=')[1];
        setData( search === 'es' ? enddata.es : enddata.en)
      }
      console.log(data)
    }, [data])
    if (!data)
    {
      return <Loader />
    }
    else
    {
      return (
        <MainLayout headData={{title: 'Home'}}>
          <SinglePageTitle data={{title: data.title, bg: 'index'}} />
          <Container>
            <div className="text-center mt-4">
              <h2 className="border-bottom pb-2">{data.subtitle}</h2>
              <div className="d-sm-block d-md-flex text-left">
                {data.description.map((el, index) => (<p className="border-left border-primary px-4" key={`p-desc-4${index}`}>{el}</p>))} 
              </div>
               <h2 className="border-bottom pb-2 mb-4">{data.bodyTtitle}</h2>
              <Row>
                {
                  data.bodyT.map((el, index) => (
                    <Col
                     key={`body-t-${index}`} sm={12} md={4}>
                       <Link 
                       href={`/services/${el.url}/${data.query ? data.query : ''}`}>
                         <a
                          style={{backgroundImage: `url(${el.picture})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                          }}
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
                          style={{backgroundImage: `url(${el.picture})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                          }}
                          className="body-t-item">
                            <h4 className="text-white">{el.title}</h4>
                         </a>
                       </Link>
                    </Col>
                  ))
                }
              </Row>
            </div>
          </Container>
        </MainLayout>
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
