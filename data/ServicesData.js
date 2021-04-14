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
  return {
    query: null,
    title: 'Our Services',
    subtitle: 'At Bella Esthetics',
    description: [
      'We know what we do well and we focus on that!',
      'Wellness has been all of our lives passions and our lives work.',
      'We specialize in Weight Loss, Wellness, Acne Treatments, Anti-Aging Treatments, Laser Hair Removal, Varicose Veins Removal, Relaxation Massage and more.'
    ],
    bodyTtitle: 'Body Treatments',
    faceTtitle: 'Facial Treatments'
  }
}

const SERVICE_ES = () =>{
  return {
    query: '?lang=es',
    title: 'Nuestros Servicios',
    subtitle: 'En Bella Esthetics',
    description: [
      '¡Sabemos lo que hacemos bien y nos centramos en ello!',
      'El bienestar ha sido la pasión de toda nuestra vida y el trabajo de toda nuestra vida.',
      'Nos especializamos en pérdida de peso, bienestar, tratamientos para el acné, tratamientos antienvejecimiento, depilación láser, eliminación de várices, masajes de relajación y más.'
    ],
    bodyTtitle: 'Tratamientos Corporales',
    faceTtitle: 'Tratamientos Faciales'
  }
}
