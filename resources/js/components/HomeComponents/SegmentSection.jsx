import React from 'react'

import Aluminium from 'imgPath/alumnium.png'
import Brass from 'imgPath/Brass.png'
import Metal from 'imgPath/metal.png'
import Mag from 'imgPath/Magnesium.png'
import Plastic from 'imgPath/Plastic.png'
import LeftImg from 'imgPath/Tool-left.png'
import RightImg from 'imgPath/Tool-right.png'

function SegmentSection() {
    return (
        <>
        <div className='container-fluid' style={{backgroundColor:'#ddd'}}>
            <div className='row'>
                <div className='col-md-2 left-img' style={{backgroundImage: `url(${LeftImg})`}}></div>
                <div className='col-md-8 pt-5 mt-4 pb-5'>
                    <h3 className='clr bold text-center'>APPLICABLE INDUSTRIES</h3>
                    <hr className='heading-line' />
                    <div className='row mt-5'>
                        <div className='col-md-4 col-6 text-center mb-4'>
                            <img src={ Aluminium } width="90%" alt="alu" />
                            <h6 className='bold'>ALUMINIUM</h6>
                        </div>
                        <div className='col-md-4 col-6 text-center mb-4'>
                            <img src={ Brass } width="90%" alt="brass" />
                            <h6 className='bold'>BRASS</h6>
                        </div>
                        <div className='col-md-4 col-6 text-center mb-4'>
                            <img src={ Metal } width="90%" alt="alu" />
                            <h6 className='bold'>LIGHT METALS</h6>
                        </div>
                        <div className='col-md-4 col-6 text-center mb-4'>
                            <img src={ Mag } width="90%" alt="alu" />
                            <h6 className='bold'>MAGNESIUM</h6>
                        </div>
                        <div className='col-md-4 col-6 text-center mb-4'>
                            <img src={ Metal } width="90%" alt="alu" />
                            <h6 className='bold'>LIGHT METALS</h6>
                        </div>
                        <div className='col-md-4 col-6 text-center mb-4'>
                            <img src={ Plastic } width="90%" alt="alu" />
                            <h6 className='bold'>PLASTIC</h6>
                        </div>
                    </div>
                </div>
                <div className='col-md-2 right-img' style={{backgroundImage: `url(${RightImg})`}}> </div>
            </div>
        </div>
        </>
    )
}

export default SegmentSection
