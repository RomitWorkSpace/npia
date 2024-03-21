import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({props}) {
    return (
        <>
        <div className='col-md-3 text-center mb-4'>
            <img src={`https://filmcitynow.com/storage/app/${props.image}`} width="100%" alt="product item" />
            <Link to={`/product/${props.slug}`}>
            <span className=''>{props.name}</span>
            </Link>
        </div>
        </>
    )
}

export default ProductCard
