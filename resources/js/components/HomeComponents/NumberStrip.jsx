import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import axios from 'axios';

function NumberStrip() {
    const [industry, setIndustry] = useState([]);

    useEffect(() => {

        axios.get('/api/industries').then(res => {
            setIndustry(res.data.industries);
        })
    },[]);

    var industry_slider = "";

    industry_slider = industry.map( (item) => {
        return (
            <>
                <SwiperSlide>
                    <Link to={`/industry/${item.slug}`}>
                        <img src={`/storage/app/${item.image}`} width="100%" />
                        <div className='text-center pt-3'><p>{item.name}</p></div>
                    </Link>
                </SwiperSlide>
            </>
        )
    })

    return (
        <>
        <div className='container-fluid strip-bg pt-5 pb-5'>
            <h3 className='clr bold text-center'>OUR INDUSTRIES</h3>
            <div className='container pt-4'>
            <Swiper
                breakpoints= {{
                    480: {
                      slidesPerView: 1,
                      spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                      },
                    1120: {
                        slidesPerView: 3,
                        spaceBetween: 20
                      }
                }}
                modules={[Autoplay]}
                loop={true}
                autoplay={{delay: 4000,
                disableOnInteraction: false}}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="banner-section">
                {/* <SwiperSlide>
                    <img src={SliderImg} width="100%"></img>
                    <h1 style={{position:'relative', marginTop:'-100px', color:'#fff', textAlign:'center'}}>Be Connected</h1>
                </SwiperSlide> */}
                { industry_slider }
            </Swiper>
            </div>
        </div>
        </>
    )
}

export default NumberStrip
