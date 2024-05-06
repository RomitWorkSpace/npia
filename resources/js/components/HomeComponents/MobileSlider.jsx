import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import topBanner1 from 'imgPath/sliders/Mobile-Slider-1.jpg';
import topBanner2 from 'imgPath/sliders/Mobile-Slider-2.jpg';
import topBanner3 from 'imgPath/sliders/Mobile-Slider-3.jpg';
import topBanner4 from 'imgPath/sliders/Mobile-Slider-4.jpg';


export default function MobileSlider(){
    return(
        <>
            <div className="container-fluid p-0">
        <Swiper
                slidesPerView={1}
                effect={'fade'}
                modules={[Pagination, Autoplay, EffectFade]}
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
                <SwiperSlide><img src={topBanner1} width="100%"></img></SwiperSlide>
                <SwiperSlide><img src={topBanner2} width="100%"></img></SwiperSlide>
                <SwiperSlide><img src={topBanner3} width="100%"></img></SwiperSlide>
                <SwiperSlide><img src={topBanner4} width="100%"></img></SwiperSlide>
            </Swiper>
            </div>
        </>
    );
}