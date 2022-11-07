import React from "react";
// import Swiper from "swiper";
import "../../../Font/globalfont.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
export default function Lafakacategory({ Lafakadata }) {
  return (
    <div className=" font-Rubik lafaka-category px-[12rem] py-[3rem]">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {Lafakadata.category.map((i) => (
          <SwiperSlide>
            <div className="lafacat-item rounded-lg w-[14rem] duration-700 hover:shadow-lg p-3">
              <div className="image">
                <img
                  className=" m-auto block rounded-lg"
                  src={i.image}
                  alt=""
                />
              </div>
              <h3 className=" text-[13px] text-[#22272d] font-[600] text-center uppercase">
                {i.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
