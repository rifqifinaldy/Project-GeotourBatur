import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../../asset/img/undraw.png'
const OurVision = () => {
    return (
        <>
            <div className='my-3 text-center'>
                <div className='title'>
                    <h4>Our Vision</h4>
                    <h2>Traveling & Learning Geotourism</h2>
                    <hr />
                </div>
            </div>
            <Row className='card-our-vision shadow p-3 m-5 align-items-center'>
                <Col >
                    <p>Th​rough Geotour Batur, it can provide something new in world of tourism in Bali beside that it can increase understanding about geotourism and geoparks.</p>
                    <br />
                    <p>Through geotourism we can communicate the language of geology more easily to the public and community, sepport the creation of geotourism ecosystem and participate in local economic development, especially in Batur Unesco Global Geopark</p>
                </Col>
                <Col md="5">
                    <img src={img1} className='w-100' />
                </Col>
            </Row>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#264653" fillOpacity="1" d="M0,160L80,186.7C160,213,320,267,480,256C640,245,800,171,960,144C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#264653" fillOpacity="1" d="M0,160L80,186.7C160,213,320,267,480,256C640,245,800,171,960,144C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </>
    )
}

export default OurVision
