import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa0,
  faGreaterThan,
  faChevronRight,
  faChevronLeft,
  faAngleRight,
  faAngleLeft,
  faLessThan,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Singleproduct6() {
  return (
    <div className="container p-6 ">
      <div className="container-chaild md:flex md:space-x-12">
        <div className="row md:w-[50%]">
          <Carousel showThumbs={false} showIndicators={false}>
            <img
              src="https://cdn.shopify.com/s/files/1/0267/5979/0615/products/shop-3_2000x.jpg?v=1589797640"
              alt=""
              srcset=""
            />
          </Carousel>
        </div>
        <div className="row md:w-[50%]">
          <div className="title-clas space-y-5">
            <h3 className=" font-[Nunito, sans-serif] text-4xl font-semibold space-x-2">
              Buldak
            </h3>
            <div className="star  flex space-x-3 ">
              <div className="text-[0.8rem] space-x-2 text-yellow-400">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="rive text-slate-300">(32 reviews)</div>
            </div>

            <p className="font-[Nunito, sans-serif] text-slate-600 leading-7 text-base">
              Nam tempus turpis at metus scelerisque placerat nulla deumantos
              solicitud felis. Pellentesque diam dolor, elementum etos lobortis
              des mollis ut risus. Sedcus faucibus an sullamcorper mattis
              drostique des commodo pharetras...
            </p>
          </div>

          <div className="">
            <div className="font-[Nunito, sans-serif] flex space-x-36 text-base text-black font-semibold mt-2">
              <p>Price:</p>
              <p>$286.00</p>
            </div>
            <div className=" font-[Nunito, sans-serif] flex space-x-36 text-base text-black font-semibold mt-2">
              <p>Type:</p>
              <p className="font-[Nunito, sans-serif] border border-black p-2 ml-[150px]">
                Non-Veg
              </p>
            </div>
            <div className="font-[Nunito, sans-serif] flex space-x-36  text-base text-black font-semibold mt-2">
              <p className="font-[Nunito, sans-serif]">Cuisi:</p>
              <p className="font-[Nunito, sans-serif] border border-black p-2">
                Korean
              </p>
            </div>
            <div className="flex space-x-36 text-base text-black font-semibold mt-2">
              <p>Meat:</p>
              <p className="border border-black p-2 ml-[150px]">Beef</p>
            </div>
            <div className="flex space-x-36 text-base text-black font-semibold mt-2">
              <p>Quan:</p>
              <div>
                <div className="  bg-white  bottom-2 w-[93%]    px-3 h-[30px] font-semibold  border   text-white   flex text-3xl shadow-2xl  leading-9   rounded-sm  text-center   ">
                  <div
                    className="  text-black w-[30px]  -m-[0.3rem]  cursor-pointer   bottom-4 text-[1.5rem] "
                    // style={{ marginTop: "-8px" }}
                  >
                    -
                  </div>
                  <div className=" border shrink block  w-16 text-black ">
                    <div className="block -m-[0.2rem] m-auto text-[1rem] font-medium ">
                      2
                    </div>
                  </div>{" "}
                  <div className="w-[30px]  text-black  disabled cursor-pointer font-semibold -m-[0.3rem] text-[22px]">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cart flex-row space-y-3 mt-10">
            <div className="md:flex md:space-x-3">
              <input
                type="button"
                className="font-[Nunito, sans-serif] bg-[#c00a27] w-[40%] md:w-[30%]  p-3 text-white font-semibold"
                value="ADD TO CART"
              />
              <input
                type="button"
                className="font-[Nunito, sans-serif] bg-[#c00a27] md:min-w-min w-[30%] p-3 text-white font-semibold"
                value="BUY IT NOW"
              />
            </div>
            <div></div>
            <div>
              <input
                type="button"
                className="font-[Nunito, sans-serif] bg-[#c00a27] md:w-[35%] w-[45%] p-3 text-white font-semibold"
                value="ADD TO WISHLIST"
              />
            </div>
          </div>

          <div className="share mt-3">
            <h3 className="font-[Nunito, sans-serif] text-base">
              Share with us :{" "}
            </h3>
          </div>
        </div>
      </div>
      <ul
        class="flex  md:flex-row flex-col -mb-px text-sm font-medium "
        id="myTab"
        data-tabs-toggle="#myTabContent"
        role="tablist"
      >
        <li class="mr-2" role="presentation">
          <button
            class="font-[Nunito, sans-serif] bg-[#c00a27] text-white text-base min-w-fit inline-block p-3  border-b-2"
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
            class="font-[Nunito, sans-serif] text-white text-base bg-[#c00a27] min-w-fit inline-block p-3  border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
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
            ratione sunt delectus nisi autem, et esse! Possimus ducimus quaerat
            vel cupiditate!
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
  );
}
