import React from 'react'

import NumberBg from 'imgPath/Number-Bg.jpg'

function NumberStrip() {
    return (
        <>
        <div className='container-fluid strip-bg pt-3 pb-5' style={{backgroundImage: `url(${NumberBg})`}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-6 mt-3 text-center'>
                        <h1 className='clr-white bold'>1250<span style={{color:'#f5a005'}}>K</span></h1>
                        <span className='clr-white bold'>Satisfy Customers</span>
                    </div>
                    <div className='col-md-3 col-6 mt-3 text-center'>
                        <h1 className='clr-white bold'>50<span style={{color:'#f5a005'}}>K</span></h1>
                        <span className='clr-white bold'>Technical Teams</span>
                    </div>
                    <div className='col-md-3 col-6 mt-3 text-center'>
                        <h1 className='clr-white bold'>25<span style={{color:'#f5a005'}}>K</span></h1>
                        <span className='clr-white bold'>Best Stories</span>
                    </div>
                    <div className='col-md-3 col-6 mt-3 text-center'>
                        <h1 className='clr-white bold'>80<span style={{color:'#f5a005'}}>+</span></h1>
                        <span className='clr-white bold'>Modern Tech</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NumberStrip
