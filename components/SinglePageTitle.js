import React from 'react'

const SinglePageTitle = ({data}) => {
  return (
    <div className="s-title-container bg-primary" style={{backgroundImage: 'url(/services-bg.png)'}}>
      <h1 className="text-center">{data.title}</h1> 
    </div>
  )
}

export default SinglePageTitle
