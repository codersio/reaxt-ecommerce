import React from "react";
import {
  faPen,
  faPencil,
  faTicket,
  faTractor,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Paymentch() {
  return (
    <div className="info-container  text-[14px] p-7 font-Raleway text-[#414141]">
      <div className="con border-2 p-4 space-y-7">
        <div>
          <div class="relative ">
            <input type="checkbox" id="toggle1" class="toggle hidden" />
            <label
              class="title justify-between flex    bg-white p-4 cursor-pointer"
              for="toggle1"
            >
              <span className="flex space-x-3">
                <input
                  type="radio"
                  className="chek mt-1"
                  name=""
                  id=""
                  for="toggle1"
                />
                <h3 className="font-[500] text-black ">Pay by Check</h3>
              </span>
              {/* <FontAwesomeIcon icon={faTicket} className=" flex justify-end" /> */}
            </label>
            <div class="content bg-white overflow-hidden">
              <p class="p-4 font-[jost]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
          </div>
          <div class="relative ">
            <input type="checkbox" id="toggle2" class="toggle hidden" />

            <label
              class="title justify-between flex   font-bold bg-white p-4 cursor-pointer"
              for="toggle2"
            >
              <span className="flex space-x-3">
                <input
                  type="radio"
                  className="chek mt-1"
                  name=""
                  id=""
                  for="toggle2"
                />
                <h3 className="font-[500] text-black ">Pay by bank wire</h3>
              </span>
              {/* <FontAwesomeIcon icon={faTicket} className=" flex justify-end" /> */}
            </label>
            <div class="content bg-white overflow-hidden">
              <p class="p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
          </div>
        </div>
        <div className="chck space-x-4">
          <input type="checkbox" checked name="" id="" />{" "}
          <label htmlFor="">
            {" "}
            I agree to the terms of service and will adhere to them
            unconditionally.
          </label>
        </div>
        <h3 className="text-[18px] font-[800]">
          PLEASE CHECK YOUR ORDER BEFORE PAYMENT
        </h3>
        <h3 className="text-[16px] font-[800]">ADDRESSES </h3>
        <div className="con-add md:flex md:space-x-9 md:space-y-0 space-y-3">
          <div className="item border p-3 md:w-[50%] space-y-2">
            <h3 className=" text-[14px] font-[700]">YOUR DELIVERY ADDRESS</h3>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
          </div>
          <div className="item border p-3 md:w-[50%] space-y-2">
            <h3 className=" text-[14px] font-[700]">YOUR INVOICE ADDRESS</h3>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
          </div>
        </div>
        <h3 className="text-[16px] font-[800]">SHIPPING METHOD </h3>
        <div className="card-cart md:flex w-full space-x-16 p-2 bg-[#f6f6f6]">
          <div className="item flex space-x-6 w-[80%]">
            <input type="radio" name="" id="" />
            <img
              className="w-[40px]"
              src="https://demo1.leotheme.com/leo_wooden_demo/286-cart_default/blouse.jpg"
              alt=""
            />
            <h3 className="text-[#444] font-[700]">My carrier</h3>
          </div>
          <div className=" md:hidden block cart-child space-y-2  ">
            <h3 className="  text-[#333] text-[14px] ">Delivery next day!</h3>
            <p className="  text-[14px] "> $7.00 tax excl.</p>
          </div>

          <div className=" md:flex hidden item  w-[50%] justify-between ">
            <div className="cart-child space-y-2  ">
              <h3 className="  text-[#333] text-[14px] ">Delivery next day!</h3>
            </div>
          </div>

          <div className=" md:block hidden item flex justify-between w-[45%] ">
            <p className="  text-[14px] "> $7.00 tax excl.</p>
          </div>
        </div>
        <div className="button block m-0 text-center ">
          <input
            type="button"
            value="Proceed to checkout"
            className="w-[60%] bg-[#373839] text-white font-[raleway] p-2"
          />
        </div>
      </div>
    </div>
  );
}
