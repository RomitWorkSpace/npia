import React from 'react'
import ContactForm from '../ContactComponents/ContactForm'
import ContactBg from 'imgPath/contact-bg.jpg'

function ContactSection() {
    return (
        <>
        <div className='container-fluid contact-bg p-3 mt-5' style={{backgroundImage: `url(${ContactBg})`}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>

                    </div>
                    <div className='col-md-7'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ContactSection
