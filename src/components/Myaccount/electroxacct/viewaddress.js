import React from "react";

import Addressmodal from "./addressmodal";
export default function Viewaddress() {
  return (
    <div className=" relative font-Inter text-[16px] p-9 text-[#666] minimog-account flex space-x-8">
      <Addressmodal />
      <div className="left-bar  p-5 w-[50%] space-y-3">
        <div className="add flex">
          <button className="bg-[#fed700] w-full rounded-3xl text-[#333e48] p-3 font-[600]">
            View address (1)
          </button>
          <button className="bg-[#e6e6e6] w-full rounded-3xl text-[#333e48] p-3 font-[600]">
            Log out
          </button>
        </div>

        <h3 className="text-[#333e48] text-[700] text-[22px]">(Default)</h3>

        <div className="name flex justify-between">
          <h3>Name</h3>
          <h3>Lorem</h3>
        </div>
        <div className="name flex justify-between">
          <h3>Company</h3>
          <h3>Lorem</h3>
        </div>
        <div className="name flex justify-between">
          <h3>Street</h3>
          <h3>Lorem</h3>
        </div>
        <div className="name flex justify-between">
          <h3>City</h3>
          <h3>Lorem</h3>
        </div>
        <div className="name flex justify-between">
          <h3>Country/region</h3>
          <h3>Lorem</h3>
        </div>
        <div className="name flex justify-between">
          <h3>Phone</h3>
          <h3>Lorem</h3>
        </div>
        <div className="bttn flex ">
          <button
            className="text-[14px]
          p-4 w-[30%] rounded-3xl
           bg-[#e6e6e6] font-[600]"
          >
            Edit
          </button>
          <button
            className="text-[14px]
          p-4 w-[30%] rounded-3xl
           bg-[#fed700] font-[600]"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="right-bar  w-[80%]"></div>
    </div>
  );
}
