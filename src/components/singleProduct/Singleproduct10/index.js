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
export default function Singleproduct10() {
  return (
    <div className="container  bg-[#f3f3f3] p-16">
      <div className="container-child md:flex md:space-x-9">
        <div className="row md:w-[50%]">
          <Carousel>
            <img
              src="https://parkofideas.com/luchiana/demo/wp-content/uploads/2020/10/luchiana-3024294986.jpg"
              alt=""
              srcset=""
            />
            <img
              src="https://parkofideas.com/luchiana/demo/wp-content/uploads/2020/10/luchiana-3024294986.jpg"
              alt=""
              srcset=""
            />
          </Carousel>
          <div className="mt-6 p-5 hidden md:block">
            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
              <ul
                class="flex flex-wrap -mb-px text-sm font-medium text-center"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li class="mr-2" role="presentation">
                  <button
                    class="inline-block p-4 font-[jost] rounded-t-lg border-b text-black hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-black dark:border-yellow-500"
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
                    className=" font-[jost] inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-black dark:text-gray-400 border-gray-100 dark:border-gray-700"
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
                  lightweight with a comfortable elastic waist, the Easy Chino
                  Short was designed in a casual, relaxed fit that’s not too
                  short and not too long. Just pull on and go
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

        <div className="row md:w-[50%]">
          <div className="title p-5 ">
            <div className="item space-y-3 font-[jost] ">
              <h3 className="text-2xl tracking-wider text-slate-500">
                EXTRA LIP TINT
              </h3>
              <p className="text-slate-500 text-lg">
                Сolor-enhancing tint that brings out the best in lips.
              </p>
            </div>
            <div className="star  flex space-x-3 mt-8">
              <div className="text-[0.8rem] space-x-2 text-[#E4C1B1]">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="rive text-slate-300">(32 reviews)</div>
            </div>
          </div>
          <div className="pr-re  p-5">
            <div className="item font-[jost] ">
              <h3 className="text-2xl">$138.29</h3>
            </div>
          </div>
          <div className="p-5">
            <div className="view mt-5 bg-white p-5 md:flex">
              <div className=" qty md:w-[56%] w-[100%] flex  p-3 justify-between ">
                <div className="item md:border-black border text-3xl md:w-[39%]  w-[25%] text-center p-3">
                  -
                </div>
                <div className=" md:w-[58%] item bg-[#f3f3f3] flex-shrink text-2xl p-3 w-[95%] text-center">
                  2
                </div>
                <div className="item border md:border-black text-center p-3 text-3xl md:w-[38%] w-[25%]">
                  +
                </div>
              </div>
              <div className="p-3 w-[100%]">
                <input
                  type="button"
                  value="ADD TO CART"
                  className="w-full md:h-[90%] p-3 bg-black text-center text-sm text-white"
                />
              </div>
            </div>
          </div>
          <div className="wish flex space-x-2 mt-1 p-5 text-[#616161] text-xs font-[inter,sans-serif]">
            <FontAwesomeIcon icon={faHeart} className="text-xs " />
            <p className=" text-[#616161] text-xs font-[inter,sans-serif] font-semibold ">
              {" "}
              Add to Wishlist{" "}
            </p>
          </div>
          <div className="sk mt-1 text-[#616161] text-xs font-[inter,sans-serif] p-5">
            <div className="sku space-y-4">
              <h3>SKU: 6549845335</h3>
              <h3>CATEGORY: LIPS GLOSS</h3>
              <h3>TAGS: LIPS, TINT</h3>
            </div>
          </div>
          <div className="mt-6 p-5 block md:hidden">
            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
              <ul
                class="flex flex-wrap -mb-px text-sm font-medium text-center"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li class="mr-2" role="presentation">
                  <button
                    class="inline-block p-4 font-[jost] rounded-t-lg border-b text-black hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-black dark:border-yellow-500"
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
                    className=" font-[jost] inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-black dark:text-gray-400 border-gray-100 dark:border-gray-700"
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
                  lightweight with a comfortable elastic waist, the Easy Chino
                  Short was designed in a casual, relaxed fit that’s not too
                  short and not too long. Just pull on and go
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
