import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function handler(req, res) {

  const {
    query: { lang },
  } = req

  if (lang === 'es')
  {
    const fpaths = [] 

    const enbodyfiles = fs.readdirSync(path.join(process.cwd(),`treatments/ES/body`))
    enbodyfiles.forEach(p => {
      const mdMetadata = fs.readFileSync(path.join(process.cwd(),`treatments/ES/body/${p}`)).toString()
      const parsedMd = matter(mdMetadata)
      fpaths.push({
        title: parsedMd.data.title,
        content: parsedMd.content,
        pic: parsedMd.data.picture,
        url: parsedMd.data.url
      })
    })
    const enfacefiles = fs.readdirSync(path.join(process.cwd(),`treatments/ES/facial`))
    enfacefiles.forEach(p => {
      const mdMetadata = fs.readFileSync(path.join(process.cwd(),`treatments/ES/facial/${p}`)).toString()
      const parsedMd = matter(mdMetadata)
      fpaths.push({
        title: parsedMd.data.title,
        content: parsedMd.content,
        pic: parsedMd.data.picture,
        url: parsedMd.url
      })
    })
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ data: fpaths }))
  }
  else if (lang === 'en')
  {
    const fpaths = [] 

    const enbodyfiles = fs.readdirSync(path.join(process.cwd(),`treatments/EN/body`))
    enbodyfiles.forEach(p => {
      const mdMetadata = fs.readFileSync(path.join(process.cwd(),`treatments/EN/body/${p}`)).toString()
      const parsedMd = matter(mdMetadata)
      fpaths.push({
        title: parsedMd.data.title,
        content: parsedMd.content,
        pic: parsedMd.data.picture,
        url: parsedMd.data.url
      })
    })
    const enfacefiles = fs.readdirSync(path.join(process.cwd(),`treatments/EN/facial`))
    enfacefiles.forEach(p => {
      const mdMetadata = fs.readFileSync(path.join(process.cwd(),`treatments/EN/facial/${p}`)).toString()
      const parsedMd = matter(mdMetadata)
      fpaths.push({
        title: parsedMd.data.title,
        content: parsedMd.content,
        pic: parsedMd.data.picture,
        url: parsedMd.data.url
      })
    })
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ data: fpaths }))
  }
  else
  {
    res.statusCode = 400
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ data: 'Sorry, bad request.' }))
  }
}
