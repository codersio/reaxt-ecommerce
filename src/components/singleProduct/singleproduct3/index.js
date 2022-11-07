import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Singleproduct15() {
  const [location, setLocation] = useState(false);
  const handle = () => {
    setLocation(!location);
  };
  return (
    <>
      <div className="container  p-3 relative ">
        <div className="row space-y-1 shadow-md overflow-hidden">
          <div className="p-1">
            <h3 className="text-blue-600 ">Brand Denis Lingo</h3>
            <h3 className="text-sm  text-slate-400  ">
              {" "}
              Women Beautiful White Floral Zoom Friendly Collar
            </h3>
          </div>
          <div className=" block m-auto">
            <Carousel autoPlay={true} showThumbs={false}>
              <img
                className="w-[50px]"
                src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61T9OVexRwL._UX679_.jpg"
                alt=""
                srcset=""
              />
              <img
                className="w-[50px]"
                src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61lFYSIR-KL._UY741_.jpg"
                alt=""
                srcset=""
              />
            </Carousel>
          </div>
        </div>
        <div className="row    p-3 shadow-sm">
          <div className="color-w flex justify-between">
            <div className="item  text-base w-[70%]">
              <h3>Color : Green</h3>

              <div className="image flex p-1 space-x-2">
                <div className="i-p text-center space-y-1">
                  <div className="im w-[4rem] overflow-hidden h-[4rem] rounded-full border-2  border-red-900">
                    <img
                      className="w-[100%]  rounded-full "
                      src="https://m.media-amazon.com/images/I/41mBN0TqeWL._SR240,220_.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className=" text-xs">
                    {" "}
                    $78400 <br />{" "}
                    <span className=" text-slate-500">
                      {" "}
                      <s>$8988</s>
                    </span>
                  </h3>
                </div>

                <div className="i-p text-center space-y-1">
                  <div className="im w-[4rem] overflow-hidden h-[4rem] ">
                    <img
                      className="w-[4rem] h-[4rem] rounded-full "
                      src="https://m.media-amazon.com/images/I/51-PRdpNqcL._SR240,220_.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className=" text-xs">
                    {" "}
                    $78400 <br />{" "}
                    <span className=" text-slate-500">
                      {" "}
                      <s>$8988</s>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/* <div className="item text-xs text-slate-400 -m-2 ">
              Available color 2
            </div> */}
          </div>
          {/* 
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
          </div> */}
        </div>

        {/* <div className="container-c2  space-y-3   shadow-md p-3">
          <div className="flex justify-between">
            <div className="offer   text-black font-semibold text-xs ">
              All Offers & Coupones
            </div>
            <div className="offer text-xs font-medium text-slate-500">
              {">"}
            </div>
          </div>
        </div> */}
        <div className="container-size shadow-sm p-3 text-slate-600">
          <div className="size-ch flex justify-between">
            <div className="item">
              <label
                htmlFor=""
                className="text-sm font-semibold text-slate-600"
              >
                Size
              </label>
              <div className="product-size flex space-x-3">
                <div className=" hover:bg-black hover:text-white size w-[3rem] grid place-items-center rounded-md h-[3rem]   border">
                  xs
                </div>
                <div className="  hover:bg-black hover:text-white size w-[3rem] grid place-items-center rounded-md h-[3rem]   border">
                  xl
                </div>
                <div className="  hover:bg-black hover:text-white size w-[3rem] grid place-items-center rounded-md h-[3rem]   border">
                  m
                </div>
              </div>
            </div>
            {/* <div className="item text-sm text-blue-600">Size Chart</div> */}
          </div>
        </div>
        <div className="container-child   shadow-sm p-2">
          <span className="font-semibold">Fit</span> :{" "}
          <span className="text-blue-500 text-sm">
            True to size. Order usual size
          </span>
        </div>
        <div className="m-pr shadow-sm p-2 space-y-2">
          <h3 className="text-3xl text-red-500">
            -70% <span className="text-black">$740</span>
          </h3>
          <p className=" text-sm text-slate-400">
            M R P : <s>$2587</s>
          </p>
          <div className="taxs text-sm font-medium text-slate-600">
            <h3>Inclusive of all taxes</h3>
          </div>
        </div>

        <div className="contai-c-p p-2 shadow-md space-y-1">
          <h3 className="text-blue-500">
            FREE Delivery ,{" "}
            <span className=" font-semibold text-black">
              Sunday , September 4{" "}
              <span className="text-green-500 font-normal">
                Order within <span>4 hrs 34min</span>
              </span>
            </span>
          </h3>
          <h3 className="text-blue-400 text-sm" onClick={handle}>
            Select Delivery Location
          </h3>
          <div className="mt-8  space-y-2">
            <h3 className="text-green-600 font-semibold">InStock</h3>

            <select name="" id="" className="bg-white border p-1 shadow-md">
              <option value="">QTY: 1</option>
              <option value="">QTY: 2</option>
            </select>

            <div className="cart space-y-2 mt-6">
              <input
                type="button"
                value="Add to Cart"
                className="w-full bg-yellow-500 text-sm p-2 rounded"
              />
              <input
                type="button"
                value="Buy Now"
                className="w-full bg-yellow-600 text-sm p-2 rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={handle}
        className={
          location
            ? " w-[100%]  opacity-90 fixed bg-black top-0 bottom-0 h-full z-10 "
            : "hidden"
        }
      >
        <div className=" p-2 block  space-y-2 transition-all absolute bg-white  bottom-0">
          <h3 className="font-semibold">­ Choose your location</h3>
          <p className="text-sm">
            Select a delivery location to see product availability and delivery
            options
          </p>
          <input
            type="button"
            value="Sign in to see your address"
            className=" bg-yellow-500 text-sm p-2 w-full rounded-md"
          />
          <hr />
          <div className="text-sm text-blue-700 bg-white">
            <p>Enter an Indian pincode</p>
            <p>Use my current location</p>
          </div>
        </div>
      </div>
    </>
  );
}
