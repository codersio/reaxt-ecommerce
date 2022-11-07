import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Singleproduct2() {
  return (
    <>
      <div className="container  p-3 relative ">
        <div className="row">
          <div className=" block m-auto">
            <Carousel autoPlay={true} showThumbs={false}>
              <img
                className="w-[50px]"
                src="https://rukminim1.flixcart.com/image/832/832/jvtujrk0/t-shirt/a/g/f/l-8938267-roadster-original-imafgn8grewzy9tf.jpeg?q=70"
                alt=""
                srcset=""
              />
              <img
                className="w-[50px]"
                src="https://rukminim1.flixcart.com/image/832/832/jvtujrk0/t-shirt/a/g/f/l-8938267-roadster-original-imafgn8ggthnag9t.jpeg?q=70"
                alt=""
                srcset=""
              />
            </Carousel>
          </div>
        </div>
        <div className="row    p-3 shadow-md">
          <div className="color-w flex justify-between">
            <div className="item  text-base w-[70%]">
              <h3>Color : Grey Lt</h3>

              <div className="image flex p-1 space-x-2">
                <img
                  className="w-[20%]"
                  src="https://rukminim1.flixcart.com/image/832/832/jvtujrk0/t-shirt/a/g/f/l-8938267-roadster-original-imafgn8ggthnag9t.jpeg?q=70"
                  alt=""
                />
                <img
                  className="w-[20%]"
                  src="https://rukminim1.flixcart.com/image/832/832/jvtujrk0/t-shirt/a/g/f/l-8938267-roadster-original-imafgn8grewzy9tf.jpeg?q=70"
                  alt=""
                />
              </div>
            </div>
            <div className="item text-xs text-slate-400 -m-2 ">
              Available color 2
            </div>
          </div>
          <h3 className="text-slate-600 font-semibold">Roadstar</h3>
          <h3 className="text-sm  text-slate-400  ">
            {" "}
            Women Beautiful White Floral Zoom Friendly Collar
          </h3>
          <div className="price-offer flex  space-x-3">
            <div className="item font-semibold text-sm text-slate-500 mt-2">
              <s>$909</s>{" "}
            </div>
            <div className="item text-lg text-black ">
              <span className=""> $200 </span>{" "}
              <span className="text-green-500 font-normal text-sm">
                30% OFF
              </span>
            </div>
          </div>
          <div className="fdel flex space-x-2 mt-2">
            <div className="item">
              <h3>ICON</h3>
            </div>
            <div className="item text-sm">FREE delivery on order over $499</div>
          </div>
          <div className="flex space-x-2  mt-2">
            <div className="offer  bg-green-600 w-9 rounded-md text-white font-semibold text-xs p-1">
              3.9 *
            </div>
            <div className="mt-1 offer text-xs font-medium text-slate-500">
              Good | 4.481 rating
            </div>
          </div>
        </div>

        <div className="container-c2  space-y-3   shadow-md p-3">
          <div className="flex justify-between">
            <div className="offer   text-black font-semibold text-xs ">
              All Offers & Coupones
            </div>
            <div className="offer text-xs font-medium text-slate-500">
              {">"}
            </div>
          </div>
        </div>
        <div className="container-size shadow-md p-3 text-slate-600">
          <div className="size-ch flex justify-between">
            <div className="item">
              <label
                htmlFor=""
                className="text-sm font-semibold text-slate-600"
              >
                Size
              </label>
              <div className="product-size flex space-x-3">
                <div className="size w-[4rem] grid place-items-center rounded-md h-[2rem]   border">
                  xs
                </div>
                <div className="size w-[4rem] grid place-items-center rounded-md h-[2rem]   border">
                  xl
                </div>
                <div className="size w-[4rem] grid place-items-center rounded-md h-[2rem]   border">
                  m
                </div>
              </div>
            </div>
            <div className="item text-sm text-blue-600">Size Chart</div>
          </div>
        </div>
        <div className="container-child  flex justify-between space-x-2 shadow-md p-2">
          <div className="item text-xs w-[90%] flex-shrink mt-2">
            {" "}
            Find seller that delivery you
          </div>
          <div className="item">
            {" "}
            <input
              type="text"
              placeholder="Enter a PIN code"
              name=""
              className="w-[100%] border p-2 text-xs text-center placeholder-blue-800 "
              id=""
            />
          </div>
        </div>
        <div className="h-[2rem] w-[100%]"></div>
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
