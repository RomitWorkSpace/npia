import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import SliderImg1 from 'imgPath/sliders/Slider-1.jpg';
import SliderImg2 from 'imgPath/sliders/Slider-2.jpg';
import SliderImg3 from 'imgPath/sliders/Slider-3.jpg';
import SliderImg4 from 'imgPath/sliders/Slider-4.jpg';

function DesktopSlider() {
    return (
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
                <SwiperSlide><img src={SliderImg1} width="100%"></img></SwiperSlide>
                <SwiperSlide><img src={SliderImg2} width="100%"></img></SwiperSlide>
                <SwiperSlide><img src={SliderImg3} width="100%"></img></SwiperSlide>
                <SwiperSlide><img src={SliderImg4} width="100%"></img></SwiperSlide>
            </Swiper>
            </div>
        </>
    )
}

export default DesktopSlider
