import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Singleproduct12() {
  return (
    <div className="container p-4 ">
      <Carousel>
        <img
          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-2.jpg"
          alt=""
        />
      </Carousel>
      <div className="body-class space-y-4">
        <div className="title space-y-3">
          <h3 className="text-3xl  font-[600] font-[Quicksand, sans-serif] text-[#282828]">
            Seeds of Change Organic Quinoa, Brown
          </h3>
          <div className="star  flex space-x-3">
            <div className="text-3xl text-yellow-300">* * * *</div>
            <div className="rive text-slate-300">(32 reviews)</div>
          </div>

          <div className="price flex space-x-5">
            <div className="item font-[Quicksand, sans-serif] text-[#3BB77E] font-bold text-[58px] ">
              $38
            </div>
            <div className="item text-xs text-yellow-400 mt-6">
              26% Off <br />{" "}
              <span className="text-3xl text-slate-400 font-[Quicksand, sans-serif] font-semibold">
                {" "}
                $52
              </span>
            </div>
          </div>
        </div>

        <div className="desc">
          <p className="text-base text-slate-400 leading-8">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco ommodo
            consequat. Duis aute irure dolor in reprehenderit dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>

        <div className="size-s flex space-x-16">
          <div className="item font-semibold text-slate-400">
            Size / <br /> Weight:
          </div>
          <div className="item space-x-3 flex w-[80%]">
            <div className="hover:bg-[#3BB77E]  w-[40px] h-[40px] grid place-items-center rounded-md hover:text-white text-slate-500 text-center">
              50g
            </div>
            <div className="hover:bg-[#3BB77E]  w-[40px] h-[40px] grid place-items-center rounded-md hover:text-white text-slate-500 text-center">
              50g
            </div>
            <div className="hover:bg-[#3BB77E]  w-[40px] h-[40px] grid place-items-center rounded-md hover:text-white text-slate-500 text-center">
              50g
            </div>
            <div className="hover:bg-[#3BB77E]  w-[40px] h-[40px] grid place-items-center  rounded-md hover:text-white text-slate-500 text-center">
              50g
            </div>
          </div>
        </div>
        <div className="cart-qty flex space-x-3">
          <div
            className="qty p-1 
             flex space-x-8 border w-[20%] "
          >
            <div className="num mt-3 ml-1">1</div>
            <div className="aar">
              <div className="l-arrow">{"<"}</div>

              <div className="r-arrow">{">"}</div>
            </div>
          </div>
          <input
            type="button"
            value="ADD TO CART"
            className=" text-sm font-semibold
            bg-[#3BB77E] rounded-md w-[35%] p-3 text-[#fff]"
          />
          <input
            type="button"
            value="W"
            className="rounded-md text-sm font-semibold
            border-slate-400 border w-[15%] p-3 text-[#3BB77E]"
          />
          <input
            type="button"
            value="W"
            className="rounded-md text-sm font-semibold
            border-slate-400 border w-[15%] p-3 text-[#3BB77E]"
          />
        </div>
        <div className="wish text-slate-500 text-sm">
          {/* <p> Add to Wishlist </p> */}
        </div>

        <div className="sk flex space-x-20 text-slate-400 text-sm ">
          <div className="item space-y-2">
            <p>
              SKU: <span className="text-[#3BB77E]">01</span>
            </p>
            <p>
              Category: <span className="text-[#3BB77E]">Wood</span>
            </p>
            <p>
              Tag: <span className="text-[#3BB77E]">Decorative</span>
            </p>
          </div>
          <div className="item space-y-2">
            <p>
              SKU: <span className="text-[#3BB77E]">01</span>
            </p>
            <p>
              Category: <span className="text-[#3BB77E]">Wood</span>
            </p>
            <p>
              Tag: <span className="text-[#3BB77E]">Decorative</span>
            </p>
          </div>
        </div>

        <div className="tabs">
          <ul
            class="flex mt-10 flex-row -mb-px text-sm font-medium "
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class="font-[ sans] text-sm font-normal rounded-3xl border border-slate-300 text-[#3BB77E]  min-w-fit inline-block p-3 "
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                PRODUCT DESCRIPTION
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                class="font-[ sans] text-sm font-normal rounded-3xl border border-slate-300 text-black  min-w-fit inline-block p-3 "
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                REVIEWS
              </button>
            </li>
          </ul>
          <div id="myTabContent">
            <div
              class=" p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <p class="font-[Nunito, sans-serif] text-base text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                consectetur nam perspiciatis porro iure, quis placeat quam
                tempore ratione sunt delectus nisi autem, et esse! Possimus
                ducimus quaerat vel cupiditate!
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
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
