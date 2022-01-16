import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { dataCardServices } from './DataCardServices'

const OurServices = () => {
    return (
        <Container>
            {/* SERVICES */}
            <div className='services my-4 text-center'>
                <div className='title'>
                    <h4>Our Services</h4>
                    <h2>Traveling Learning Geoutourism</h2>
                    <hr />
                </div>
            </div>
            <Row className='justify-content-center '>
                {dataCardServices.map((item, i) => {
                    return (
                        <Col key={i} xl="3" md="5" sm="12" className='card-services p-2 m-3 shadow '>
                            <div className='img-services '>
                                <img src={item.img} />
                            </div>
                            <div className='caption-services p-3'>
                                <h4>{item.title}</h4>
                                <strong>{item.start} <span className='harga'>{item.harga_pax}</span> {item.min} <span className='harga'>{item.harga_pax_2}</span> {item.min_2}</strong> <br />
                                <span>{item.desc}</span> <br />
                                <strong>{item.info}</strong>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default OurServices
