import React from 'react'
import Link from 'next/link'

const PromoCard = ({subtitle, title, btnText, link, picture}) => {
  return (
    <div className="promocard" style={{backgroundImage: `url(/img/${picture})`}}>
     <h4>{subtitle}</h4> 
     <h2>{title}</h2>
     <Link href={link}>{btnText}</Link>
    </div>
  )
}

export default PromoCard
