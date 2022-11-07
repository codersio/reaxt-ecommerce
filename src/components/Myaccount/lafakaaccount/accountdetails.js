import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Accountdetails() {
  return (
    <div className="account-details uppercase font-Rubik space-y-4 text-[12px]">
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
      <div className="pass relative border p-5 space-y-3 mt-5">
        <h3 className=" text-[13px] font-[600] absolute -top-[0.8rem] left-[2rem] bg-white">
          Password Change{" "}
        </h3>

        <div className="form-group space-y-2">
          <label htmlFor="" className="text-black font-[400] uppercase">
            Current password (leave blank to leave unchanged)
          </label>
          <div className="  justify-between w-full p-1 border border-[#d2d2d2] rounded-lg flex">
            <input
              type="text"
              // value="Password"
              className="border-none w-[80%] "
            />
            <div>
              <FontAwesomeIcon icon={faEye} className="mt-3 text-[#666]" />
            </div>
          </div>
        </div>
        <div className="form-group space-y-2">
          <label htmlFor="" className="text-black font-[400] uppercase">
            New password (leave blank to leave unchanged)
          </label>
          <div className="  justify-between w-full p-1 border border-[#d2d2d2] rounded-lg flex">
            <input
              type="text"
              // value="Password"
              className="border-none w-[80%] "
            />
            <div>
              <FontAwesomeIcon icon={faEye} className="mt-3 text-[#666]" />
            </div>
          </div>
        </div>
        <div className="form-group space-y-2 mt-5">
          <label htmlFor="" className="text-black font-[400] uppercase">
            Confirm password (leave blank to leave unchanged)
          </label>
          <div className="  justify-between w-full p-1 border border-[#d2d2d2] rounded-lg flex">
            <input
              type="text"
              // value="Password"
              className="border-none w-[80%] "
            />
            <div>
              <FontAwesomeIcon icon={faEye} className="mt-3 text-[#666]" />
            </div>
          </div>
        </div>
      </div>

      <input
        type="button"
        value="save changes"
        className="capitalize bg-[#f2002d] p-3 w-[20%] rounded-3xl text-white text-[16px]"
      />
    </div>
  );
}
