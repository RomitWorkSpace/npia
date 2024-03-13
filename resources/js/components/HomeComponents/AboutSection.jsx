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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutSection