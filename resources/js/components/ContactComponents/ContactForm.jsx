import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [formstatus, setFormStatus] = useState(null);

    const handleForm = async (formData) => {
        console.log(formData);
        const response = await axios.post('/api/submit-form', formData);
        if (response.status === 200){
            setFormStatus('Form submit successfully');
            reset();
        }
    }

    return (
        <>
        <div className='w-100 contact-wrapper p-5'>
            <span className='' style={{color:'#f5a005'}}>Contact Us</span>
            <h4 className='' style={{color:'#111'}}>Do You Have Any Query?</h4>
            <form onSubmit={handleSubmit(handleForm)}>
            <div className='row'>
                <div className='col-md-6'>
                <div className='form-group mb-3'>
                    <input type="text" 
                    name="name" 
                    className='form-control' 
                    placeholder="Name"
                    {...register("name",{
                        required: true
                    })}
                    />
                    {errors.name?.type === "required" && (
                        <small className='clr-red'>This field is required</small>
                    )}
                </div>
                </div>
                <div className='col-md-6'>
                <div className='form-group mb-3'>
                    <input type="text" 
                    name="interest" 
                    className='form-control' 
                    placeholder="What you are interested" 
                    {...register("interest",{
                        required: true
                    })}
                    />
                    {errors.interest?.type === "required" && (
                        <small className='clr-red'>This field is required</small>
                    )}
                </div>
                </div>
                <div className='col-md-6'>
                <div className='form-group mb-3'>
                    <input type="email" 
                    name="email" 
                    className='form-control' 
                    placeholder="Enter Email" 
                    {...register("email",{
                        required: true
                    })}
                    />
                    {errors.email?.type === "required" && (
                        <small className='clr-red'>This field is required</small>
                    )}
                </div>
                <div className='form-group mb-3'>
                    <input type="number" 
                    name="phone" 
                    className='form-control' 
                    placeholder="Phone no" 
                    {...register("phone",{
                        required: true
                    })}
                    />
                    {errors.phone?.type === "required" && (
                        <small className='clr-red'>This field is required</small>
                    )}
                </div>
                </div>

                <div className='col-md-6'>
                <div className='form-group mb-3'>
                    <textarea name="message" 
                    className='form-control' 
                    rows="3" type="text" 
                    placeholder="Message..."
                    {...register("message",{
                        required: true
                    })}
                    ></textarea>
                    {errors.message?.type === "required" && (
                        <small className='clr-red'>This field is required</small>
                    )}
                </div>
                </div>

                <div className='col-md-6'>
                <div className='form-group mb-3'>
                    <input type="text" 
                    name="address" 
                    className='form-control' 
                    placeholder="Address" 
                    {...register("address",{
                        required: true
                    })}
                    />
                    {errors.address?.type === "required" && (
                        <small className='clr-red'>This field is required</small>
                    )}
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
