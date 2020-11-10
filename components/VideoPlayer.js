import React from 'react'

const VideoPlayer = ({url}) => {
  return (
    <div className="mt-2">
      <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${url}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen></iframe>
    </div>
  )
}

VideoPlayer.defaultProps = {
  url: 'sztFHij0_W0'
}

export default VideoPlayer
