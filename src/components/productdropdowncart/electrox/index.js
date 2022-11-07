import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import "./style.scss";
import {
  faPen,
  faPencil,
  faTicket,
  faTractor,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import "../../../Font/globalfont.scss";
export default function Electrox() {
  const [cartmodal, seCart] = useState(true);
  const Handke = () => {
    seCart(!cartmodal);
  };
  return (
    <div className="minimog w-[100vw] font-electrox-theme-font">
      <div className="grid place-items-center h-[100vh]">
        <button onClick={Handke} className="bg-black  text-white p-5">
          click me
        </button>
      </div>

      <div
        className={
          cartmodal
            ? "modal-cart transition-all duration-100 bg-black bg-opacity-75 absolute top-0 right-0 bottom-0 left-0"
            : "hidden -right-28"
        }
      >
        <div
          className={
            cartmodal
              ? "transition-all delay-100 duration-800 cart-modal-body absolute  top-0 right-0 space-y-4 bottom-0 bg-white w-[24%]"
              : "-right-28"
          }
        >
          <div className="flex bg-electrox-theme-headerdefault-bg-color flex justify-between p-2">
            <div className="grid place-items-center">
              <GrClose onClick={Handke} className=" ml-3 text-[18px]" />
            </div>
            <h3 className="font-[600] uppercase text-[16px] text-electrox-theme-default-title-color">
              My Cart
            </h3>
            <div></div>
          </div>

          <div className="flex space-x-3 p-2 ">
            <div className="tem  ">
              <img
                className="w-[65%] m-auto"
                src="https://minimog.thememove.com/wp-content/uploads/2021/12/product_fashion_12_a_1-108x144.jpg"
                alt=""
              />
            </div>
            <div className="item space-y-2 w-full ">
              <h3 className="text-[14px] text-electrox-theme-title-color font-[800]">
                Faxtex Product Sample
              </h3>
              <div className="text-[14px] space-y-1 text-electrox-theme-default-title-color">
                <h3>M / Blue</h3>
                <h3>QTY: 1</h3>

                <div className="flex  justify-between">
                  <h3 className="text-[15px] text-electrox-theme-price-color">
                    110.00
                  </h3>
                  <p
                    className="text-[13px] underline text-electrox-theme-title-color 
                font-[600] "
                  >
                    Remove
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row p-3 space-y-4  bg-electrox-theme-default-bg-color absolute bottom-0 left-0 right-0 p-2  justify-center  ">
            <hr />
            <div className="item flex justify-between">
              <h3 className="text-electrox-theme-cart-title-color text-[20px]">
                Cart total{" "}
              </h3>
              <h3 className="text-electrox-theme-totla-price-color font-[600] text-[20px]">
                $110.00
              </h3>
            </div>

            <div className="btn space-y-3">
              <button className="bg-electrox-theme-cartbutton-bg-color font-[600] rounded-3xl text-electrox-theme-button-bg-title-color text-[14px] w-full p-3">
                View cart
              </button>
              <div>
                {" "}
                <button className="bg-electrox-theme-checkoutbtn-bg-color font-[600] rounded-3xl text-electrox-theme-button-bg-title-color text-[14px] w-full p-3">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
