import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Singleproduct15() {
  return (
    <>
      <div className="container  p-5 relative ">
        <div className="row">
          <h3 className="font-[Inter, sans-serif] text-2xl font-semibold">
            USDA Choice Angus Beef Stew Meat
          </h3>
          <div className="star  flex space-x-3">
            <div className="text-3xl text-yellow-300">* * * *</div>
            <div className="rive text-slate-300">(32 reviews)</div>
          </div>
          <div className=" block m-auto">
            <Carousel autoPlay={true} showThumbs={false}>
              <img
                className="w-[50px]"
                src="https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-7-600x540.jpg"
                alt=""
                srcset=""
              />
              <img
                className="w-[50px]"
                src="https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-7-600x540.jpg"
                alt=""
                srcset=""
              />
            </Carousel>
          </div>
        </div>

        <div className="container-c2 flex  space-x-3 font-[Dosis, sans-serif]   p-3">
          <h3 className="text-xl font-[Dosis, sans-serif] text-slate-300  ">
            {" "}
            <s>$79.9</s>
          </h3>
          <h3 className=" text-[1.5rem] font-[Dosis,sans-serif] text-[#d51243]">
            $49.99
          </h3>
        </div>
        <div className="container-size  p-3 text-slate-600">
          <div className="w-[20%] text-center rounded-3xl bg-[#7bdcb5] p-1 text-sm text-green-600">
            InStock
          </div>
        </div>

        <div className="desc">
          <p className=" text-sm ">
            Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
            malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
          </p>
        </div>
        <div className="container-child  flex n space-x-8  p-2">
          <div className="item text-sm min-w-fit border p-2 rounded-2xl mt-2">
            {" "}
            ADD TO WISHLIST
          </div>
          <div className="item">
            <h3 className=" text-slate-400 mt-3">COMPARE</h3>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="">Category: Meats & Seafood</div>
      </div>
      <div className="cart-buttn flex  w-full shadow-md  text-center fixed bottom-0 ">
        <div className="wish bg-white flex-shrink text-black w-[50%] text-sm p-3  ">
          <button className="">ADD TO CART</button>
        </div>
        <div className="cart w-[50%] text-sm p-3 text-white rounded-sm bg-[#FB641B] text-center">
          <button className="">BUY NOW</button>
        </div>
      </div>
    </>
  );
}
