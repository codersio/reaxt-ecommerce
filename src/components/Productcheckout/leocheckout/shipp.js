import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faClock,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
export default function Shipp() {
  return (
    <div className=" text-[14px] p-7 font-Raleway text-[#414141]">
      <div className="con border-2 p-4 space-y-7">
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
        <h3>
          If you would like to add a comment about your order, please write it
          in the field below.
        </h3>
        <div className="div">
          <textarea
            name=""
            className="w-full"
            id=""
            cols="10"
            rows="5"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
