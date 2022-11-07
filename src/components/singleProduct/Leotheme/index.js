import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styled.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Leotheme() {
  return (
    <div className="container p-3 md:p-16 space-y-16">
      <div className="contain-child md:flex md:space-x-16">
        <div className="row">
          <Carousel>
            <img
              src="https://demo1.leotheme.com/leo_wooden_demo/286-large_default/blouse.jpg"
              alt=""
              srcset=""
            />
            <img
              src="https://demo1.leotheme.com/leo_wooden_demo/286-large_default/blouse.jpg"
              alt=""
              srcset=""
            />
          </Carousel>
        </div>

        <div className="row">
          <div className="title space-y-5">
            <div className="item  font-bold text-2xl text-leo-theme-title-color">
              <h3>FUGIAT NULLA</h3>
            </div>
            <div className="div">
              <p>Write a review</p>
            </div>
          </div>
          <div className="pr-re mt-5">
            <div className="item   font-bold">
              <h3 className="text-3xl text-leo-theme-price-color">$26.99</h3>
            </div>
          </div>
          <div className="view mt-5">
            <h3 className="text-leo-theme-default-title-color">
              Delivery: 1 to 3 weeks
            </h3>
            <p className="text-leo-theme-default-title-color mt-5">
              Lorem ipsum dolor sit amet, mel paulo sonet latine ad, vis te
              ridens oporteat, tale ipsum facilis pro ei. Utamur deterruisset ea
              sea. Ferri scriptorem concludaturque ne his, te nostrud patrioque
              eos, nam no laudem epicuri persequeris. Mel ut wisi alienum
              vituperatoribus. Qui ut decore utinam iudicabit, mea tamquam
              salutatus consetetur ea.
            </p>
          </div>
          <div className=" flex space-x-10 mt-6">
            <div className="item text-black font-semibold">
              <h3 className="mt-2 text-leo-theme-size-default-title text-sm font-medium">
                SIZE :
              </h3>
            </div>
            <div className="item">
              <div className="size flex space-x-2">
                <div className="s  text-leo-theme-size-default-title  border-black  grid text-lg border-2 place-items-center  w-[40px] h-[40px] ">
                  xl
                </div>
                {/* <div className="s hover:bg-pink-700 hover:text-white border grid text-lg rounded-md place-items-center bg-[#f8f8f8] w-[50px] h-[50px] ">
              xl
            </div>
            <div className="s hover:bg-pink-700 hover:text-white border grid text-lg rounded-md place-items-center bg-[#f8f8f8] w-[50px] h-[50px] ">
              xl
            </div>
            <div className="s hover:bg-pink-700 hover:text-white border grid text-lg rounded-md place-items-center bg-[#f8f8f8] w-[50px] h-[50px] ">
              xl
            </div> */}
              </div>
            </div>
          </div>
          <div className=" flex space-x-6 mt-6">
            <div className="item text-leo-theme-size-default-title font-semibold">
              <h3 className="mt-2 text-leo-theme-size-default-title text-sm font-medium">
                COLOR{" "}
              </h3>
            </div>
            <div className="item">
              <div className="size flex space-x-2">
                <div className="s bg-blue-900 rounded-full hover:text-white   grid text-lg  place-items-center  w-[30px] h-[30px] "></div>
                <div className="s bg-red-900 rounded-full hover:text-white   grid text-lg  place-items-center  w-[30px] h-[30px] "></div>
                {/* <div className="s hover:bg-pink-700 hover:text-white border grid text-lg rounded-md place-items-center bg-[#f8f8f8] w-[50px] h-[50px] ">
              xl
            </div>
            <div className="s hover:bg-pink-700 hover:text-white border grid text-lg rounded-md place-items-center bg-[#f8f8f8] w-[50px] h-[50px] ">
              xl
            </div>
            <div className="s hover:bg-pink-700 hover:text-white border grid text-lg rounded-md place-items-center bg-[#f8f8f8] w-[50px] h-[50px] ">
              xl
            </div> */}
              </div>
            </div>
          </div>
          <div className="qty mt-3 space-y-4">
            <h3 className="text-leo-theme-size-default-title">Quantity</h3>
            <div className="cart-q ">
              <input
                type="number"
                name=""
                value="1"
                id=""
                className="md:w-[15%] w-[25%] h-[60px] text-lg"
              />
            </div>
          </div>
          <div className="stk mt-5">
            <h3 className="text-green-800">InStock</h3>
          </div>
          <div className="b-n mt-3">
            <input
              type="button"
              value="BUY NOW"
              className="w-[50%] bg-[#2A363B] text-center text-white text-sm p-4"
            />
          </div>

          <div className="com-as flex font-[jost] text-lg font-semibold space-x-12 mt-3 text-[#888]">
            <div className="item text-sm underline">Add To Wishlist</div>
            <div className="item text-sm underline">Ask a Question</div>
          </div>

          <div className="mt-6 block md:hidden">
            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
              <ul
                class="flex flex-wrap -mb-px text-sm font-medium text-center"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li class="mr-2" role="presentation">
                  <button
                    class="inline-block p-4 font-[jost] rounded-t-lg border-b-2 text-black hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-500 dark:border-yellow-500"
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
      <div className="mt-6 hidden md:flex border ">
        <div class="mb-4 w-[20%]   border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium flex-col"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class=" border-l-[#33c9db] border-l-4 font-semibold text-left inline-block w-full p-4   border text-[#33c9db] hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500  dark:border-yellow-500"
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
                class="inline-block  font-semibold text-left w-full p-4   border text-black hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500  dark:border-yellow-500"
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
        <div id="myTabContent " className="w-[60%]">
          <div
            class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p class="text-base text-gray-500 dark:text-gray-400">
              Fashion has been creating well-designed collections since 2010.
              The brand offers feminine designs delivering stylish separates and
              statement dresses which has since evolved into a full
              ready-to-wear collection in which every item is a vital part of a
              woman's wardrobe. The result? Cool, easy, chic looks with youthful
              elegance and unmistakable signature style. All the beautiful
              pieces are made in Italy and manufactured with the greatest
              attention. Now Fashion extends to a range of accessories including
              shoes, hats, belts and more!
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
