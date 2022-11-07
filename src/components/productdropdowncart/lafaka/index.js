import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { FiCreditCard } from "react-icons/fi";
import { RiDeleteBinLine, RiShoppingBag3Line } from "react-icons/ri";
import "./style.scss";
import {
  faPen,
  faPencil,
  faClock,
  faTicket,
  faTractor,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import "../../../Font/globalfont.scss";
// import { GrClose } from "react-icons/gr";
export default function Lafakacartdropdown({ cartmodal, seCart, Handke }) {
  // const [cartmodal, seCart] = useState(true);
  // const Handke = () => {
  //   seCart(!cartmodal);
  // };
  return (
    <div className="minimog  font-lafaka-theme-font">
      <div
        className={
          cartmodal
            ? "modal-cart  z-10 transition  grid place-items-center ease-in-out duration-300 bg-white  fixed top-0 right-0 bottom-0 left-0"
            : "hidden -top-[8rem] transition  ease-in-out duration-300"
        }
      >
        <div
          onClick={Handke}
          className="grid place-items-end absolute top-[1rem] right-[3rem] text-[2rem]"
        >
          <GrClose />
        </div>
        <div
          className={
            cartmodal
              ? "transition-all delay-100 duration-800 cart-modal-body absolute p-5 top-0  space-y-4 bottom-0 bg-white w-[42%]"
              : "-right-28"
          }
        >
          <div className="utem bg-lafaka-theme-button-bg-color text-[14px] rounded-lg flex space-x-3 p-2 text-[#666]">
            <div
              className="item border w-[20%] 
            h-8 p-2 flex space-x-2 md:w-[15%] 
            justify-center border-lafaka-theme-border-color  rounded-md  text-center"
            >
              <FontAwesomeIcon
                icon={faClock}
                className="text-[16px] text-lafaka-theme-icon-color"
              />
              <p className=" md:text text-[9px]">40 min.</p>
            </div>
            <div className="item flex justify-between w-[80%]">
              <div className="grid place-items-center">
                <h3 className="text-[14px]  text-[#666]">
                  Delivery from: Worldwide
                </h3>
              </div>

              <div className="grid place-items-center">
                <div className="  text-center  rounded-full w-[20px] h-[20px] bg-lafaka-theme-edit-icon-bg-color">
                  <FontAwesomeIcon
                    className=" text-[10px] text-lafaka-theme-edit-icon-color "
                    icon={faPencil}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="item flex  justify-between ">
            <div className="row flex space-x-4">
              <div className="image border">
                <img
                  className="w-[56px]"
                  src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/05/burger17-680x680.jpg"
                  alt=""
                />
              </div>
              <div className="title-price">
                <h3 className="text-[14px] text-lafaka-theme-title-color">
                  Bacon Cheeseburger
                </h3>
                <h3 className="text-lafaka-theme-price-color font-[600] text-[13px]">
                  1 × $11.99
                </h3>
              </div>
            </div>
            <div className="row">
              <RiDeleteBinLine />
            </div>
          </div>
          <hr />

          <div className="absolute bottom-0 w-full space-y-10 ">
            <div className="space-y-4">
              <hr />
              <div className="price flex justify-between pl-4 pr-4">
                <h3 className="text-[17px] text-lafaka-theme-default-title-color">
                  Subtotal:
                </h3>
                <h3 className="text-lafaka-theme-price-color right-[2rem] text-[17px] relative font-[600]">
                  <span>$</span> 11.{" "}
                  <span className="absolute top-0 text-[12.8px]">99</span>
                </h3>
              </div>
            </div>

            <div className="btn flex space-x-2">
              <button
                className="uppercase
               justify-center flex space-x-2 
                text-lafaka-theme-button-bg-title-color p-3 rounded-3xl  w-[50%] font-[600] bg-lafaka-theme-cartbutton-bg-color"
              >
                {" "}
                <div>
                  <RiShoppingBag3Line className=" text-[18px]" />
                </div>
                <h3 className="text-[14px]"> view cart</h3>
              </button>
              <button
                className="uppercase justify-center
               flex space-x-2  text-lafaka-theme-button-bg-title-color p-3 rounded-3xl
                 w-[50%] font-[600] bg-lafaka-theme-checkoutbtn-bg-color"
              >
                {" "}
                <div>
                  <FiCreditCard className=" text-[18px]" />
                </div>
                <h3 className="text-[14px]"> checkout</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
