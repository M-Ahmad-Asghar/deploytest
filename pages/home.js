import React from 'react'
import HeaderSection from './components/home/headerSection/HeaderSection'
import Services from './components/home/services/Services'
import Capabilities from './components/home/capabilities/Capabilities'
import ContactUs from './components/home/contactUs/ContactUs'
import ClientsAndPartners from './components/clientsAndPartners/ClientsAndPartners'
import FooterSection from './components/footerSection/FooterSection'
function Home() {
    return (
        <div>
            <HeaderSection />
            <Services />
            <ClientsAndPartners />

            <Capabilities />
            <ContactUs />
            <FooterSection />
        </div>
    )
}
export default Home