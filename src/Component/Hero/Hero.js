import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import img from '../../asset/img/1011552449.png'
import img2 from '../../asset/img/hero.png'
const Hero = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='hero shadow-sm'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className='mb-5'>Let's Explore <br />GeoPark Batur </h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        style={{backgroundPosition:'center'}}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>"Cintamani The Hearth of Batur"</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Hero
