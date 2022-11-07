import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faAddressBook,
  faAirFreshener,
  faAmbulance,
  faAtom,
  faBus,
  faCoins,
  faDice,
} from "@fortawesome/free-solid-svg-icons";

export default function Singleproduct5() {
  return (
    <div className="container p-6 ">
      <Carousel>
        <img
          src="https://cdn.shopify.com/s/files/1/0415/5382/1854/products/24_1400x.jpg?v=1595838684"
          alt=""
          srcset=""
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0415/5382/1854/products/25_1200x.jpg?v=1595838684"
          alt=""
          srcset=""
        />
      </Carousel>
      <div className="title-clas ">
        <h3 className=" font-[open-sans] text-3xl space-x-2">
          Chino Short{" "}
          <span className=" absolute ml-2 bg-red-500 text-sm text-white w-[3rem] font-semibold  p-1  text-center -mt-2 ">
            SALE
          </span>
        </h3>
      </div>
      <div className="price-class mt-3">
        <h3 className="text-[#b7813b] font-bold text-2xl font-[Frank]">
          $50.00{" "}
          <span className=" text-sm text-black">
            {" "}
            <s>$80.00</s>
            {/* <FontAwesomeIcon icon={faCoffee} size="1x" /> */}
          </span>{" "}
        </h3>
      </div>
      <div className="qty-class mt-10 space-y-3">
        <input
          type="number"
          className="border-b border-t-0 border-r-0 border-l-0 border-black  w-[35%]"
          name=""
          value="2"
          id=""
        />

        <div className="cart space-y-3">
          <input
            type="button"
            value="ADD TO CART"
            className=" text-white p-3 w-full text-sm font-semibold bg-[#262613]"
          />

          <input
            type="button"
            value="BUY NOW"
            className=" text-white p-3 w-full text-sm font-semibold bg-[#c99a5c]"
          />
        </div>
      </div>
      <hr className="border-slate-500 mt-6 " />
      <div className="wish-s flex text-sm space-x-5 mt-3 text-black">
        <div className="item">
          <h3>ADD TO WISHLIST</h3>
        </div>
        <div className="item">
          <h3 className="ml-20">SIZE GUIDE</h3>
        </div>
      </div>

      <div className="">
        <div className="flex space-x-4 text-xs text-slate-500 mt-2">
          <p>VENDOR:</p>
          <p>PARTNERS-DEMO</p>
        </div>
        <div className="flex space-x-4 text-xs text-slate-500 mt-2">
          <p>SKU:NULL</p>
          <p>NULL</p>
        </div>
        <div className="flex space-x-4 text-xs text-slate-500 mt-2">
          <p>AVAILABLE:</p>
          <p>AVAILABLE</p>
        </div>
      </div>

      <div className="pro-see bg-[#343a40] text-white mt-4 text-sm p-2 text-center">
        Currently there are 12 peoples are currently
      </div>

      <div className="mt-6">
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class="inline-block p-4 font-[open-sans] rounded-t-lg border-b-2 text-slate-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-yellow-500 dark:border-yellow-500"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="true"
              >
                DESCRIPTION
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                className=" font-[open-sans] inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                REVIEW
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p class="text-base text-gray-500 dark:text-gray-400">
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
