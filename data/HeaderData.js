export const HeaderData = (lang) => {
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
    query: '',
    links: [
      {
        name: 'Home',
        href: '/'
      },
      {
        name: 'Services',
        href: '/services'
      },
      {
        name: 'About Us',
        href: '/about-us'
      },
      {
        name: 'Book Now',
        href: '/book-now'
      },
    ]
  }
}

const HOME_ES = () =>{
  return {
    query: '?lang=es',
    links: [
      {
        name: 'Inicio',
        href: '/'
      },
      {
        name: 'Servicios',
        href: '/services'
      },
      {
        name: 'Acerca De Nosotros',
        href: '/about-us'
      },
      {
        name: 'Book Now',
        href: '/book-now'
      },
    ]
  }
}
