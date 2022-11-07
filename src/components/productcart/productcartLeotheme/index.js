import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
export default function ProductcartLeotheme() {
  return (
    <div className="container md:flex md:space-x-11 p-3 font-leo-theme-font">
      <div className="row md:block hidden w-[60%]">
        <div className="cart border">
          <div className="title border-b-2 p-3">
            <h1 className="text-leo-theme-heading-cart-color font-bold">
              SHOPPING CART
            </h1>
          </div>
          <div className="card-cart flex w-full space-x-16 p-3">
            <div className="item">
              <img
                src="https://demo1.leotheme.com/leo_wooden_demo/286-cart_default/blouse.jpg"
                alt=""
              />
            </div>
            <div className="item flex w-[39%] justify-between ">
              <div className="cart-child space-y-2  ">
                <h3 className="  text-[14px] font-[500] text-leo-theme-title-color">
                  Fugiat nulla
                </h3>
                <p className="  font-[800] text-[14px] leo-theme-price-color">
                  $26.99
                </p>
                <p className="   text-leo-theme-size-title text-[14px]">
                  Size:{" "}
                  <span className=" text-leo-theme-size-default-title"> S</span>
                </p>
                <p className="   text-text-leo-theme-size-title text-[14px]">
                  Color:{" "}
                  <span className=" text-leo-theme-size-default-title">
                    Black
                  </span>{" "}
                </p>
              </div>

              <div className="qty border w-[22%] h-[32%]  flex justify-between">
                <div className="item grid place-items-center text-center">
                  <p className="ml-[1rem]">1</p>
                </div>
                <div className="item bg-[#373839] h-[39px] space-y-4">
                  <div className="w-[1.2rem] grid place-items-center  bg-[#373839] h-[15%] text-white">
                    <FontAwesomeIcon
                      className="text-sm pt-[0.2rem]"
                      icon={faAngleUp}
                    />
                  </div>
                  <div className="w-[1.2rem] grid place-items-center bg-[#373839] h-[15%] text-white">
                    <FontAwesomeIcon className="text-sm" icon={faAngleDown} />
                  </div>
                </div>
              </div>
            </div>
            <div className="item text-leo-theme-price-default-color flex justify-between w-[25%]">
              <p>$26.99</p>

              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        </div>
      </div>
      <div className="div md:hidden  flex border shadow-md p-5">
        <div className="tem md:hidden block">
          <img
            className="w-[76%]"
            src="https://demo1.leotheme.com/leo_wooden_demo/286-cart_default/blouse.jpg"
            alt=""
          />
        </div>
        <div className="item space-y-4 md:hidden block">
          <h3 className="text-[17px] text-leo-theme-title-color font-600">
            Faxtex Product Sample
          </h3>
          <p className="text-leo-theme-size-title">
            Size: <span>M</span>
          </p>
          <p className="text-leo-theme-size-title">
            Color:{" "}
            <span className="text-leo-theme-size-default-title"> Blue</span>
          </p>

          <div className="qty border w-[41%] relative mt-8  flex justify-between">
            <div className="item grid place-items-center text-center">
              <p className="ml-[1rem]">1</p>
            </div>
            <div className="item bg-leo-theme-qty-bg-color h-[39px] space-y-4">
              <div
                className="w-[1.2rem] grid place-items-center 
               bg-leo-theme-qty-bg-color h-[15%] text-leo-theme-qty-title-color"
              >
                <FontAwesomeIcon
                  className="text-sm pt-[0.2rem]"
                  icon={faAngleUp}
                />
              </div>
              <div
                className="w-[1.2rem] grid place-items-center
               bg-leo-theme-qty-bg-color h-[15%] text-leo-theme-qty-title-color"
              >
                <FontAwesomeIcon className="text-sm" icon={faAngleDown} />
              </div>
            </div>
            <FontAwesomeIcon
              className="absolute -right-[90px] top-2"
              icon={faTrash}
            />
          </div>
          <h3 className="text-leo-theme-price-default-color font-600 ">
            $110.00{" "}
          </h3>
        </div>
      </div>
      <div className="md:hidden cp mt-5">continue shopping</div>
      <div className="row shadow-md md:mt-0 mt-5 w-full md:w-[30%] border p-4 space-y-9">
        <div className="pr space-y-3">
          <div className="item w-[100%] flex justify-between">
            <p className="text-[14px]  text-[#666]">3 Items</p>
            <p className="text-[14px]  text-leo-theme-price-default-color font-[600]">
              $77.97
            </p>
          </div>
          <div className="item w-[100%] flex justify-between">
            <p className="text-[14px]  text-leo-theme-price-default-color">
              Shipping
            </p>

            <p className="text-[14px]  text-leo-theme-price-default-color font-[600]">
              $77.97
            </p>
          </div>
        </div>
        <div className="div tax space-y-3">
          <div className="item w-[100%] flex justify-between">
            <p className="text-[14px]  text-[#666]">Total (tax excl.)</p>
            <p className="text-[14px]  text-leo-theme-price-default-color font-[600]">
              $77.97
            </p>
          </div>
          <div className="item w-[100%] flex justify-between">
            <p className="text-[14px]  text-[#666]">Total (tax incl.)</p>
            <p className="text-[14px]  text-leo-theme-price-default-color font-[600]">
              $77.97
            </p>
          </div>
        </div>

        <div className="button block m-0 text-center ">
          <input
            type="button"
            value="Proceed to checkout"
            className="w-[60%] bg-[#373839] text-white  p-2"
          />
        </div>
      </div>
    </div>
  );
}
