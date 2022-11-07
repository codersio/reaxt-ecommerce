import React from "react";
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
// import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Singleproduct18() {
  return (
    <div className="container md:space-x-6 p-3 md:p-16 flex md:flex-row flex-col">
      <div className="item w-full md:w-[50%]">
        <Carousel>
          <img
            // className="w-[50%]"
            src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/product-img-4.jpg"
            alt=""
          />
        </Carousel>
      </div>
      <div className="item w-full md:w-[50%] ">
        <div className="body-cla space-y-7">
          <div className="title space-y-3">
            <h3 className="text-4xl font-[500]  text-[#282828]  font-[Poppins,sans-serif]">
              Wooden radio
            </h3>
            <div className="star  flex space-x-3 ">
              <div className="text-[0.8rem] space-x-2 text-black">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="rive text-slate-300">(32 reviews)</div>
            </div>
          </div>

          <div className="price">
            <h3>£93.00</h3>
          </div>
          <div className="desc text-slate-400 text-justify">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco ommodo
            consequat. Duis aute irure dolor in reprehenderit dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </div>
          <div className="cart">
            <div className=" qty w-full  flex space-x-2     ">
              <div className="w-[25%] md:w-[20%] text-gray-500 flex border    justify-between">
                <div className="item  text-[0.5rem] grid place-items-center   text-center p-2">
                  <FontAwesomeIcon className="h-[0.8rem]" icon={faAngleLeft} />
                </div>
                <div className="item grid place-items-center  flex-shrink text-sm  p-2  text-center">
                  2
                </div>
                <div className="item grid place-items-center  text-center p-2 text-[0.5rem]  ">
                  {" "}
                  <FontAwesomeIcon className="h-[0.8rem]" icon={faAngleRight} />
                </div>
              </div>
              <input
                type="button"
                value="ADD TO CART"
                className="font-[Poppins,sans-serif] w-[50%] md:w-[30%] p-3 bg-[#282828] text-center text-sm text-white"
              />
            </div>
          </div>
          <div className="wish flex space-x-2">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-xs text-slate-500 mt-1"
            />
            <p className="text-slate-500 text-sm font-semibold ">
              {" "}
              Add to Wishlist{" "}
            </p>
          </div>
          <div className="sk text-xs text-black font-[Poppins,sans-serif] font-thin  space-y-3">
            <p>SKU: 01</p>
            <p>Category: Wood </p>
            <p>Tag: Decorative</p>
          </div>

          <div className="tabs space-y-2">
            <ul
              class="flex mt-10 flex-row -mb-px text-sm font-medium "
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li class="mr-2" role="presentation">
                <button
                  class="font-[ sans] text-sm font-normal bg-gradient-to-r bg-gray-200 text-black  min-w-fit inline-block p-3 "
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
                  class="font-[ sans] text-sm font-normal bg-gray-200 text-black  min-w-fit inline-block p-3 "
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
                class="  bg-gray-50 rounded-lg dark:bg-gray-800"
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
    </div>
  );
}
