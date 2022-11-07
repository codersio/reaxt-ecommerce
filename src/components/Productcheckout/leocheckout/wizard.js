import React, { useState } from "react";
import Wizard from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
export default function Mainpage() {
  const [btnstate, setBtn] = useState(false);

  const HndlBtn = () => {
    setBtn(!btnstate);
  };
  return (
    <div className="main-con md:flex font-Raleway p-5">
      <Wizard />
      <div className="row border-t-4 shadow-md md:mt-5 mt-5 w-full h-[90%] md:w-[30%] border p-4 space-y-16">
        <div className=" space-y-2">
          <h3 className="text-[14px] text-[#666]">1 items</h3>
          <input
            type="button"
            value="Show Details "
            onClick={HndlBtn}
            className="bg-[#373839] p-2 text-white"
          />
          <div
            className={
              btnstate ? "card-cart flex w-full space-x-16 p-3" : "hidden"
            }
          >
            <div className="item flex space-x-3">
              <div className="image w-[30%]">
                <img
                  className=""
                  src="https://demo1.leotheme.com/leo_wooden_demo/286-cart_default/blouse.jpg"
                  alt=""
                />
              </div>
              <div className="item flex  justify-between ">
                <div className="cart-child space-y-1  ">
                  <h3 className=" font-[raleway] text-[14px]">Fugiat nulla</h3>

                  <p className=" font-[raleway]  text-[#999] text-[14px]">
                    Size: <span className=" text-[#33C9Db]"> S</span>
                  </p>
                  <p className=" font-[raleway]  text-[#999] text-[14px]">
                    Color: <span className=" text-[#33C9Db]">Black</span>{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="item flex justify-between w-[25%]">
              <p>$26.99</p>
            </div>
          </div>
        </div>

        <div className="pr space-y-3">
          <div className="item w-[100%] flex justify-between">
            <p className="text-[14px] font-[raleway] text-[#666]">3 Items</p>
            <p className="text-[14px] font-[raleway] text-[#414141]">$77.97</p>
          </div>
          <div className="item w-[100%] flex justify-between">
            <p className="text-[14px] font-[raleway] text-[#414141]">
              Shipping
            </p>

            <p className="text-[14px] font-[raleway] text-[#414141]">$77.97</p>
          </div>
        </div>
        <div className="div tax space-y-3">
          <div className="item w-[100%] flex justify-between">
            <p className="text-[14px] font-[raleway] text-[#666]">
              Total (tax excl.)
            </p>
            <p className="text-[14px] font-[raleway] text-[#414141] font-[700]  ">
              $77.97
            </p>
          </div>
          <div className="item w-[100%] flex justify-between">
            <p className="text-[14px] font-[raleway] text-[#666]">
              Total (tax incl.)
            </p>
            <p className="text-[14px] font-[raleway] text-[#414141] font-[700]">
              $3.34
            </p>
          </div>
          <div className="item w-[100%] flex justify-between">
            <p className="text-[14px]  text-[#666]">Taxs</p>
            <p className="text-[14px]  text-[#414141] font-[700]">$1.0</p>
          </div>
        </div>

        {/* <div className="button block m-0 text-center ">
          <input
            type="button"
            value="Proceed to checkout"
            className="w-[60%] bg-[#373839] text-white font-[raleway] p-2"
          />
        </div> */}
      </div>
    </div>
  );
}
