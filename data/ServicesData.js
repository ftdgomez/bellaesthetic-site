export const ServicesData = (lang) => {
  if (lang === 'es')
  {
    return HOME_ES()
  }
  else if (lang === 'en')
  {
    return HOME_EN();
  }
  else
  {
    return HOME_EN();
  }
}

const HOME_EN = () =>{
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
      items: [
        {
          title: 'ESTHETIC CAVITATION',
          picture: 'default.jpg',
          url: '/esthetic-cavitation'
        },
        {
          title: 'VIBRATION PLATFORM',
          picture: 'default.jpg',
          url: '/vibration-platform'
        },
        {
          title: 'RADIO FREQUENCY',
          picture: 'default.jpg',
          url: '/body-radiofrequency'
        },
        {
          title: 'REDUCTIVE MASSAGE',
          picture: 'default.jpg',
          url: '/reductive-massage'
        },
        {
          title: 'Lymphatic Drainage Massage',
          picture: 'default.jpg',
          url: '/lymphatic-drainage-massage'
        },
        {
          title: 'Lipo Laser',
          picture: 'default.jpg',
          url: '/lipo-laser'
        },
      ]
    },
    faceT: {
      title: 'Facial treatments',
      items: [
        {
          title: 'ANTI-AGING FACIAL',
          picture: 'default.jpg',
          url: '/anti-anging-facial'
        },
        {
          title: 'ANTI-ACNE FACIAL',
          picture: 'default.jpg',
          url: '/anti-acne-facial'
        },
        {
          title: 'MEN’S SKIN CARE',
          picture: 'default.jpg',
          url: '/men-skin-care'
        },
        {
          title: 'HYDRAFACIAL',
          picture: 'default.jpg',
          url: '/hydrafacial'
        },
        {
          title: 'PEELING',
          picture: 'default.jpg',
          url: '/peeling'
        },
        {
          title: 'DERMAPEN',
          picture: 'default.jpg',
          url: '/dermapen'
        },
        {
          title: 'Radiofrequency',
          picture: 'default.jpg',
          url: '/facial-radio-frequency'
        },
      ]
    }
  }
}

const HOME_ES = () =>{
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
      items: [
        {
          title: 'Cavitación Estética',
          picture: 'default.jpg',
          url: '/esthetic-cavitation'
        },
        {
          title: 'Plataforma Vibratoria',
          picture: 'default.jpg',
          url: '/vibration-platform'
        },
        {
          title: 'RADIO Frecuencia',
          picture: 'default.jpg',
          url: '/radio-frequency'
        },
        {
          title: 'Masaje reductivo',
          picture: 'default.jpg',
          url: '/reductive-massage'
        },
        {
          title: 'Masaje de Drenaje Linfático',
          picture: 'default.jpg',
          url: '/lymphatic-drainage-massage'
        },
        {
          title: 'Lipo Laser',
          picture: 'default.jpg',
          url: '/lipo-laser'
        },
      ]
    },
    faceT: {
      title: 'Tratamientos Faciales',
      items: [
        {
          title: 'ANTI-AGING FACIAL',
          picture: 'default.jpg',
          url: '/anti-anging-facial'
        },
        {
          title: 'ANTI-ACNE FACIAL',
          picture: 'default.jpg',
          url: '/anti-acne-facial'
        },
        {
          title: 'MEN’S SKIN CARE',
          picture: 'default.jpg',
          url: '/men-skin-care'
        },
        {
          title: 'HYDRAFACIAL',
          picture: 'default.jpg',
          url: '/hydrafacial'
        },
        {
          title: 'PEELING',
          picture: 'default.jpg',
          url: '/peeling'
        },
        {
          title: 'DERMAPEN',
          picture: 'default.jpg',
          url: '/dermapen'
        },
        {
          title: 'Radiofrequency',
          picture: 'default.jpg',
          url: '/facial-radio-frequency'
        },
      ]
    }
  }
}
