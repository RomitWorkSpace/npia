import React from 'react'

import ProductBanner from 'imgPath/Product-Banner.jpg'
import ProductSection from '../ProductComponents/ProductSection'
import SegmentSection from '../HomeComponents/SegmentSection'

function OurProduct() {
    return (
        <>
        <div className='container-fluid box-shadow p-0'>
            <img src={ProductBanner} width="100%" alt="Banner" />
        </div>
        <ProductSection />
        <SegmentSection />
        </>
    )
}

export default OurProduct
