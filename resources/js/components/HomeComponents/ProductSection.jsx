import React from 'react'

import Micro from 'imgPath/Micro Bolt.png'
import Watch from 'imgPath/Watch Spare Part.png'
import Contact from 'imgPath/Contact Pin.png'
import Electronic from 'imgPath/Electronic Pins.png'

function ProductSection() {
    return (
        <>
        <div className='container-fluid pt-5 pb-5 mt-5'>
            <h3 className='clr bold text-center'>OUR PRODUCTS</h3>
            <hr className='heading-line' />
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-3 col-6 text-center'>
                        <img src={ Micro } alt="micro" width="100%" />
                        <h6 className=''>Micro Bolt</h6>
                    </div>
                    <div className='col-md-3 col-6 text-center'>
                        <img src={ Watch } alt="micro" width="100%" />
                        <h6 className=''>Watch Spare Part</h6>
                    </div>
                    <div className='col-md-3 col-6 text-center'>
                        <img src={ Contact } alt="micro" width="100%" />
                        <h6 className=''>Contact Pin</h6>
                    </div>
                    <div className='col-md-3 col-6 text-center'>
                        <img src={ Electronic } alt="micro" width="100%" />
                        <h6 className=''>Electronic Pin</h6>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductSection
