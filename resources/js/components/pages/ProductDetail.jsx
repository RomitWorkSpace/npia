import React from 'react'

import ProductBanner from 'imgPath/Our-Product.jpg'
import DetailSection from '../ProductComponents/DetailSection'

function ProductDetail() {
    return (
        <>
        <div className='container-fluid p-0 box-shadow'>
            <img src={ProductBanner} width="100%" alt="Banner" />
        </div>
        <DetailSection />
        </>
    )
}

export default ProductDetail
