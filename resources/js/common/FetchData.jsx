import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchData() {
    const [productData, setProductData] = useState([]);

    useEffect(() => {

        axios.get('/api/fetch_products').then(res => {
            setProductData(res.data.products);
        })
    },[]);

    return (
        <>
        { productData }
        </>
    )
}

export default FetchData
