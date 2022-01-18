import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import img from "../../asset/img/trivia.png"
const BlogDanArticle = () => {
    return (
        <div>
            <div className='mt-3 mb-5 text-center'>
                <div className='title'>
                    <h4>Blog & Article</h4>
                    <h2>Information Center</h2>
                    <hr />
                </div>
            </div>
            <Container>

                <Row className='shadow' >
                    <Col md="8" className='blog p-3'>
                        <h4 className='text-center'>Peserta Indonesia Geopark Youth Forum (IGYF) 2021 akan mengkuti Diklat Geopark & Geowisata di Geopark Batur</h4>
                        <hr />
                        <div className='d-flex justify-content-between my-2'>
                            <span>Autor : </span>
                            <span>Date : 6/20/2021 </span>
                        </div>
                        <div className='blog-body text-center'>
                            <img src={img} alt="trivia" className='w-75' />
                            <p>Peserta Indonesia Geopark Youth Forum (IGYF) 2021 akan mengkuti Diklat Geopark & Geowisata di Geopark Batur, menjadi kesempatan menarik untuk generasi muda belajar dari Geopark Unesco pertama di Indonesia. Pentingnya peranan pemuda dalam mendukung pengembangan geopark dan menjadi garda terdepan dalam mengkomunikasikan pariwisata yang berkualitas dan berkelanjutan. Museum Gunungapi Batur menjadi pusat center ilmu kegeologian di Bali dan Pusat Pelatihan terpadu yang dikelola oleh PPSDM-GEOMINERBA menjadi tempat terbaik untuk menimba ilmu.</p>
                            <br />
                            <p>Tahapan seleksi saat ini telah melewati tahapan seleksi pertama dalam Workshop IGYF ke-1 yang dilakukan secara online pada tanggal 27-29 Mei 2021 dengan peserta 148 orang, dan telah terseleksi menjadi 46 Peserta.</p>
                            <p>Selanjutnya Kementerian PPN/Bappenas berkerjasama dengan Kementerian ESDM melalui Badan Pengembangan Sumber Daya ESDM (BPSDM-ESDM) untuk memberikan dukungan
                                Pendidikan dan Pelatihan (diklat) kepada 46 Peserta yang lolos seleksi tahap 1 dan
                                sekaligus untuk melakukan seleksi 7 orang yang akan mewakili Indonesia ke Jeju Korea
                                Selatan dalam UNESCO Global Geoparks Youth Forum Conference.</p>
                            <p>Adapun 46 peserta yang lolos tahap 1 akan mengikut Diklat Geopark dan
                                Geowisata di PPSDM Geominerba di Batur UNESCO Global Geopark, Bali akan dibagi
                                menjadi 2 (dua) batch sebagai berikut:
                                • Batch 1 (Satu) tanggal 21-25 Juni 2021 untuk 23 Peserta (lampiran II)
                                • Batch 2 (kedua) tanggal 5-9 Juli 2021 untuk 23 Peserta (lampiran III)</p>
                            <div className='hashtag'>
                                <a href="#">#geopark </a>
                                <a href="#">#geoparkbatur </a>
                                <a href="#">#kintamani </a>
                                <a href="#">#batur</a>
                                <a href="#">#bali</a>
                                <a href="#">#geowisata</a>
                                <a href="#">#bapennasri </a>
                                <a href="#">#igyf2021 </a>
                                <a href="#">#infobangli </a>
                                <a href="#">#geotourbatur</a>
                                <a href="#">#triviageotourbatur</a>
                            </div>
                        </div>
                    </Col>
                    <Col className='filter p-3 order-1'>
                            <h4>Archieves</h4>
                            <hr />
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>2021</Accordion.Header>
                                    <Accordion.Body>
                                        <p>January</p>
                                        <p>February</p>
                                        <p>March</p>
                                        {/* <p>April</p>
                                        <p>May</p>
                                        <p>June</p>
                                        <p>July</p>
                                        <p>August</p>
                                        <p>September</p>
                                        <p>October</p>
                                        <p>November</p>
                                        <p>December</p> */}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" >
                                    <Accordion.Header>2022</Accordion.Header>
                                    <Accordion.Body>
                                    <p>January</p>
                                        <p>February</p>
                                        <p>March</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <h4>Categories</h4>
                            <hr />
                            <a href="#">Categories 1</a>
                            <a href="#">Categories 2</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BlogDanArticle
