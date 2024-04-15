import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import axios from 'axios'

function ProductSection() {
    const [product, setProduct] = useState([]);

    useEffect(() => {

        axios.get('/api/fetch_products').then(res => {
            setProduct(res.data.products);
        })
    },[]);

    return (
        <>
        <div className='container-fluid pt-5 pb-4'>
            <h3 className='clr text-center'>OUR PRODUCTS</h3>
            <hr className='heading-line' />

            <div className='container pt-5'>
                <div className='row'>
                { product && product.map(item => 
                    <ProductCard props={item} />
                )}
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductSection
