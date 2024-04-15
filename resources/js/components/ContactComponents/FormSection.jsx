import React from 'react'
import Iframe from 'react-iframe'

import ContactForm from './ContactForm'

function FormSection() {

    return (
        <>
        <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <ContactForm />
                </div>
                <div className='col-md-6'>
                    <div className='map'>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1459.0341019610355!2d77.53727558339023!3d28.468635155210055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20No.%206%2C%20Sector%2021%2C%20Greater%20Noida%2C%20Gautam%20Budh%20Nagar%2C%20UP%20-%20201308!5e0!3m2!1sen!2sin!4v1710499146329!5m2!1sen!2sin" width="100%" height="375" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FormSection
