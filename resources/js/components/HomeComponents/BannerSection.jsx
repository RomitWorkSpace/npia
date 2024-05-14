import React from 'react'

import BannerImg from 'imgPath/service-banner.jpg'

function BannerSection() {
    return (
        <>
        <div className="container-fluid">
            <div className="container">
                <img src={ BannerImg } alt="banner" width="100%" style={{borderRadius: '10px'}} />
            </div>
        </div>
        </>
    )
}

export default BannerSection
