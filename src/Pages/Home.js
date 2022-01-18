import React from 'react'
import Footer from '../Component/Footer/Footer'
import OurDestination from '../Component/OurDestination/OurDestination'
import OurServices from '../Component/OurServices/OurServices'
import TriviaGeotour from '../Component/TriviaGeotour/TriviaGeotour'
import Youtube from '../Component/Youtube/Youtube'

const Home = () => {
    return (
        <>
            <OurServices />
            <OurDestination />
            <TriviaGeotour />
            <Youtube />
            <Footer />
        </>
    )
}

export default Home
