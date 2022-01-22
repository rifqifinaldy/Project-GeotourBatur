import {useState} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import TinySlider from 'tiny-slider-react'
import { DataTriviaGeotour } from './DataTriviaGeotour'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import img from '../../asset/img/bg-2.png'

const settings = {
    lazyload: true,
    nav: false,
    loop: true,
    responsive: {
        540: {
            items: 2
        },
        720: {
            items: 3
        }
    }
};
const TriviaGeotour = () => {
    
    const [imgShowClass, setImgShowClass] = useState("d-none");
    const [getImg, setGetImg] = useState();

    
    const handleShow = () => {
        setImgShowClass("d-none")
    }
    return (
        <div className='wrapper-gallery'>
            {/* <Row className='justify-content-center align-items-center py-4 text-center'> */}
                <div className='title text-center py-5'>
                    <h4>Geotour Batur Gallery</h4>
                    <h2>Trivia Geoutour Batur</h2>
                    <hr />
                </div>
            <div className={`${imgShowClass}` + " wrapper-img-show"}>
                <div className='img-card'>
                    <Button color="danger" size="sm" className="mb-2" onClick={handleShow}>
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>
                    <img src={getImg} />
                </div>
            </div>
            <Container>
                <TinySlider settings={settings}>
                    {DataTriviaGeotour.map((item, i) => (
                        <div key={i} className='gallery'>
                            <img src={item.img} onClick={()=>{setGetImg(item.img);setImgShowClass("open-img")}} style={{cursor:'pointer'}}/>
                        </div>
                    ))}
                </TinySlider>
            </Container>
        </div>
    )
}

export default TriviaGeotour
