export const PackagesData = (lang) => {
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
    sections: [
      {
        title: 'Body Packages',
        text: 'In general we recommend between 6 and 12 sessions for body treatments, two sessions per week, each for one hour. The full treatment duration being three to six weeks.  Results are noticeable within one week and will be more noticeable further into the sessions. Once the treatment package has been completed, we recommend a maintenance session every couple of months. We will set this up for you when you come in.',
        buttons: ['Request 6 session package', 'Request 12 session package']
      },
      {
        title: 'Facial Packages',
        text: 'We offer packages of 3 sessions for facials, one per month.',
        buttons: ['Request 3 session package']
      },
      {
        title: 'Radio Frequency for the Face',
        text: 'We offer a minimum package of 6 sessions for Radio Frequency Facials. The sessions will be one week apart.',
        buttons: ['Request 6 session package']
      },
      {
        title: 'IPL',
        text: 'We recommend 6 to 12 sessions, each one month apart. Results will be noticeable in the first month but will be lasting when using a package.',
        buttons: ['Request 6 session package', 'Request 12 session package']
      }
    ]
  }
}

const SERVICE_ES = () =>{
  return {
    query: '?lang=es',
    sections: [
      {
        title: 'Body Packages',
        text: 'In general we recommend between 6 and 12 sessions for body treatments, two sessions per week, each for one hour. The full treatment duration being three to six weeks.  Results are noticeable within one week and will be more noticeable further into the sessions. Once the treatment package has been completed, we recommend a maintenance session every couple of months. We will set this up for you when you come in.',
        buttons: ['Request 6 session package', 'Request 12 session package']
      },
      {
        title: 'Facial Packages',
        text: 'We offer packages of 3 sessions for facials, one per month.',
        buttons: ['Request 3 session package']
      },
      {
        title: 'Radio Frequency for the Face',
        text: 'We offer a minimum package of 6 sessions for Radio Frequency Facials. The sessions will be one week apart.',
        buttons: ['Request 6 session package']
      },
      {
        title: 'IPL',
        text: 'We recommend 6 to 12 sessions, each one month apart. Results will be noticeable in the first month but will be lasting when using a package.',
        buttons: ['Request 6 session package', 'Request 12 session package']
      }
    ]
  }
}
