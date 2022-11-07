import React, { useState } from "react";
import PropTypes from "prop-types";
import "./electrox.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFillCartFill, BsPlus } from "react-icons/bs";
// import {  } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { TbArrowsLeftRight } from "react-icons/tb";
export default function Singleproduct9() {
  return (
    <div div className="font-electrox-theme-font">
      <div className="contaier px-[9rem] p-4 flex md:space-x-6 font-electrox-theme-font">
        <div className="row w-[60%]">
          <Carousel showStatus={false} axis="vertical">
            <img
              src="https://cdn.shopify.com/s/files/1/0265/3493/6627/products/ipadgreen.png?v=1649393790"
              alt=""
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0265/3493/6627/products/ipadgreen.png?v=1649393790"
              alt=""
            />
          </Carousel>
        </div>
        <div className="row w-[50%]">
          <div className="title">
            <h3 className="text-electrox-theme-category-color text-[12px]">
              Bulgari
            </h3>
            <h3 className="text-electrox-theme-title-color text-[24px]">
              Faxtex Product Sample
            </h3>
          </div>
          <div className="flex">
            <div className="star  flex space-x-3 ">
              <div className="text-[0.8rem] space-x-1 text-yellow-400">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="rive text-slate-300">(32 reviews)</div>
            </div>
          </div>
          <div className="share flex space-x-3 mt-3">
            <div
              className="f-share rounded-sm  bg-[#3b5998] h-[2rem] 
           text-white text-[14px] w-[19%] grid place-items-center"
            >
              <div className="flex space-x-1">
                <div className="grid place-items-center">
                  <FaFacebookF />
                </div>{" "}
                <h3>Share</h3>
              </div>
            </div>
            <div
              className="f-share rounded-sm  bg-[#1da1f2] h-[2rem] 
           text-white text-[14px] w-[19%] grid place-items-center"
            >
              <div className="flex space-x-1">
                <div className="grid place-items-center">
                  <AiOutlineTwitter />
                </div>{" "}
                <h3>Tweet</h3>
              </div>
            </div>
          </div>
          <div className="sku mt-3">
            <h3 className="text-electrox-theme-default-title-color text-sm text-[13px]">
              Product SKU: 4827521
            </h3>
          </div>
          <hr className="mt-4" />

          <div className="desc space-y-1 text-[14px] text-electrox-theme-default-title-color mt-3">
            <li className="">Accept SIM card and call</li>
            <li>Take photos</li>
            <li>Make calling instead of mobile phone</li>
            <li>Sync music play and sync control music</li>
            <li>Sync Facebook,Twitter,email and calendar</li>
          </div>
          <hr className="mt-4" />

          <div className="ith mt-4">
            <h3 className=" text-electrox-theme-title-color text-[14px]">
              <span className="font-semibold text-electrox-theme-title-color flex space-x-3">
                <div className="grid place-items-center">
                  <BsFillCartFill className="text-[#fed700] text-[2rem] animate-bounce" />
                </div>{" "}
                <h3>
                  {" "}
                  Other people want this.{" "}
                  <span className="font-[400]">
                    1 people have this in their carts right
                  </span>
                  now.
                </h3>
              </span>{" "}
            </h3>
          </div>
          <div className="ith mt-4">
            <h3 className=" text-electrox-theme-title-color">
              <span>Want it delivered by</span>
              <span className="font-semibold text-electrox-theme-title-color">
                Saturday, 3 September
              </span>
            </h3>
          </div>
          <div className="ut mt-4">
            <h3 className="text-electrox-theme-title-color">
              Order until{" "}
              <span className="text-electrox-theme-default-icondeliverytime-color font-[500]">
                14:00 tomorrow
              </span>
            </h3>
          </div>
        </div>

        <div className="row w-[40%]">
          <div className="  stk border-2 p-5 rounded-2xl mt-4">
            <h3 className="text-electrox-theme-title-color">
              Available:{" "}
              <span className="text-electrox-theme-stockitem-color">
                In stock
              </span>
            </h3>
            <hr className="mt-4" />

            <h3 className="mt-4 text-3xl font-sans text-electrox-theme-price-color">
              $110.00
            </h3>
            <p className="text-electrox-theme-mrp-color text-sm">
              {" "}
              <s> $199.00</s>
            </p>
            <h3 className="mt-3 text-electrox-theme-title-color text-[14px] font-[400]">
              SIZE
            </h3>
            <div className="siz flex text-electrox-theme-title-color space-x-3 mt-2">
              <div
                className="s border w-[35px]
               h-[35px] grid place-items-center  rounded-full border-yellow-400"
              >
                <h3>M</h3>
              </div>
              <div
                className="s border w-[35px]
               h-[35px] grid place-items-center  rounded-full border-yellow-400"
              >
                l
              </div>
              <div
                className="s border w-[35px]
               h-[35px] grid place-items-center  rounded-full border-yellow-400"
              >
                x
              </div>
            </div>
            <h3 className="mt-3 text-electrox-theme-title-color text-[14px] font-[400]">
              color
            </h3>
            <div className="color flex space-x-2 mt-2">
              <div className="s border w-[35px] h-[35px] text-center leading-[3rem] rounded-full bg-green-500"></div>
              <div className="s border w-[35px] h-[35px] text-center leading-[3rem] rounded-full bg-red-500"></div>
              <div className="s border w-[35px] h-[35px] text-center leading-[3rem] rounded-full bg-slate-500"></div>
            </div>
            <h3 className="mt-4 text-electrox-theme-title-color text-[14px] font-[400]">
              Quantity
            </h3>

            <div
              className="mt-2 pl-[1rem] 
                pr-[1rem] text-slate-500 rounded-3xl qty flex border
                 border-electrox-theme-border-color space-x-3 w-[50%] border-slate-500   p-[0.3rem]"
            >
              <div
                className="item  flex-glow 
                  text-[1.2rem] mt-[0.2rem] w-[85%] text-electrox-theme-button-qty-text-color"
              >
                1
              </div>
              <div className="item grid place-items-center text-2xl text-electrox-theme-button-qty-text-color">
                <div className="bg-electrox-theme-default-bg-color w-[20px] grid place-items-center text-[16px] rounded-full h-[20px]">
                  <BsPlus />
                </div>
              </div>
              <div className="item grid place-items-center text-2xl text-electrox-theme-button-qty-text-color">
                <div className="bg-electrox-theme-default-bg-color w-[20px] grid place-items-center text-[16px] rounded-full h-[20px]">
                  <BiMinus />
                </div>
              </div>
            </div>
            <div className="mt-4 cart space-y-3">
              <input
                type="button"
                value="ADD TO CART"
                className=" w-full p-3 rounded-3xl bg-electrox-theme-cartbutton-bg-color text-center text-sm text-electrox-theme-cart-title-color font-semibold"
              />
              <input
                type="button"
                value="ADD TO CART"
                className=" w-full p-3 rounded-3xl 
                bg-electrox-theme-buynow-bg-color text-center text-sm text-electrox-theme-buynow-title-color font-semibold"
              />
            </div>
            <div className="w flex space-x-7 mt-3">
              <div className="item flex space-x-1 text-[14px] text-electrox-theme-default-title-color">
                <div className="grid place-items-center">
                  <FiHeart />
                </div>{" "}
                <h3>Wishlist</h3>
              </div>
              <div className="item flex space-x-1 text-[14px] text-electrox-theme-default-title-color">
                <div className="grid place-items-center">
                  <TbArrowsLeftRight />
                </div>{" "}
                <h3>Compare</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 px-[9rem] ">
        <div class="text-electrox-theme-title-color  border-gray-200 dark:border-gray-700">
          <ul
            class="flex text-[18px] capitalize flex-wrap -mb-px text-sm font-medium justify-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class="inline-block p-4  rounded-t-lg border-b-2 text-black hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-yellow-500 dark:border-yellow-500"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="true"
              >
                Description
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                className="  inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-black dark:text-gray-400 border-gray-100 dark:border-gray-700"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Review
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent " className="border rounded-2xl text-[14px]">
          <div
            class="p-4 bg-gray-50 rounded-lg "
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p class="text-base text-electrox-theme-title-color">
              Finding the right short can be hard—we made it easy. Super
              lightweight with a comfortable elastic waist, the Easy Chino Short
              was designed in a casual, relaxed fit that’s not too short and not
              too long. Just pull on and go
            </p>
          </div>
          <div
            class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong class="font-medium text-gray-800 dark:text-white">
                Dashboard tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
