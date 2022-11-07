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
  faClock,
} from "@fortawesome/free-solid-svg-icons";
export default function Singleproduct16() {
  return (
    <div className="container  p-9">
      <div className="container-child md:flex md:space-x-14">
        <div className="row md:w-[50%]">
          <Carousel>
            <img
              src="https://cdn.shopify.com/s/files/1/0560/9393/3729/products/17_ab1e15c8-0313-479d-b332-7e84bc508ad9_1120x.jpg?v=1620893526"
              alt=""
              srcset=""
            />
            <img
              src="https://parkofideas.com/luchiana/demo/wp-content/uploads/2020/10/luchiana-3024294986.jpg"
              alt=""
              srcset=""
            />
          </Carousel>
        </div>

        <div className="row md:w-[50%]">
          <div className="title p-5 ">
            <div className="item space-y-3  ">
              <h3 className="text-2xl font-[Josefin Sans, sans-serif] font-[700] tracking-wider text-[#222]">
                Brow Guru Clear Control Gel
              </h3>
            </div>
          </div>
          <div className="pr-re  p-5">
            <div className="item font-[Josefin Sans, sans-serif]  space-x-5 flex">
              <h3 className="text-lg font-semibold">$138.29</h3>
              <div className="r flex space-x-3">
                <div className="star mt-1 flex space-x-1 text-xs">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className="text-xs">(5 review)</p>
              </div>
            </div>
          </div>
          <div className="desc text-[#494949] leading-[1.5rem] p-5 font-[Josefin Sans, sans-serif] md:text-[18px] text-xs leading-6">
            Captivate with this shirt’s versatile urban look that works as well
            at happy hour as it does in the back yard. The real mother of pearl
            buttons and embroidered crocodile...
          </div>
          <div className="sk  p-5 font-[Josefin Sans, sans-serif]">
            <table className="w-full text-base space-y-3">
              <tr>
                <td className="w-[20%] text-xs ">
                  <h3 className="md:-mt-2 -mt-8">TAGS:</h3>
                </td>
                <td>
                  $101 - $200, Acessories, Makeup, Men, Police, Vendor Levi's,
                  Women
                </td>
              </tr>
              <div className="h-2"></div>
              <tr className="mt-9">
                <td className="w-[20%] text-xs ">
                  <h3 className="">SKU:</h3>
                </td>
                <td className="text-red-600 font-semibold text-sm">
                  YX135-01{" "}
                </td>
              </tr>
              <div className="h-2"></div>
              <tr className="mt-9">
                <td className="w-[20%] text-xs ">
                  <h3 className="">CATE:</h3>
                </td>
                <td className=" font-semibold text-sm">
                  New Arrivals, Shop Makeup{" "}
                </td>
              </tr>
            </table>
            <div className="note space-y-3">
              <p className="text-slate-500 text-sm mt-5">NOTES</p>
              <textarea
                cols="30"
                className="w-full bg-[#f5f5f5] text-slate-400"
                rows="3"
              >
                Write here your Notes
              </textarea>
            </div>
            {/* <div className="sku space-y-4 font-[Josefin Sans, sans-serif] text-sm">
          <h3>
            TAGS: <span className="ml-12">$101 - $200, Acessories</span>
          </h3>
          <h3>
            SKU: <span className="ml-12 text-red-600">YX135-01</span>
          </h3>
          <h3>
            CATEGORY: <span className="ml-12 ">New Arrivals</span>
          </h3>
        </div> */}
          </div>
          <div className="p-5 ">
            <div className="view  mt-5 bg-white  ">
              <div className=" qty w-full flex space-x-2    justify-between ">
                <div className=" w-full md:w-[30%] flex    justify-between">
                  <div className="item border text-3xl  w-[25%] text-center p-3">
                    -
                  </div>
                  <div className="item bg-[#f3f3f3] flex-shrink text-xl p-3 w-[95%] text-center">
                    2
                  </div>
                  <div className="item border text-center p-3 text-2xl w-[25%]">
                    +
                  </div>
                </div>
                <input
                  type="button"
                  value="ADD TO CART"
                  className=" w-full md:w-[80%] p-3 bg-[#f3f3f3] text-center text-sm text-black"
                />
              </div>

              <div className="mt-3">
                <input
                  type="button"
                  value="ADD TO CART"
                  className="w-full p-3 bg-[#222] font-semibold text-center text-sm text-white"
                />
              </div>
            </div>
            <div className="chek space-y-3">
              <h3 className="text-slate-600 text-sm font-semibold mt-3">
                GUARANTEED SAFE CHECKOUT:
              </h3>
              <img
                src="https://cdn.shopify.com/s/files/1/0560/9393/3729/files/payment_700x.png?v=1620896411"
                alt=""
              />
            </div>

            <div className="w flex mt-9 space-x-3 text-[#494949]">
              <FontAwesomeIcon icon={faHeart} />
              <h3 className=" text-sm font-semibold ">ADD TO WISHLIST</h3>
            </div>
            <div className="cl mt-4 flex space-x-2 text-[#494949]">
              <FontAwesomeIcon icon={faClock} />{" "}
              <h3 className="text-slate-500 text-sm  ">
                Orders ship within 5 to 10 business days.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 p-5">
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class="inline-block p-4 md:text-lg font-[Josefin Sans, sans-serif] font-semibold rounded-t-lg border-b text-black hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-black dark:border-yellow-500"
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
                class="inline-block p-4 md:text-lg font-[Josefin Sans, sans-serif] font-semibold rounded-t-lg border-b text-[#B7B7B7] hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500  dark:border-yellow-500"
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
