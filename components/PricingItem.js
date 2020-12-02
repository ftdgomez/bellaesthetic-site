import React from 'react'
import PropTypes from 'prop-types';
import MakeAppointmentBtn from './MakeAppointmentBtn'

const PricingItem = ({ title, items}) => {
  return (
    <div className="card mb-4 box-shadow bg-primary h-100">
      <div className="card-header" style={{minHeight: '80px'}}>
        <h4 className="my-0">{title}</h4>
      </div>
      <div className="card-body">
        <ul className="list-unstyled mt-3 mb-4">
          {items.map((item, index) => (<li key={`item-card-${index}`}>- {item}</li>))}
        </ul>
      </div>
      <div className="m-2">
        <MakeAppointmentBtn />
      </div>
    </div>
  )
}

PricingItem.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
}

PricingItem.defaultProps = {
  title: 'title',
  items: ['one', 'two', 'treeh']
}

export default PricingItem
