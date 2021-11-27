import React from 'react'
import HeaderSection from '../src/components/home/headerSection/HeaderSection'
import Services from '../src/components/home/services/Services'
import Capabilities from '../src/components/home/capabilities/Capabilities'
import ContactUs from '../src/components/home/contactUs/ContactUs'
import ClientsAndPartners from '../src/components/home/clientsAndPartners/ClientsAndPartners'
import FooterSection from '../src/components/home/footerSection/FooterSection'
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