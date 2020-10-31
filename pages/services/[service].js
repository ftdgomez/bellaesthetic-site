import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Head from 'next/head'

const Treatment = ({service, contents, data}) => {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>
      <h4>{service}</h4>
      <div>{contents}</div>
    </div>)
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync('treatments')
  console.log("files:", files)
  const paths = files.map(filename => ({
    params: {
      service: filename.replace(".md", "")
    }
  }));
  console.log("paths: ", paths)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { service }}) => {
  const mdMetadata = fs.readFileSync(path.join("treatments", service + ".md")).toString()

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
