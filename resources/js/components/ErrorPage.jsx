import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <>
        <div className='container pt-5 pb-5 text-center'>
            <h4>404 Page Not Found</h4>
            <Link to="/">
            <h5 className=''>Go Back To Home</h5>
            </Link>
        </div>
        </>
    )
}

export default ErrorPage
