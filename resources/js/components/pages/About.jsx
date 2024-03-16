import React from 'react'

import AboutBanner from 'imgPath/About-Banner.jpg'
import AboutSection from '../HomeComponents/AboutSection'
import MissionSection from '../AboutComponents/MissionSection'

function About() {
    return (
        <>
        <div className='container-fluid box-shadow p-0'>
            <img src={ AboutBanner } width="100%" alt="Banner" />
        </div>
        <AboutSection />
        <MissionSection />
        </>
    )
}

export default About
