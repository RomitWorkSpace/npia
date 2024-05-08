import React from 'react'
import AboutImg from 'imgPath/About us Img.png'
import { Link } from 'react-router-dom'

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
                        <p>Established in 2020, <b>NPIA INDIA PVT LTD.</b> embarked on a journey to revolutionize the Micro-Precision industry. Our state-of-the-art factory, completed in May 2023 in Grater Noida, UP, specializes in delivering CNC Milling and Turning Solutions for various industries including Electronics, Hitech Computers, Watches, Automobiles, Mobiles, Aerospace, and Mechanical Industries.</p>
                         <p>At NPIA, we are dedicated to exceeding client expectations by providing exceptional quality, precision, and reliability. Our commitment to quality is evident in our rigorous quality control measures, ensuring that every product leaving our facility meets the highest industry standards... 
                            <Link to="/about">Read More</Link></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutSection
