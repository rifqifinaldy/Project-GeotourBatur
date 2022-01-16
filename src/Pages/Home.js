import React from 'react'
import Hero from '../Component/Hero/Hero'
import OurDestination from '../Component/OurDestination/OurDestination'
import OurServices from '../Component/OurServices/OurServices'
import TriviaGeotour from '../Component/TriviaGeotour/TriviaGeotour'
import Youtube from '../Component/Youtube/Youtube'

const Home = () => {
    return (
        <>
            <Hero />
            <OurServices />
            <OurDestination />
            <TriviaGeotour />
            <Youtube />
        </>
    )
}

export default Home
