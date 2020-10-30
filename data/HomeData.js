export const HomeData = (lang) => {
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
    heroSection: {
      mainTitle: "The sensation of beauty",
      btn1: {
        link: '/',
        text: "Get a Free Consultation"
      },
      btn2: {
        link: '/',
        text: "Make an Appointment"
      },
      serviceCards: [
        {
          title: "Post Surgery",
          description: "After cosmetic surgeries the lymphatic channels are disrupted and take about three months to make new connections. adding a series of lymphatic massages to a patient’s post-op care routines can benefit their recovery.",
          btn: 'Read More'
        }
      ]
    },
    mostPopular: {
      items: [
        {
          title: 'Hydrafacials',
          picture: '/img/hidrofacials.jpg'
        },
        {
          title: 'Lymphatic Drainage',
          picture: '/img/linfa.jpg'
        },
        {
          title: 'IPL',
          picture: '/img/ipl.jpg'
        }
      ]
    },
    nuestrosPaquetes: {
      title: 'Our Combos',
      picture1: '/default_combos.jpg',
      picture2: '/default_combos.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit commodo tortor et scelerisque. Proin interdum porttitor condimentum. Aenean molestie nulla sed mattis porttitor.',
      btn: {
        link: '/',
        text: 'Book Now'
      }
    }
  }
}

const HOME_ES = () =>{
  return {
    heroSection: {
      mainTitle: "La Sensación de La Belleza",
      btn1: {
        link: '/',
        text: "Solicita Una consulta gratis"
      },
      btn2: {
        link: '/',
        text: "Agenda una cita"
      },
      serviceCards: [
        {
          title: "Post Operatorio",
          description: "Después de las cirugías cosméticas, los canales linfáticos se interrumpen y tardan unos tres meses en establecer nuevas conexiones. Masajes linfáticos en rutinas de atención posoperatoria del paciente benefician su recuperación.",
          btn: 'Leer Más'
        }
      ],
    },
    mostPopular: {
      items: [
        {
          title: 'Hydrafacials',
          picture: '/img/hidrofacials.jpg'
        },
        {
          title: 'Drenaje Linfático',
          picture: '/img/linfa.jpg'
        },
        {
          title: 'IPL',
          picture: '/img/ipl.jpg'
        }
      ]
    },
    nuestrosPaquetes: {
      title: 'Nuestros Paquetes',
      picture1: '/default_combos.jpg',
      picture2: '/default_combos.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit commodo tortor et scelerisque. Proin interdum porttitor condimentum. Aenean molestie nulla sed mattis porttitor.',
      btn: {
        link: '/',
        text: 'Agendar cita'
      }
    }
  }
}
