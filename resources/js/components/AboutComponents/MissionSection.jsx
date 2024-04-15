import React from 'react'

import MissionBg from 'imgPath/Mission.png'

function MissionSection() {
    return (
        <>
        <div className='container-fluid pt-5 pb-5 mission-bg' style={{backgroundImage: `url(${MissionBg})`}}>
            <div className='container pt-5 pb-5'>
                <div className='row'>
                <div className='col-md-6'></div>
                <div className='col-md-6'>
                    <div className='mission-wrapper p-4 text-justify'>
                        <p>Our unwavering dedication to client satisfaction drives us to provide exceptional quality, precision, and reliability. Through rigorous quality control measures, we ensure that every product that leaves our facility adheres to the highest industry standards.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MissionSection
