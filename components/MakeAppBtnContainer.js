import React from 'react'
import { Button } from 'react-bootstrap'

const MakeAppBrnContainer = ({children}) => {

  const handleChatMsg = () => {
    window.FB.CustomerChat.show()
    let msg
    if (window.location.pathname.split('/').length > 2)
    {
      msg = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] !== '' ? window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] : ''
      msg = msg.replace(/-/g, ' ')
    }
    else
    {
      msg = ''
    }
    window.FB.CustomerChat.update({  
      logged_in_greeting: `Hi! do you like to make an appointment? ${msg}`,
      logged_out_greeting: 'Log in to Chat with Us and make your appointment!',  

    });
  }

  return (
    <div style={{cursor: 'pointer'}} onClick={handleChatMsg}>
      {children}
    </div>
  )
}

export default MakeAppBrnContainer
