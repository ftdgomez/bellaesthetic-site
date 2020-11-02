import React from 'react'
import { ListGroup } from 'react-bootstrap'

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
    </ListGroup>
  )
}

export default ContactData
