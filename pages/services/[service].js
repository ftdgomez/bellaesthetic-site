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
  const sdata = await ServicesData()
  const sdatat = [...sdata.paths.bodypaths, ...sdata.paths.facepaths]
  const paths = sdatat.map(path => ({
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

  filepath = execSync(`find ./treatments -name '${service}.md'`)
  .toString().split('\n')[0].toString()

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
