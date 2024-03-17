import React from 'react'
import AboutImg from 'imgPath/About us Img.png'

function AboutSection() {
    return (
        <>
        <div className='container-fluid pt-5 pb-5'>
            <h3 className='text-center bold clr'>ABOUT US</h3>
            <hr className='heading-line' />

            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={ AboutImg } width="100%" alt="NPIA" />
                    </div>
                    <div className='col-md-6 text-justify'>
                        <p>Founded in 2020, our company, NPIA INDIA PVT LTD., embarked on a journey
to revolutionize the Automotive & Mobile industry. With the completion of our
state-of-the-art factory setup in May 2023 at Grater Noida, UP, we specialize in
delivering CNC machining solutions for Automotive & Mobile Parts. Our
unwavering dedication to client satisfaction drives us to provide exceptional
quality, precision, and reliability. Through rigorous quality control measures, we
ensure that every product that leaves our facility adheres to the highest industry
standards.</p> <p>Our meticulous attention to detail, advanced testing protocols, and
skilled technicians guarantee that our clients receive flawless components that
meet their exact specifications. We eagerly await the opportunity to collaborate with
clients, leveraging our expertise and advanced capabilities to meet their unique
manufacturing requirements. We invite you to approach us and discover the
seamless partnership we can create to drive success together.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutSection
