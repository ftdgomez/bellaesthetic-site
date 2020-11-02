import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import MakeAppointmentBtn from './MakeAppointmentBtn'

const ContactData = () => {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <i className="im im-support mr-2"></i>703-625-5960
      </ListGroup.Item>
      <ListGroup.Item>
        <i className="im im-support mr-2"></i>571-522-3552 <br />
      </ListGroup.Item>
      <ListGroup.Item>
        <i className="im im-location mr-2"></i>  10560 Main St, Ste 102, Fairfax 22030.
      </ListGroup.Item>
      <ListGroup.Item>
        <i className="im im-mail mr-4"></i><a href="mailto:info@labellaesthetics.com">info@labellaesthetics.com</a>
      </ListGroup.Item>
      <MakeAppointmentBtn />
      <iframe className="mt-4" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FBella-Esthetic-by-Gabriela-Ruiz-182627661817675&width=186&layout=button&action=like&size=large&share=true&height=65&appId=759703458182138" width="186" height="65" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0"  allow="encrypted-media"></iframe>
    </ListGroup>
  )
}

export default ContactData
