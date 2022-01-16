import React from 'react'
import { dataFounder } from './DataFounder'
const TeamFounder = () => {
    return (
        <div className='team-founder'>
            <div className='my-4 text-center'>
                <div className='title'>
                    <h4>Team</h4>
                    <h2>Founder</h2>
                    <hr />
                </div>
            </div>
            <div className='team d-flex justify-content-center'>
                {dataFounder.map((item, i) => {
                    return (
                        <div key={i} className='card-team p-1 shadow'>
                            <img src={item.img} className='w-100' />
                            <div className='text-center info'>
                                <h5>{item.name}</h5>
                                <span>{item.title}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TeamFounder
