import fs from 'fs'
import path from 'path'

const getPaths = (lang) => {
  const bodyfiles = fs.readdirSync(path.resolve('./public', `treatments/${lang}/body`))
  const facefiles = fs.readdirSync(path.resolve('./public', `treatments/${lang}/facial`))
  const bodypaths = bodyfiles.map(filename => (filename.replace(".md", "")));
  const facepaths = facefiles.map(filename => (filename.replace(".md", "")));
  return {
    bodypaths,
    facepaths
  };
}

export const ServicesData = (lang) => {
  if (lang === 'es')
  {
    return SERVICE_ES()
  }
  else if (lang === 'en')
  {
    return SERVICE_EN();
  }
  else
  {
    return SERVICE_EN();
  }
}

const SERVICE_EN = () =>{
  const datapaths = getPaths('EN')
  const facepaths = datapaths.facepaths.map(item => ({
    title: item,
    picture: `/img/${item}.jpg`,
    url: `${item}`
  }))
  const bodypaths = datapaths.bodypaths.map(item => ({
    title: item,
    picture: `/img/${item}.jpg`,
    url: `${item}`
  }))
  return {
    query: null,
    title: 'Our Services',
    subtitle: 'At Bella Esthetics',
    description: [
      'We know what we do well and we focus on that!',
      'Wellness has been all of our lives passions and our lives work.',
      'We specialize in Weight Loss, Wellness, Acne Treatments, Anti-Aging Treatments, Laser Hair Removal, Varicose Veins Removal, Relaxation Massage and more.'
    ],
    bodyT: {
      title: 'Body treatments',
      items: bodypaths
    },
    faceT: {
      title: 'Facial treatments',
      items: facepaths
    },
    paths: datapaths
  }
}

const SERVICE_ES = () =>{
  const datapaths = getPaths('ES')
  const facepaths = datapaths.facepaths.map(item => ({
    title: item,
    picture: `/img/${item}.jpg`,
    url: `${item}`
  }))
  const bodypaths = datapaths.bodypaths.map(item => ({
    title: item,
    picture: `/img/${item}.jpg`,
    url: `${item}`
  }))
  return {
    query: '?lang=es',
    title: 'Nuestros Servicios',
    subtitle: 'En Bella Esthetics',
    description: [
      '¡Sabemos lo que hacemos bien y nos centramos en ello!',
      'Wellness has been all of our lives passions and our lives work.',
      'We specialize in Weight Loss, Wellness, Acne Treatments, Anti-Aging Treatments, Laser Hair Removal, Varicose Veins Removal, Relaxation Massage and more.'
    ],
    bodyT: {
      title: 'Tratamientos Corporales',
      items: bodypaths
    },
    faceT: {
      title: 'Tratamientos Faciales',
      items: facepaths
    },
    paths: datapaths
  }
}
