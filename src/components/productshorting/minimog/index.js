import React from "react";
import {
  HiOutlineMenuAlt4,
  HiOutlineMenu,
  HiOutlineViewList,
} from "react-icons/hi";
// import { } from "react-icons/hi2";
// import {} from "react-icons"
export default function Minimogproductshort({ setTwoitem, twouitem }) {
  return (
    <div className="minimog-productshort font-minimog-theme-font md:flex justify-between">
      <div className="item">
        <h3 className="text-[18px] text-minimog-theme-default-title-color">
          Showing 12 of 563 results
        </h3>
      </div>
      <div className="item flex space-x-4">
        <div
          onClick={() => setTwoitem(2)}
          className="icon w-[35px] rounded-md hover:bg-black hover:text-white
         grid place-items-center h-[35px] bg-minimog-theme-default-bg-color"
        >
          <HiOutlineMenuAlt4 className=" rotate-[90deg] text-[1.2rem]" />
        </div>
        <div
          onClick={() => setTwoitem(3)}
          className="icon w-[35px] rounded-md hover:bg-black hover:text-white
         grid place-items-center h-[35px] bg-minimog-theme-default-bg-color"
        >
          <HiOutlineMenu className=" rotate-[90deg] text-[1.2rem]" />
        </div>
        <div
          onClick={() => setTwoitem(4)}
          className="icon w-[35px] rounded-md hover:bg-black hover:text-white
         grid place-items-center h-[35px] bg-minimog-theme-default-bg-color"
        >
          <HiOutlineViewList className=" rotate-[90deg] text-[1.2rem]" />
        </div>
      </div>
    </div>
  );
}
