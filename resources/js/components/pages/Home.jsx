import React from 'react'
import MainSlider from '../HomeComponents/MainSlider'
import AboutSection from '../HomeComponents/AboutSection'
import SegmentSection from '../HomeComponents/SegmentSection'
import ProductSection from '../ProductComponents/ProductSection'
import NumberStrip from '../HomeComponents/NumberStrip'
import ContactSection from '../HomeComponents/ContactSection'

function Home() {
    return (
        <>
        <MainSlider />
        <AboutSection />
        <SegmentSection />
        <NumberStrip />
        <ContactSection />
        </>
    )
}

export default Home
