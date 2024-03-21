import React from 'react'

function ContactForm() {
    return (
        <>
        <div className='w-100 contact-wrapper p-5'>
            <span className='' style={{color:'#f5a005'}}>Contact Us</span>
            <h4 className='' style={{color:'#111'}}>Do You Have Any Query?</h4>
            <form action="#" method="post" >
            <div className='row'>
                <div className='col-md-6'>
                <div className='form-group mb-3'>
                    <input type="text" name="name" className='form-control' placeholder="Name" required />
                </div>
                </div>
                <div className='col-md-6'>
                <div className='form-group mb-3'>
                    <input type="text" name="interest" className='form-control' placeholder="What you are interested" required />
                </div>
                </div>
                <div className='col-md-6'>
                <div className='form-group mb-3'>
                    <input type="email" name="email" className='form-control' placeholder="Enter Email" required />
                </div>
                <div className='form-group mb-3'>
                    <input type="number" name="phone" className='form-control' placeholder="Phone no" required />
                </div>
                </div>

                <div className='col-md-6'>
                <div className='form-group mb-3'>
                    <textarea name="message" className='form-control' rows="3" type="text" placeholder="Message..."></textarea>
                </div>
                </div>

                <div className='col-md-6'>
                <div className='form-group mb-3'>
                    <input type="text" name="address" className='form-control' placeholder="Address" required />
                </div>
                </div>
                <div className='col-md-6'>
                <div className='form-group mb-3 text-center'>
                    <button type="submit" className='btn btn-primary' style={{padding: '8px 30px'}} value="submit"> SUBMIT </button>
                </div>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}

export default ContactForm
