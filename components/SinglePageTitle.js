import React from 'react'

const SinglePageTitle = ({data}) => {
  return (
    <div className="s-title-container bg-primary" style={{backgroundImage: `url(/${data.bg === 'facial' ? 'single-service-top-facial.jpg' : data.bg === 'body' ? 'single-service-top-body.jpg' : 'single-service-top.jpg'})`}}>
      <h1 className="text-center">{data.title}</h1> 
    </div>
  )
}

export default SinglePageTitle
