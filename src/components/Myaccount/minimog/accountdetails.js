import React from "react";

export default function Accountdetails() {
  return (
    <div className="account-details space-y-4">
      <div className="form-group space-y-2">
        <label htmlFor="" className="text-black font-[400]">
          First Name *
        </label>
        <input
          type="text"
          name=""
          className="w-full p-3 border-[#d2d2d2] rounded-lg"
          id=""
        />
      </div>
      <div className="form-group space-y-2">
        <label htmlFor="" className="text-black font-[400]">
          Last Name *
        </label>
        <input
          type="text"
          name=""
          className="w-full p-3 border-[#d2d2d2] rounded-lg"
          id=""
        />
      </div>
      <div className="form-group space-y-2">
        <label htmlFor="" className="text-black font-[400]">
          Display Name *
        </label>
        <input
          type="text"
          name=""
          className="w-full p-3 border-[#d2d2d2] rounded-lg"
          id=""
        />
        <h3 className="text-[#666] text0[13px] italic">
          This will be how your name will be displayed in the account section
          and in reviews
        </h3>
      </div>
      <div className="form-group space-y-2">
        <label htmlFor="" className="text-black font-[400]">
          Email Address *
        </label>
        <input
          type="text"
          name=""
          className="w-full p-3 border-[#d2d2d2] rounded-lg"
          id=""
        />
      </div>
      <br />
      <div className="pass relative border p-5 space-y-3 mt-4">
        <h3 className="absolute -top-[0.8rem] left-[2rem] bg-white">
          Password Change{" "}
        </h3>

        <div className="form-group space-y-2">
          <label htmlFor="" className="text-black font-[400]">
            Current password (leave blank to leave unchanged)
          </label>
          <input
            type="text"
            name=""
            className="w-full p-3 border-[#d2d2d2] rounded-lg"
            id=""
          />
        </div>
        <div className="form-group space-y-2">
          <label htmlFor="" className="text-black font-[400]">
            New password (leave blank to leave unchanged)
          </label>
          <input
            type="text"
            name=""
            className="w-full p-3 border-[#d2d2d2] rounded-lg"
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
            className="w-full p-3 border-[#d2d2d2] rounded-lg"
            id=""
          />
        </div>
      </div>
      <input
        type="button"
        value="save changes"
        className="capitalize bg-black p-3 w-[40%] rounded-md text-white text-[16px]"
      />
    </div>
  );
}
