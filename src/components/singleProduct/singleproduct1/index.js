import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Singleproduct1() {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className=" block m-auto">
            <Carousel autoPlay={true} showThumbs={false}>
              <img
                className="w-[50px]"
                src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18076484/2022/5/14/fd85e8cd-9860-409c-92fe-aab4f69d32881652524689380-Athena-Women-White--Blue-Floral-Printed-A-Line-Midi-Dress-73-1.jpg"
                alt=""
                srcset=""
              />
              <img
                className="w-[50px]"
                src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18076484/2022/5/14/74828697-281c-45e0-908d-a820722d46461652524689370-Athena-Women-White--Blue-Floral-Printed-A-Line-Midi-Dress-73-2.jpg"
                alt=""
                srcset=""
              />
            </Carousel>
          </div>
        </div>
        <div className="row  space-x-3 p-3 shadow-md">
          <h3 className="text-sm  text-slate-400  ">
            {" "}
            Women Beautiful White Floral Zoom Friendly Collar
          </h3>
          <div className="price-offer flex  space-x-3">
            <div className="item font-semibold text-slate-600 ">$ 909</div>
            <div className="item text-xs text-slate-400 mt-1">
              <span className="">
                {" "}
                MRP <s>$909</s>{" "}
              </span>{" "}
              <span className="text-red-500 font-medium">(30% OFF)</span>
            </div>
          </div>
          <div className="taxs text-sm font-medium text-green-600">
            <h3>Inclusive of all taxes</h3>
          </div>
        </div>
        <div className="container-child shadow-md p-3">
          <label className="text-xs font-semibold text-slate-600" htmlFor="">
            CHECK DELIVERY & SERVICES
          </label>
          <input
            type="text"
            placeholder="Enter a PIN code"
            name=""
            className="w-full border p-2 text-xs"
            id=""
          />
          <div className="desc text-xs space-y-1 mt-5 text-slate-500">
            <p>Pay on delivery might be available</p>
            <p>Easy 30days return and exchanges</p>
            <p>Lorem ipsum dolor sit amet. </p>
          </div>
        </div>
        <div className="container-c2  space-y-3   shadow-md p-3">
          <div className="flex space-x-4">
            <div className="offer  bg-green-600 w-11 text-white font-semibold text-xs p-1">
              OFFER
            </div>
            <div className="offer text-xs font-medium text-slate-500">
              Flat 2000 off + free shipping on first order
            </div>
          </div>
          <div className=" offer-coup flex space-x-4">
            <div className="item">ICON</div>
            <div className="item text-xs font-medium text-slate-500">
              <p>
                Applicable on Your first order <br />
                use code: WRT4532
              </p>
            </div>
          </div>
        </div>
        <div className="container-size shadow-md p-3 text-slate-600">
          <label htmlFor="" className="text-xs font-semibold text-slate-600">
            select size
          </label>
          <div className="product-size flex space-x-3">
            <div className="size w-[3rem] rounded-full h-[3rem] leading-[0.7rem] p-[1rem] border">
              xs
            </div>
            <div className="size w-[3rem] rounded-full h-[3rem] leading-[0.7rem] p-[1rem] border">
              xl
            </div>
            <div className="size w-[3rem] rounded-full h-[3rem] leading-[0.7rem] p-[1rem] border">
              m
            </div>
          </div>
        </div>
        <div className="product-details container-size shadow-md p-3 text-slate-600">
          <label htmlFor="" className="text-xs font-semibold text-slate-600">
            Product Details
          </label>
          <h3 className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            nihil!
          </h3>
          <div className="text-xs text-slate-600 p-5 space-y-1">
            <ul>
              <li className="list-disc">Brand logo printed</li>
              <li className="list-disc">Regular length</li>
              <li className="list-disc">Round neck.</li>
              <li className="list-disc">Sort regular selves.</li>
            </ul>
          </div>
          <div className="space-y-1">
            <h3 className="text-xs">Model Size & Fit</h3>
            <h3 className="text-xs">Regular Fit</h3>
            <h3 className="text-xs">Regular Lenght</h3>
            <h3 className="text-xs">Short Regular Selvet</h3>
            <h3 className="text-xs">Model Size & Fit</h3>
          </div>
        </div>

        <div className="product-ql shadow-md p-3 flex text-xs text-center justify-center space-x-4 text-slate-600 font-semibold">
          <div className="item">Genuine Products</div>
          <div className="item">7 Step Qualitu check</div>
          <div className="item">Secure payment</div>
        </div>
        <div className="cart-buttn flex p-3 shadow-md space-x-2 text-center">
          <div className="wish flex-shrink text-black w-[45%] text-sm p-1 border border-slate-400">
            <button>Wishlist</button>
          </div>
          <div className="cart w-[80%] text-sm p-1 text-white rounded-sm bg-pink-700 text-center">
            <button className="">Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
