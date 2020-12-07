import React from 'react'
import { Row, Col, } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import {bgWrap, bgText} from '../bg.module.css'

const ServicesSection = ({data}) => {
  return (
    <div className="mb-4 pb-4">
          <h4 className="text-center my-4">Most Popular</h4>
          <Row>
            {
              data.mostPopular.items.map((el, index) => (
                <Col key={`most_popular_item-${index}`} sm={12} md={4}>
                  <Link href={el.url}>
                  <a>
                    <div className={`d-flex justify-content-center ${window.innerWidth < 1024 && 'mb-4'}`}>
                      <div className={bgWrap}>
                        <Image
                          alt=""
                          src={el.picture}
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        />
                      </div>
                      <div className={bgText + ' ' + 'd-flex align-items-end justify-content-center'}>
                        <p style={{fontSize: '20px'}} className="bg-primary w-75 p-2 text-white">{el.title}</p>
                      </div>
                    </div>
                  </a>
                  </Link>
                </Col>
              ))
            }
          </Row>
    </div>
  )
}

export default ServicesSection
