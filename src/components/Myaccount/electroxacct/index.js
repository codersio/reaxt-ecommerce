import { faLocationPinLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import OrderDetails from "./orderdetails";
import { FiUser, FiMail } from "react-icons/fi";
export default function Electrox() {
  return (
    <div className="font-Inter text-[16px] p-9 text-[#666] minimog-account flex space-x-8">
      <div className="left-bar border-r p-5 w-[30%] space-y-3">
        <h3 className="text-[#333e48] text-[700] text-[22px]">
          Account Details
        </h3>
        <div className="space-y-1">
          <div className="icon flex space-x-2">
            <div>
              <FiUser className="text-[16px] mt-1" />
            </div>
            <h3>aaa aa</h3>
          </div>
          <div className="icon flex space-x-2">
            <div>
              <FiMail className="text-[16px] mt-1" />
            </div>
            <h3>aaa aa</h3>
          </div>
          <div className="icon flex space-x-2">
            <div>
              <FontAwesomeIcon icon={faLocationPinLock} />
            </div>
            <h3>aaa aa</h3>
          </div>
        </div>
        <div className="add">
          <button className="bg-[#fed700] w-full rounded-3xl text-[#333e48] p-3 font-[600]">
            View address (1)
          </button>
        </div>
        <div className="">
          <button className="bg-[#e6e6e6] w-full rounded-3xl text-[#333e48] p-3 font-[600]">
            Log out
          </button>
        </div>
      </div>
      <div className="right-bar  w-[80%]">
        <div className="w-[100%]  p-4 space-y-3">
          <h3 className="text-[#333e48] text-[700] text-[22px]">
            Order History
          </h3>
          <OrderDetails />
        </div>
      </div>
    </div>
  );
}
