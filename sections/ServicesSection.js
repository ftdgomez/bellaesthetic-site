import React from 'react'
import { Row, Col, } from 'react-bootstrap'
import Link from 'next/link'

const ServicesSection = ({data}) => {
  return (
    <div>
          <h4 className="text-center my-4">Most Popular</h4>
          <Row>
            {
              data.mostPopular.items.map((el, index) => (
                <Col key={`most_popular_item-${index}`} sm={12} md={4}>
                  <Link href="/">
                    <div className="mp-img"
                      style={{
                        backgroundImage: `url(${el.picture})`,
                      }}>
                      <div className="mp-item">
                        {el.title}
                      </div>
                    </div>
                  </Link>
                </Col>
              ))
            }
          </Row>
    </div>
  )
}

export default ServicesSection
