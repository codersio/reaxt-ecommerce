import React, { useState } from "react";
import "../../../Font/globalfont.scss";
import { FaSlidersH } from "react-icons/fa";
import { FiUser, FiLogOut, FiUserCheck } from "react-icons/fi";
import Dashboard from "./dashboard";
import Addressbook from "./addressbook";
import Accountdetails from "./accountdetails.js";
import Trackorderc from "./trackorder";
import {
  MdOutlineShoppingBag,
  MdAddShoppingCart,
  MdLocationOn,
} from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FiCreditCard } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { FiFlag } from "react-icons/fi";
import OrderDetails from "./orderdetails";
export default function Lafaka() {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="font-Rubik text-[16px] p-9 text-[#666] minimog-account flex space-x-8">
      <div className="left-bar w-[20%]">
        <div className="  p-5 space-y-5">
          <div className="item ">
            <div>
              {" "}
              <button
                onClick={() => setTabs(0)}
                className=" text-left 
             font-[600]   w-full p-4"
              >
                <span className="ml-0 flex space-x-2">
                  {" "}
                  <div>
                    {" "}
                    <TbActivityHeartbeat className="text-[24px] text-[#cecece]" />
                  </div>{" "}
                  <h3 className="text-[13px] text-[#f2002d] uppercase">
                    Dashboard
                  </h3>
                </span>
              </button>{" "}
            </div>
            <div>
              <button
                onClick={() => setTabs(1)}
                className=" text-left  
              w-full p-4"
              >
                <span className="ml-0 text-[#7e7e7e] text-[15px] flex space-x-2">
                  {" "}
                  <CgFileDocument className="text-[24px] text-[#cecece]" />
                  <h3 className="uppercase text-[13px] font-[500] text-[#333333]">
                    Orders
                  </h3>
                </span>
              </button>
            </div>

            <div>
              <button
                onClick={() => setTabs(3)}
                className=" text-left rounded-lg
              font-[600] w-full p-4"
              >
                <span className="ml-0 flex space-x-2 text-[#7e7e7e] text-[15px] font-[900]">
                  {" "}
                  <FiFlag className="text-[24px] text-[#cecece]" />
                  <h3 className="uppercase text-[13px] font-[500] text-[#333333]">
                    Address
                  </h3>
                </span>
              </button>
            </div>
            <div>
              <button
                onClick={() => setTabs(2)}
                className=" text-left 
              font-[600] w-full p-4"
              >
                <span className="ml-0 flex space-x-2 text-[#7e7e7e] text-[15px] font-[900]">
                  {" "}
                  <FiCreditCard className="text-[24px] text-[#cecece]" />
                  <h3 className="uppercase text-[13px] font-[500] text-[#333333]">
                    payment method
                  </h3>
                </span>
              </button>
            </div>

            <div>
              <button
                onClick={() => setTabs(4)}
                className=" text-left rounded-lg
                font-[600] w-full p-4"
              >
                <span className="ml-0 flex space-x-2 text-[#7e7e7e] text-[15px] font-[900]">
                  {" "}
                  <div>
                    {" "}
                    <FiUserCheck className="text-[24px] text-[#cecece]" />
                  </div>
                  <h3 className="uppercase text-[13px] font-[500] text-[#333333]">
                    Account Details
                  </h3>
                </span>
              </button>
            </div>
            <div>
              <button
                onClick={() => setTabs(5)}
                className=" text-left rounded-lg
              font-[600] w-full p-4"
              >
                <span className="ml-0 flex space-x-2 text-[#7e7e7e] text-[15px] font-[900]">
                  {" "}
                  <div>
                    {" "}
                    <FiLogOut className="text-[24px] text-[#cecece]" />
                  </div>
                  <h3 className="uppercase text-[13px] font-[500] text-[#333333]">
                    Log out
                  </h3>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-bar  w-[80%]">
        <div className="w-[100%]  p-4 ">
          {tabs == 0 ? (
            <Dashboard />
          ) : tabs == 1 ? (
            <OrderDetails />
          ) : tabs == 2 ? (
            <Trackorderc />
          ) : tabs == 3 ? (
            <Addressbook />
          ) : tabs == 4 ? (
            <Accountdetails />
          ) : (
            <div>Not here</div>
          )}
        </div>
      </div>
    </div>
  );
}
