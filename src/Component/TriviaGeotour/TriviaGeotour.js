import React from 'react'
import { Container, NavItem } from 'react-bootstrap'
import TinySlider from 'tiny-slider-react'
import { DataTriviaGeotour } from './DataTriviaGeotour'
const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    mouseDrag: true,
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
    return (
        <div>
            <div className='services my-4 text-center'>
                <div className='title'>
                    <h4>Geotour Batur Gallery</h4>
                    <h2>Trivia Geoutour Batur</h2>
                    <hr />
                </div>
            </div>
            <Container>
                <TinySlider settings={settings}>
                    {DataTriviaGeotour.map((item, i) => (
                        <div key={i} className='gallery'>
                            <img src={item.img} />
                        </div>
                    ))}
                </TinySlider>
            </Container>
        </div>
    )
}

export default TriviaGeotour
