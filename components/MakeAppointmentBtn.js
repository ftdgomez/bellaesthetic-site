import React from 'react'
import { Button } from 'react-bootstrap'

const MakeAppointmentBtn = () => {
  return (
    <div>
      <Button block size="md" className="text-white" variant="danger" block>
        Make an appointment
      </Button>
    </div>
  )
}

export default MakeAppointmentBtn
