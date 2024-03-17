import React from 'react'

import ContactBanner from 'imgPath/Contact us Banner.jpg'
import FormSection from '../ContactComponents/FormSection'
import ContactStrip from '../ContactComponents/ContactStrip'

function Contact() {
    return (
        <>
        <div className='container-fluid p-0 box-shadow'>
            <img src={ ContactBanner } width="100%" alt="banner" />
        </div>
        <FormSection />
        <ContactStrip />
        </>
    )
}

export default Contact
