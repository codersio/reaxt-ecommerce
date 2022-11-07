import React, { useState } from "react";
import {
  faXmark,
  faMoped,
  faTruck,
  faTruckPickup,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DeliveryPickup({ setDelpickup, delpickup }) {
  const Delivery = () => {
    return (
      <div className="address space-y-8">
        <div className=" space-y-3 mt-5">
          <h3 className="text-[#888] font-[500] text-[12px]">ADDRESS </h3>
          <input
            type="text"
            name=""
            value="Enter a delivery address"
            className="w-full border-none text-[#888] text-[12px]  bg-[#f6f6f6]"
            id=""
          />
          <div className="icon flex space-x-2 text-[12px]">
            <FontAwesomeIcon
              icon={faLocationArrow}
              className="mt-1 text-[15px] text-[#f2002d]"
            />
            <h3>OR DETECT MY CURRENT LOCATION</h3>
          </div>
        </div>

        <div className="bttn">
          <button className="bg-[#f2002d] w-[30%] text-[13px] text-[#fff] font-[500] p-3 rounded-3xl">
            START OVER
          </button>
        </div>
      </div>
    );
  };

  const Pickup = () => {
    return (
      <div className="space-y-3 ">
        <h3 className="mt-3">Select branch</h3>

        <div className="img gap-2 grid grid-cols-3">
          <div className="item text-center border p-3 rounded-xl">
            <div className="image">
              <img
                className="block m-auto"
                src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2022/02/branch-logo.jpg"
                alt=""
              />
            </div>
            <h3>Lafka Bronx NY</h3>
          </div>
          <div className="item text-center border p-3 rounded-xl">
            <div className="image">
              <img
                className="block m-auto"
                src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2022/02/branch-logo.jpg"
                alt=""
              />
            </div>
            <h3>Lafka Bronx NY</h3>
          </div>
          <div className="item text-center border p-3 rounded-xl">
            <div className="image">
              <img
                className="block m-auto"
                src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2022/02/branch-logo.jpg"
                alt=""
              />
            </div>
            <h3>Lafka Bronx NY</h3>
          </div>
        </div>
        <div className="bttn">
          <button className="bg-[#f2002d] w-[30%] text-[13px] text-[#fff] font-[500] p-3 rounded-3xl">
            START OVER
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="delivery-container grid place-items-center fixed top-0  right-0 left-0 bottom-0 z-20 bg-black bg-opacity-75">
      <div className="fixed rounded-lg bg-white w-full md:w-[40%]  shadow-2xl p-5 space-y-3 ">
        <div className="c    ">
          <div className="col text-black bg-[#F8F8F8] w-full flex">
            <div
              onClick={() => setDelpickup(0)}
              className={
                delpickup === 0
                  ? "icon flex bg-white rounded-t-lg space-x-3 border text-white font-[500] w-[30%]  p-2"
                  : "icon flex space-x-3 border text-white font-[500] w-[30%]  p-2"
              }
            >
              <FontAwesomeIcon className="text-[#f2002d]" icon={faTruck} />
              <h3 className="uppercase text-black">Delivery</h3>
            </div>
            <div
              onClick={() => setDelpickup(1)}
              className={
                delpickup === 1
                  ? "icon flex space-x-3 shadow-2xl border text-white font-[500] min-w-min  p-2"
                  : "icon flex space-x-3 shadow-2xl border text-white font-[500] min-w-min  p-2"
              }
            >
              <FontAwesomeIcon
                className="text-[#f2002d]"
                icon={faTruckPickup}
              />
              <h3 className="uppercase text-black">LOCAL PICKUP</h3>
            </div>
          </div>
          {delpickup == 0 ? <Delivery /> : <Pickup />}
        </div>
      </div>
    </div>
  );
}
