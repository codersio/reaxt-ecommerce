import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import Lafakanavbar from "../../Navbarcomponent/lafaka";


export default function Lafakaslider(){
    return   <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper relative"
      >
        <SwiperSlide className=" grid place-items-center w-[100vw] h-[100vh] bg-cover bg-no-repeat bg-center bg-[url('https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/yellow-lafka-hero-back.jpg?id=5617')]
        ">
<div className="row flex space-x-6 mt-[5rem]">
    <div className="item grid place-items-center">
 <div className="text-center">   <h3 className="text-[58px] font-[700] text-white">SAVIN' CRAVIN'</h3>
<h3 className="text-[70px] font-[700] text-white">COMBO MEALS</h3>
<p className="text-[19px] text-white">Get a Meal and SAVE up to 30% on Sides & Drinks</p></div>
</div>
    <div className="item grid place-items-center">
<img src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/burger-combo-slide-final.png" alt="" />
</div>
</div>
        </SwiperSlide>
        <SwiperSlide className=" grid place-items-center w-[100vw] h-[100vh] bg-cover bg-no-repeat bg-center 
        bg-[url('https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/red-hero-back-home.jpg?id=5681')]
        ">
<div className="row flex space-x-6 mt-[5rem]">
    <div className="item grid place-items-center">
 <div className="text-center">   <h3 className="text-[58px] font-[700] text-white">SAVIN' CRAVIN'</h3>
<h3 className="text-[70px] font-[700] text-white">COMBO MEALS</h3>
<p className="text-[19px] text-white">Get a Meal and SAVE up to 30% on Sides & Drinks</p></div>
</div>
    <div className="item grid place-items-center">
<img src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/build-burger-slide-final.png" alt="" />
</div>
</div>
        </SwiperSlide>
      
            <div className="absolute top-0 z-[1] right-0 left-0">
<Lafakanavbar/>
      </div>
      </Swiper>

    </div>
}