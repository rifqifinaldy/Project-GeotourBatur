import React from 'react'
import { Button } from 'react-bootstrap'

const Youtube = () => {
    return (
        <div className='bg-white'>

        <div className='youtube'>
            <div className='py-5 text-center'>
                <div className='title'>
                    <h4>Teaser</h4>
                    <h2>Youtube Channel</h2>
                    <hr />
                </div>
            </div>
            <div className='text-center frame'>
                <iframe width="60%" height="500px" src="https://www.youtube.com/embed/3s4cZD-Fqlc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <div className='text-center'>
                <span>Visit Our Youtube Channel for More</span><br />
                <a href="https://www.youtube.com/watch?v=3s4cZD-Fqlc" target="_blank">
                    <Button className="shadow btn-custom px-4">
                        Our Channel
                    </Button>
                </a>
            </div>
        </div>
        </div>

    )
}

export default Youtube
