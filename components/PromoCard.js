import React from 'react'

const PromoCard = ({subtitle, title, btnText, link, picture}) => {
  return (
    <div className="promocard" style={{backgroundImage: `url(/img/${picture})`}}>
     <h4>{subtitle}</h4> 
     <h2>{title}</h2>
     <a href={link}>{btnText}</a>
    </div>
  )
}

export default PromoCard
