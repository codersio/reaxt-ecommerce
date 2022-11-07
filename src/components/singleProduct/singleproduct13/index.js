import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Singleproduct13() {
  return (
    <div className="container p-5 md:p-16  bg-[#eff7fa] font-[Maven Pro', sans-serif]">
      <div className="contain-child md:flex md:space-x-11">
        <div className="row md:w-[50%] rounded-lg">
          <Carousel>
            <img
              src="https://klbtheme.com/groci/wp-content/uploads/2018/08/1-1-600x654.jpg"
              alt=""
            />
          </Carousel>
        </div>
        <div className="row md:w-[50%]">
          <div className="body-class ">
            <div className="ti-se space-y-3 bg-white p-5 rounded-lg shadow-md">
              <div className="offer font-semibold text-sm bg-[#f2fef2] text-center w-[25%]">
                <h3 className="text-[#51aa5e]">30% OFF</h3>
              </div>
              <h3 className="text-3xl text-thin text-black">
                Organic Broccoli
              </h3>

              <div className="price flex space-x-2 ">
                <div className="item text-lg text-blue-500 mt-3 ">
                  <s>£10.00</s>
                </div>
                <div className="item text-3xl font-semibold text-[#51aa5e]">
                  £7.00
                </div>
              </div>
              <div className="stk">
                <p>In Stock</p>
              </div>
              <div className="cart-qty">
                <input
                  type="number"
                  value="1"
                  className="
            border-2 border-[#ff8a4e]
            w-[13%]"
                />
                <input
                  type="button"
                  value="ADD TO CART"
                  className="w-[50%] md:w-[30%] p-[0.7rem] bg-gradient-to-r from-[#ff8a4e] text-sm text-white font-semibold to-[#ff6a5c]"
                />
              </div>
              <div className="ove-se bg-white p-5 rounded-lg border text-xl ">
                <div className="offer font-semibold ">
                  <h3 className="">Quick Overview</h3>
                </div>
                <div className="desc1 space-y-3 text-slate-400 text-sm leading-7">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    fringilla augue nec est tristique auctor. Donec non est at
                    libero vulputate rutrum.
                  </p>
                  <p>
                    Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                    luctus malesuada tincidunt. Class aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos hiMenaeos.
                    Integer enim purus, posuere at ultricies eu, placerat a
                    felis. Suspendisse aliquet urna pretium eros convallis
                    interdum.
                  </p>
                </div>
              </div>

              <div className="sku tex-sm">
                <h3 className="md:hidden block text-sm text-slate-400">
                  {" "}
                  <span className="text-[#ff8a4e]">SKU:</span> 9S3M4N{" "}
                  <span className="text-[#ff8a4e]">Categories:</span> Fruits &{" "}
                  <br />
                  Vegetables, Home & Kitchen
                </h3>
                <h3 className="md:block hidden text-sm text-slate-400">
                  {" "}
                  <span className="text-[#ff8a4e]">SKU:</span> 9S3M4N{" "}
                  <span className="text-[#ff8a4e]">Categories:</span> Fruits &{" "}
                  Vegetables, Home & Kitchen
                </h3>
              </div>

              <div className="dely">
                <h3 className="  text-black">Why shop from Groci?</h3>
              </div>
              <div className="md:flex font-[Maven pro,sans-serif] icon-del space-y-3 md:space-y-0 md:space-x-14  ">
                <div className="item flex space-x-3 ">
                  <p className="grid  text-white text-xl rounded-full place-items-center bg-[#23bd5b] w-[55px] h-[55px]">
                    I
                  </p>
                  <div className="tr mt-1">
                    <h3 className="text-[15px] text-[#17A2B8]">
                      Free Delivery
                    </h3>
                    <p className="text-[#888] text-[13px]">
                      Lorem ipsum dolor...
                    </p>
                  </div>
                </div>
                <div className="item flex space-x-3">
                  <p className="grid  text-white text-xl rounded-full place-items-center bg-[#23bd5b] w-[55px] h-[55px]">
                    I
                  </p>
                  <div className="tr mt-1">
                    <h3 className="text-[15px] text-[#17A2B8]">
                      Free Delivery
                    </h3>
                    <p className="text-[#888] text-[13px]">
                      Lorem ipsum dolor...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              class="font-[ sans] text-sm font-normal bg-gradient-to-r from-[#ff894f] to-[#ff685d] text-white  min-w-fit inline-block p-3 "
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
              class="font-[ sans] text-sm font-normal bg-[#1c2224] text-white  min-w-fit inline-block p-3 "
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
              consectetur nam perspiciatis porro iure, quis placeat quam tempore
              ratione sunt delectus nisi autem, et esse! Possimus ducimus
              quaerat vel cupiditate!
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
