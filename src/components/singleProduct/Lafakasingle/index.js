import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HiOutlineMinus } from "react-icons/hi";
import { BsPlus } from "react-icons/bs";
import {
  fa0,
  faGreaterThan,
  faChevronRight,
  faChevronLeft,
  faAngleRight,
  faAngleLeft,
  faLessThan,
  faStar,
  faScaleBalanced,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Lafakasingletheme() {
  return (
    <div className="container p-6 font-lafaka-theme-font">
      <div className="container-child md:flex md:space-x-10 ">
        <div className="row md:w-[50%]">
          <div className="image p-2">
            <img
              className="w-[80%]"
              src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/05/burger17-680x680.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="row md:w-[39%]">
          <div className="title-clas p-2 space-y-4">
            <h3 className="text-lafaka-theme-title-color   text-xl md:text-[35px] space-x-2 font-bold">
              Tuscan Pizza
            </h3>
            <p className=" text-[15px] text-lafaka-theme-default-title-color">
              Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with
              lettuce, tomato, house BBQ & ranch.
            </p>
          </div>
          <div
            className="price-class mt-3 
          flex space-x-2 w-[41%]   bg-lafaka-theme-default-bg-color border   p-3  rounded-3xl"
          >
            <div className="grid place-items-center">
              <FontAwesomeIcon icon={faScaleBalanced} />
            </div>
            <h3 className="  text-sm text-slate-500">
              <span className="text-lafaka-theme-title-color ">
                Serving size:
              </span>{" "}
              11" - 300 g
            </h3>
          </div>
          <div className="qty-class mt-10  flex">
            <div className="item w-[6rem] bg-lafaka-theme-default-bg-color border text-center h-[3.5rem] p-2 text-sm text-slate-600">
              <h3>
                ENERGY <br />{" "}
                <span className="text-lafaka-theme-title-color">490 Cal</span>
              </h3>
            </div>
            <div className="item w-[6rem] bg-lafaka-theme-default-bg-color border text-center h-[3.5rem] p-2 text-sm text-slate-600">
              <h3>
                PROTEIN <br />{" "}
                <span className="text-lafaka-theme-title-color">490 Cal</span>
              </h3>
            </div>
            <div className="item w-[6rem] bg-lafaka-theme-default-bg-color border text-center h-[3.5rem] p-2 text-sm text-slate-600">
              <h3>
                FAT <br />{" "}
                <span className="text-lafaka-theme-title-color">490 Cal</span>
              </h3>
            </div>
          </div>
          <div className="qty-class   flex">
            <div className="item w-[6rem] bg-lafaka-theme-default-bg-color border text-center h-[3.5rem] p-2 text-sm text-slate-600">
              <h3>
                ENERGY <br />{" "}
                <span className="text-lafaka-theme-title-color">490 Cal</span>
              </h3>
            </div>
            <div className="item w-[6rem] bg-lafaka-theme-default-bg-color border text-center h-[3.5rem] p-2 text-sm text-slate-600">
              <h3>
                PROTEIN <br />{" "}
                <span className="text-lafaka-theme-title-color">490 Cal</span>
              </h3>
            </div>
            <div className="item w-[6rem] bg-lafaka-theme-default-bg-color border text-center h-[3.5rem] p-2 text-sm text-slate-600">
              <h3>
                FAT <br />{" "}
                <span className="text-lafaka-theme-title-color">490 Cal</span>
              </h3>
            </div>
          </div>
          <div className="div mt-5 space-y-2">
            <p className="text-[12px] text-text-lafaka-theme-default-title-color">
              *DI: Recommended Daily Intake based on 2000 calories diet
            </p>
            <div className="flex space-x-2">
              <div className="icon grid place-items-center">
                <FontAwesomeIcon
                  icon={faHeartbeat}
                  className="text-[#e88835]"
                />
              </div>
              <h3 className="text-[12.5px] text-lafaka-theme-default-title-color">
                Allergens: Milk, Eggs, Soy, Glutten
              </h3>
            </div>
            <div className="star  flex space-x-3 ">
              <div className="text-[0.8rem] space-x-2 text-lafaka-theme-title-color text-[#f6a809]">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="rive text-slate-300">(32 reviews)</div>
            </div>
          </div>
          <div className=" flex text-sm  space-x-5 mt-3 text-lafaka-theme-price-color">
            <div className=" relative font-[700]  text-[30px] flex space-x-4 ">
              $14{" "}
              <span className="absolute  left-[3.75rem] bottom-[5px] text-[22px]  text-lafaka-theme-price-color">
                .99
              </span>{" "}
            </div>
          </div>
          {/* <div className=" flex space-x-10 mt-6">
            <div className="item text-lafaka-theme-title-color font-semibold">
              <h3 className="mt-5">SIZE :</h3>
            </div>
            {/* <div className="item">
              <div className="size flex space-x-2">
                <div className="s hover:bg-pink-700 hover:text-white border grid text-lg rounded-md place-items-center bg-lafaka-theme-default-bg-color w-[50px] h-[50px] ">
                  xl
                </div>
                <div className="s hover:bg-pink-700 hover:text-white border grid text-lg rounded-md place-items-center bg-lafaka-theme-default-bg-color w-[50px] h-[50px] ">
                  xl
                </div>
                <div className="s hover:bg-pink-700 hover:text-white border grid text-lg rounded-md place-items-center bg-lafaka-theme-default-bg-color w-[50px] h-[50px] ">
                  xl
                </div>
                <div className="s hover:bg-pink-700 hover:text-white border grid text-lg rounded-md place-items-center bg-lafaka-theme-default-bg-color w-[50px] h-[50px] ">
                  xl
                </div>
              </div>
            </div> */}
          {/* </div> */}
          <div className=" relative border md:w-[80%] p-5 mt-5  space-y-3 ">
            Please, choose your preferred crust type.
            <div className="absolute top-[-12px] bg-white text-lafaka-theme-option-color  font-semibold">
              CRUST *
            </div>
            <div className="ra bg-lafaka-theme-default-bg-color p-2 font-medium  text-sm space-x-3">
              <input type="radio" name="" id="" />{" "}
              <label htmlFor="" className="text-lafaka-theme-extra-color">
                {" "}
                THIN CRUST
              </label>
            </div>
            <div className="ra bg-lafaka-theme-default-bg-color p-2 font-medium  text-sm space-x-3">
              <input type="radio" name="" id="" />{" "}
              <label htmlFor="" className="text-lafaka-theme-extra-color">
                {" "}
                THIN CRUST
              </label>
            </div>
          </div>
          <div className=" relative md:w-[80%] border p-5 mt-5  space-y-3">
            {/* Please, choose your preferred crust type. */}
            <div className="absolute top-[-12px] bg-white text-lafaka-theme-option-color  font-semibold">
              EXTRA TOPPINGS
            </div>
            <div className="ra bg-lafaka-theme-default-bg-color p-2 font-medium  text-sm space-x-3">
              <input type="radio" name="" id="" />{" "}
              <label htmlFor="" className="text-lafaka-theme-extra-color">
                {" "}
                THIN CRUST
              </label>
            </div>
            <div className="ra bg-lafaka-theme-default-bg-color p-2 font-medium  text-sm space-x-3">
              <input type="radio" name="" id="" />{" "}
              <label htmlFor="" className="text-lafaka-theme-extra-color">
                {" "}
                THIN CRUST
              </label>
            </div>
          </div>
          <div className="md:w-[80%]  border p-5 mt-5  space-y-3">
            {/* Please, choose your preferred crust type. */}
            <div className=" bg-white  font-[400] flex space-x-6">
              <div className="item text-lafaka-theme-extra-color">
                Options total:
              </div>
              <div className="item font-bold text-lafaka-theme-extra-color">
                $1.00
              </div>
            </div>
            <div className=" bg-white  font-[400] flex space-x-6">
              <div className="item text-lafaka-theme-extra-color">
                Sub total:
              </div>
              <div className="item font-bold text-lafaka-theme-extra-color">
                $1.00
              </div>
            </div>
          </div>
          <div className="cart  flex w-full space-x-2 mt-5">
            <div
              className="   bg-lafaka-theme-default-bg-color
                   rounded-3xl  bottom-2 w-[20%] 
                      px-3 p-2     
                       text-lafaka-theme-title-color   flex text-xl  
                        leading-9    justify-between text-center   "
              // onClick={ClickButton}
            >
              <div
                className="  cursor-pointer
                      
                      text-sm grid place-items-center "
                // style={{ marginTop: "-8px" }}
              >
                <HiOutlineMinus />
              </div>
              <div className="shrink block  w-16 text-minimog-theme-title-color ">
                <div className="grid place-items-center text-[1rem] mt-[0.3rem] font-medium ">
                  1
                </div>
              </div>{" "}
              <div
                // onClick={incrymentQty}
                className=" grid place-items-center
                     cursor-pointer text-minimog-theme-title-color"
              >
                <BsPlus />
              </div>
            </div>
            <input
              type="button"
              value="ORDER"
              className="rounded-3xl
               w-[30%] 
                p-2 text-lafaka-theme-button-bg-title-color
                 bg-lafaka-theme-order-button-bg-color"
            />
            <div className="icon grid place-items-center">
              <FontAwesomeIcon icon={faHeart} className="text-[1.5rem] text-" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[8.5rem] text-center">
        <div class="mb-4 border-b md:grid md:place-items-center text-center border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class="inline-block p-4  rounded-t-lg border-b-2
                 text-slate-600 hover:text-blue-600
                  dark:text-blue-500 dark:hover:text-blue-500
                   border-lafaka-theme-border-b-color"
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
