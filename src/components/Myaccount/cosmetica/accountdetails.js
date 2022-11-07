import React from "react";

export default function Accountdetails() {
  return (
    <div className="account-details space-y-4">
      <h3 className="text-[#253d4e] text-[20px] font-[600]">Account Details</h3>
      <h3 className="text-[#7e7e7e] font-Lato">
        Already have an account?{" "}
        <span className="text-[#3bb77e]">Log in instead!</span>
      </h3>
      <div className="item flex w-full space-x-3">
        <div className="form-group space-y-2 w-full">
          <label htmlFor="" className="text-black font-[400]">
            First Name *
          </label>
          <input
            type="text"
            name=""
            className="w-full p-4 border-[#d2d2d2] rounded-lg"
            id=""
          />
        </div>
        <div className="form-group space-y-2 w-full">
          <label htmlFor="" className="text-black font-[400]">
            Last Name *
          </label>
          <input
            type="text"
            name=""
            className="w-full p-4 border-[#d2d2d2] rounded-lg"
            id=""
          />
        </div>
      </div>
      <div className="form-group space-y-2">
        <label htmlFor="" className="text-black font-[400]">
          Display Name *
        </label>
        <input
          type="text"
          name=""
          className="w-full p-4 border-[#d2d2d2] rounded-lg"
          id=""
        />
      </div>
      <div className="form-group space-y-2">
        <label htmlFor="" className="text-black font-[400]">
          Email Address *
        </label>
        <input
          type="text"
          name=""
          className="w-full p-4 border-[#d2d2d2] rounded-lg"
          id=""
        />
      </div>
      <div className="form-group space-y-2">
        <label htmlFor="" className="text-black font-[400]">
          Current password
        </label>
        <input
          type="text"
          name=""
          className="w-full p-4 border-[#d2d2d2] rounded-lg"
          id=""
        />
      </div>
      <div className="form-group space-y-2">
        <label htmlFor="" className="text-black font-[400]">
          New password
        </label>
        <input
          type="text"
          name=""
          className="w-full p-4 border-[#d2d2d2] rounded-lg"
          id=""
        />
      </div>
      <div className="form-group space-y-2">
        <label htmlFor="" className="text-black font-[400]">
          Confirm new password
        </label>
        <input
          type="text"
          name=""
          className="w-full p-4 border-[#d2d2d2] rounded-lg"
          id=""
        />
      </div>
    </div>
  );
}
