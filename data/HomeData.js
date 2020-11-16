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
          picture: '/Hydrafacial-DF.jpg',
          url: '/services/hydrafacial'
        },
        {
          title: 'Lymphatic Drainage',
          picture: '/drenaje-linfatico-celulitis.jpg',
          url: '/services/lymphatic-drainage-massage'
        },
        {
          title: 'IPL',
          picture: '/img/ipl.jpg',
          url: '/services/ipl'
        }
      ]
    },
    nuestrosPaquetes: {
      title: 'Our Combos',
      picture1: '/default_combos.jpg',
      picture2: '/default_combos.jpg',
      text: 'Save money getting better results.',
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
          description: "Save money getting better results",
          btn: 'Leer Más'
        }
      ],
    },
    mostPopular: {
      items: [
        {
          title: 'Hydrafacials',
          picture: '/Hydrafacial-DF.jpg',
          url: '/services/hydrafacial-es'
        },
        {
          title: 'Drenaje Linfático',
          picture: '/drenaje-linfatico-celulitis.jpg',
          url: '/services/masaje-drenaje-linfatico'
        },
        {
          title: 'IPL',
          picture: '/img/ipl.jpg',
          url: '/services/ipl-es'
        }
      ]
    },
    nuestrosPaquetes: {
      title: 'Nuestros Paquetes',
      picture1: '/default_combos.jpg',
      picture2: '/default_combos.jpg',
      text: '¡Ahorra dinero y obtén mejores resultados!',
      btn: {
        link: '/',
        text: 'Agendar cita'
      }
    }
  }
}
