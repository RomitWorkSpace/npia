import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import RequestQuoteBanner from 'imgPath/Request-Quote.jpg'
import { Link } from 'react-router-dom';

function RequestQuote() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [formstatus, setFormStatus] = useState(null);

    const handleForm = async (formData) => {
        console.log(formData);
        const response = await axios.post('/api/request-form', formData);
        if (response.status === 200){
            setFormStatus('Form submit successfully');
            reset();
        }
    }
    return (
        <>
        <div className='container-fluid p-0 box-shadow'>
            <img src={ RequestQuoteBanner } width="100%" alt="banner" />
        </div>
        <div className='container-fluid pt-5 pb-5'>
            <div className='container pt-3'>
                <div className='row'>
                    <div className='col-md-7 mb-4'>
                        <div className='request-form p-4 box-shadow'>
                            <form className='mt-3 mb-3' onSubmit={handleSubmit(handleForm)}>
                                <div className='form-group mb-4'>
                                    <label htmlFor="name">Name*</label>
                                    <input type="text" 
                                    name="name" id="name" 
                                    className='form-control' 
                                    {...register("name",{
                                        required: true
                                    })}
                                    />
                                    {errors.name?.type === "required" && (
                                        <small className='clr-red'>This field is required</small>
                                    )}
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor="company">Company*</label>
                                    <input type="text" 
                                    name="company" id="company" 
                                    className='form-control' 
                                    {...register("company",{
                                        required: true
                                    })}
                                    />
                                    {errors.company?.type === "required" && (
                                        <small className='clr-red'>This field is required</small>
                                    )}
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor="company">Email*</label>
                                    <input type="email" 
                                    name="email" id="email" 
                                    className='form-control' 
                                    {...register("email",{
                                        required: true
                                    })}
                                    />
                                    {errors.email?.type === "required" && (
                                        <small className='clr-red'>This field is required</small>
                                    )}

                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="number" name="phone" id="phone" className='form-control' />
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor="company">Select Your Industry*</label>
                                    <select name="industry" id="industry" className='form-control' {...register("industry",{required: true})}>
                                        <option value="">------- Select Industry -------</option>
                                        <option value="mobile">Mobile Industry</option>
                                        <option value="aerospace">Aerospace Industry</option>
                                        <option value="automotive">Automotive Industry</option>
                                        <option value="electronics">Electronics Industry</option>
                                        <option value="machanical">Machanical Industry</option>
                                        <option value="watch">Watch Industry</option>
                                        <option value="defence">Defence Industry</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.industry?.type === "required" && (
                                        <small className='clr-red'>This field is required</small>
                                    )}
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor="description">Project Details (Please include: Part Name / Quantity / Material / Color / Surface Finish)</label>
                                    <textarea name="description" id="description" rows="5" className='form-control' placeholder="Description..."></textarea>
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor="document">Upload Your Files to Get Instant Quote and DFM Feedback</label>
                                    <input type="file" name="document" id="document" />
                                </div>
                                <div className='text-center'>
                                    <button type="submit" className='btn btn-primary'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='p-3 text-justify'>
                            <h4 className=''>Privacy:</h4>
                            <p style={{lineHeight: '2', color:'#555'}}>As with all our customers, confidentiality remains vital in demonstrating our commitment to customer service. You can feel reassured that we will gladly complete disclosure forms for your applications and your applications will solely be used for quotation purposes.</p>

                            <h4 className='mt-5'>Ready To Get Started?</h4>
                            <p style={{lineHeight: '2', color:'#555'}}>If your project requires more immediate assistance, please give us a call or email us for the fastest response.</p>
                        </div>
                        <div className='pt-5'>
                            <div className='email-icon row'>
                                <div className="icon-bg">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="icon-info">
                                    <h4 className=''>E-mail</h4>
                                    <Link to="mailto:admin@npia.in">
                                        <span className=''>admin@npia.in</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <div className='email-icon row'>
                                <div className="icon-bg">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="icon-info">
                                    <h4 className=''>Call Us</h4>
                                    <Link to="tel:+91-8178126122">
                                    <span className=''>+91-8178126122</span>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default RequestQuote
