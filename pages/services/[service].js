import React from 'react'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { Container } from 'react-bootstrap'
import { ServicesData } from '../../data/ServicesData'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const Treatment = ({service, contents, data}) => {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>
      <h4>{service}</h4>
      <Container>
        <ReactMarkdown>{contents}</ReactMarkdown>
      </Container>
    </div>)
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
