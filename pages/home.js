import React from 'react'
import HeaderSection from './components/home/headerSection/HeaderSection'
import Services from './components/home/services/Services'
import Capabilities from  './components/home/capabilities/Capabilities'
import ContactUs from './components/home/contactUs/ContactUs'

function Home() {
    return (
        <div>
            <HeaderSection />
            <Services />
            <Capabilities />
            <ContactUs />
        </div>
    )
}
export default Home