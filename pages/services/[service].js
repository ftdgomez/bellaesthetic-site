import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Container, Row, Col, Button } from 'react-bootstrap'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import MainLayout from '../../layout/MainLayout'
import SinglePageTitle from '../../components/SinglePageTitle'
import ContactData from '../../components/ContactData'
import VideoPlayer from '../../components/VideoPlayer'

const Treatment = ({service, contents, data}) => {
  return (
    <MainLayout headData={{title: data.title}}>
      <SinglePageTitle data={{title: data.title, bg: data.bg}} />
      <Container className="my-4">
        <Row>
          <Col sm={12} md={4} className="p-4 border rounded">
            <h4 className="mt-4">Contact Us</h4>
            <ContactData />
            { data.videourl ?
              <VideoPlayer url={data.videourl} />
              :
              <img src={`/${data.picture}`} className="w-100" />
            }
          </Col>
          <Col sm={12} md={8} className="md-container">
            <ReactMarkdown>{contents}</ReactMarkdown>
          </Col>
        </Row>
      </Container>
    </MainLayout>)
}

export const getStaticPaths = async () => {

  const esbodyfiles = fs.readdirSync(path.join(process.cwd(),`treatments/ES/body`))
  const esfacefiles = fs.readdirSync(path.join(process.cwd(),`treatments/ES/facial`))
  const esbodypaths = esbodyfiles.map(filename => (filename.replace(".md", "")));
  const esfacepaths = esfacefiles.map(filename => (filename.replace(".md", "")));

  const enbodyfiles = fs.readdirSync(path.join(process.cwd(),`treatments/EN/body`))
  const enfacefiles = fs.readdirSync(path.join(process.cwd(),`treatments/EN/facial`))
  const enbodypaths = enbodyfiles.map(filename => (filename.replace(".md", "")));
  const enfacepaths = enfacefiles.map(filename => (filename.replace(".md", "")));

  const allpaths = [...esbodypaths, ...esfacepaths, ...enbodypaths, ...enfacepaths]
  console.log(allpaths)
  const paths = allpaths.map(path => ({
    params: {
      service: path
    }
  }))
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { service } }) => {

  let filepath;

  filepath = execSync(`find ./treatments -name '${service}.md'`).toString().split('\n')[0].toString()

  const mdMetadata = fs.readFileSync(filepath).toString()

  const parsedMd = matter(mdMetadata)

  return {
    props: {
      service,
      contents: parsedMd.content,
      data: parsedMd.data
    }
  }

}

export default Treatment
