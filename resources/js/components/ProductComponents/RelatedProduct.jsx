import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';

function RelatedProduct({props}) {
    
    const [productList, setProductList] = useState([]);

    useEffect(() => {

        axios.get(`/api/products`).then(res => {
            setProductList(res.data.products);
        })
 
    },[props]);

    return (
        <>
        <h3 className='clr text-center'>OUR PRODUCTS</h3>
        <hr className='heading-line' />
        <div className='container-fluid pt-5 pb-5'>
            <div className='container'>
            <Swiper
                slidesPerView={3}
                breakpoints={{
                    360: {

                      slidesPerView: 2,
                    },
                    768: {
    
                      slidesPerView: 3,
                    },
                    1280: {
    
                        slidesPerView: 4,
                      },
                  }}
                spaceBetween={30}
                modules={[Autoplay]}
                loop={true}
                autoplay={{delay: 4000,
                disableOnInteraction: false}}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="banner-section">

            {productList.filter(product => product.id != props).map(filteredProduct => (
                <SwiperSlide>
                    <div className='text-center'>
                    <img src={`https://filmcitynow.com/storage/app/${filteredProduct.image}`} width="100%" alt="product" />
                    <Link to={`/product/${filteredProduct.name}`}>{filteredProduct.name}</Link>
                    </div>
                </SwiperSlide>
            ))}

            </Swiper>
            </div>
        </div>
        </>
    )
}

export default RelatedProduct
