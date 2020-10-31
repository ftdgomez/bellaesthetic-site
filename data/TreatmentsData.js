export const treatmentsData = (name, lang) => {
  if (lang === 'es')
    {
      return TREATMENT_ES(name)
    }
  else if (lang === 'en')
    {
      return TREATMENT_EN(name);
    }
  else
    {
      return TREATMENT_EN(name);
    }
}

const error = {
  title: 'Error, servicio no encontrado',
  picture: 'default.jpg',
  body: 'error.',
  error: true
}


const TREATMENT_EN = (name) => {
  const treatment = {
    "esthetic-cavitation": {
      title: 'Esthetic Cavitation',
      picture: 'default.jpg',
      body: 'la info'
    }
  }
  return treatment[name] || error
}


const TREATMENT_ES = (name) => {
  const treatment = {
    "esthetic-cavitation": {
      title: 'Cavitación',
      picture: 'default.jpg',
      body: 'la info'
    }
  }
  return treatment[name] || error
}
