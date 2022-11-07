import React from "react";

export default function Addressleo() {
  return (
    <div className="info-container  text-[14px] p-7 font-Raleway text-[#414141]">
      <div className="con border-2 p-4 space-y-7">
        <h3>
          The selected address will be used both as your personal address (for
          invoice) and as your delivery address.
        </h3>

        <div className="fnam md:flex md:space-x-28">
          <div htmlFor="" className="text-[14px] md:w-[16%] ">
            First name
          </div>
          <input
            type="text"
            name=""
            placeholder="first name"
            id=""
            className="border w-full md:w-[80%]  border-[#ccc]"
          />
        </div>
        <div className="lnam md:flex md:space-x-28">
          <div htmlFor="" className="text-[14px] md:w-[16%] ">
            Last name
          </div>
          <input
            type="text"
            name=""
            placeholder="first name"
            id=""
            className="border w-full md:w-[80%]  border-[#ccc]"
          />
        </div>
        <div className="company md:flex md:space-x-28">
          <div htmlFor="" className="text-[14px] md:w-[16%] ">
            Company
          </div>
          <input
            type="text"
            name=""
            // placeholder="first name"
            id=""
            className="border w-full md:w-[80%]  border-[#ccc]"
          />
        </div>

        <div className="Address md:flex md:space-x-28">
          <div htmlFor="" className="text-[14px] md:w-[16%] ">
            Address
          </div>
          <input
            type="text"
            name=""
            // placeholder="first name"
            id=""
            className="border w-full md:w-[80%]  "
          />
        </div>
        <div className="address md:flex md:space-x-28">
          <div htmlFor="" className="text-[14px] md:w-[16%] ">
            Address <br /> Complement
          </div>
          <input
            type="text"
            name=""
            placeholder="first name"
            id=""
            className="border w-full md:w-[80%]  border-[#ccc]"
          />
        </div>
        <div className="City md:flex md:space-x-28">
          <div htmlFor="" className="text-[14px] md:w-[16%] ">
            City
          </div>
          <input
            type="text"
            name=""
            // placeholder="first name"
            id=""
            className="border w-full md:w-[80%]  border-[#ccc]"
          />
        </div>
        <div className="State md:flex md:space-x-28">
          <div htmlFor="" className="text-[14px] md:w-[16%] ">
            State
          </div>
          <input
            type="text"
            name=""
            // placeholder="first name"
            id=""
            className="border w-full md:w-[80%]  border-[#ccc]"
          />
        </div>
        <div className="Zip/Postal Code md:flex md:space-x-28">
          <div htmlFor="" className="text-[14px] md:w-[16%] ">
            Zip/Postal Code
          </div>
          <input
            type="text"
            name=""
            // placeholder="first name"
            id=""
            className="border w-full md:w-[80%]  border-[#ccc]"
          />
        </div>
        <div className="Country Code md:flex md:space-x-28">
          <div htmlFor="" className="text-[14px] md:w-[16%] ">
            Country
          </div>
          <input
            type="text"
            name=""
            // placeholder="first name"
            id=""
            className="border w-full md:w-[80%]  border-[#ccc]"
          />
        </div>
        <div className="Phone md:flex md:space-x-28">
          <div htmlFor="" className="text-[14px] md:w-[16%] ">
            Phone
          </div>
          <input
            type="text"
            name=""
            // placeholder="first name"
            id=""
            className="border w-full md:w-[80%]  border-[#ccc]"
          />
        </div>
        <div className="box space-y-3">
          <div className="chck space-x-4">
            <input type="checkbox" checked name="" id="" />{" "}
            <label htmlFor=""> Use this address for invoice too</label>
          </div>
          {/* <div className="chck space-x-4">
            <input type="checkbox" name="" id="" />{" "}
            <label htmlFor="">Sign up for our newsletter</label>
          </div> */}
        </div>
        <div className="button block m-0 text-center ">
          <input
            type="button"
            value="Proceed to checkout"
            className="w-[60%] bg-[#373839] text-white font-[raleway] p-2"
          />
        </div>
      </div>
    </div>
  );
}
