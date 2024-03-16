import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function ContactStrip() {
    return (
        <>
        <div className='container pt-4'>
            <div className='row'>
                <div className='col-md-3 text-center mb-4'>
                    <h6 className='clr'>MAIL US</h6>
                    <p>admin@npia.in</p>
                </div>
                <div className='col-md-2'></div>
                <div className='col-md-2 text-center mb-4'>
                    <h6 className='clr'>CALL US</h6>
                    <p>+91-8178126122</p>
                </div>
                <div className='col-md-2'></div>
                <div className='col-md-3 text-center mb-4'>
                    <h6 className='clr'>CONNECT WITH</h6>
                    <FacebookIcon />
                    <XIcon />
                    <LinkedInIcon />
                    <InstagramIcon />
                </div>
            </div>
        </div>
        </>
    )
}

export default ContactStrip
