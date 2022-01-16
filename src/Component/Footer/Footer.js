import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#264653" fillOpacity="1" d="M0,160L80,154.7C160,149,320,139,480,154.7C640,171,800,213,960,213.3C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
            <div className='footer p-5'>
                <Row>
                    <Col className='logo my-2' sm="12" md="2">
                        <span>GEOTOUR </span>
                        <span>BATUR</span>
                    </Col>
                    <Col className='my-2' sm="12" md="3">
                        <strong>Address</strong>
                        <p>Jl. Raya Kintamani, Batur Sel., Kec. Kintamani, Kabupaten Bangli, Bali 80652</p>
                    </Col>
                    <Col sm="12" md="3" className='my-2'>
                        <strong>Contact</strong><br />
                        <span>WhatsApp/Phone : +6282121988204 (Rinjani)</span> <br />
                        <span>Email : geotourbatur1926@gmail.com</span>
                    </Col>
                    <Col sm="12" md="2" className='my-2'>
                        <strong>Social Media</strong><br />
                        <a href="#">Instagram</a> <br />
                        <a href="#">Facebook</a> <br />
                    </Col>
                    <Col className='my-2' sm="12" md="2">
                        <strong>Others</strong><br />
                        <a href="#">Catalog</a> <br />
                        <a href="#">Information Center</a> <br />
                        <a href="#">About</a> <br />
                    </Col>
                </Row>


            </div>
        </>
    )
}

export default Footer
