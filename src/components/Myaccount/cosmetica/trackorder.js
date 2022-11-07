import React from "react";

export default function Trackorderc() {
  return (
    <div className="trackorder space-y-4">
      <h3 className="text-[#253d4e] text-[32px] font-[600]">Your Orders</h3>
      <h3>
        To track your order please enter your OrderID in the box below and press
        "Track" button. This was given to you on your receipt and in the
        confirmation email you should have received.
      </h3>
      <div className="itme space-y-4">
        <div className="form-group flex flex-col space-y-2 w-full">
          <label htmlFor="" className="text-black font-[400]">
            First Name *
          </label>
          <input
            type="text"
            name=""
            className="w-[60%] p-4 border-[#d2d2d2] rounded-lg"
            id=""
          />
        </div>
        <div className="form-group flex flex-col space-y-2 w-full">
          <label htmlFor="" className="text-black font-[400]">
            Last Name *
          </label>
          <input
            type="text"
            name=""
            className="w-[60%] p-4 border-[#d2d2d2] rounded-lg"
            id=""
          />
        </div>
        <input
          type="button"
          value="Track"
          className="bg-[#253d4e] p-4 rounded-xl text-white text-[17px] w-[15%]"
        />
      </div>
    </div>
  );
}
