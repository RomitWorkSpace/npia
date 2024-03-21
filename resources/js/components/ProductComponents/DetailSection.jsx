import React, { useEffect, useState } from 'react'
import RelatedProduct from './RelatedProduct'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function DetailSection() {
    const { slug } = useParams();
    const [productData, setProductData] = useState([]);

    useEffect(() => {

        axios.get(`/api/product/${slug}`).then(res => {
            setProductData(res.data.product);
        })
    },[slug]);
    return (
        <>
        <div className='container-fluid pt-5 mt-5'>
            <h3 className='clr bold text-center'>OUR PRODUCT DETAIL</h3>
            <hr className='heading-line' />

            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-5 text-center'>
                        <img src={`https://filmcitynow.com/storage/app/${ productData.image }`} width="90%" alt="product" />
                        <h4 className='clr bold mb-4'>{productData.name}</h4>
                    </div>
                    <div className='col-md-7'>
                        <h5 className='bold'>DETAILS:-</h5>
                        
                            <div dangerouslySetInnerHTML={{__html: productData.feature}}>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container text-justify pt-4 pb-4'>
                <h5 className='bold'>USE IT:-</h5>
                <div dangerouslySetInnerHTML={{__html: productData.description}}>
                </div>
            </div>
        </div>
        <RelatedProduct props = {productData.id} />
        </>
    )
}

export default DetailSection
