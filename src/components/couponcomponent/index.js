import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Couponcomponent({ coupons, Hndcoupon }) {
  return (
    <div className="coupon ">
      <div
        className={
          coupons
            ? "modal-coupon grid place-items-center  bg-black bg-opacity-75 fixed top-0 bottom-0 right-0 left-0"
            : "hidden "
        }
      >
        <div className="fixed bg-white w-[40%] h-[40%] shadow-2xl p-5 space-y-3 ">
          <div className="title flex justify-between">
            <h3>Apply Coupon</h3>
            <div className="close">
              <FontAwesomeIcon onClick={Hndcoupon} icon={faXmark} />
            </div>
          </div>
          <hr />
          <input
            className="bg-white  w-full  "
            type="text"
            name=""
            id=""
            placeholder="Enter your coupon"
          />
          <div className="c flex absolute bottom-0 left-0 right-0">
            <input
              disabled
              type="text"
              name=""
              value="Maximum Savings $0 "
              className="bg-white  w-full  text-center"
              id=""
            />
            <input
              className="bg-[#373839] border text-white font-[500] w-full  "
              type="button"
              name=""
              id=""
              value="Apply Coupon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
