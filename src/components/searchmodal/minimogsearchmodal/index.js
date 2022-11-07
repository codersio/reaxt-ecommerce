import React from "react";
import {
  faBars,
  faCartFlatbed,
  faSearch,
  faStar,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FaRegUser, FaRegStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Minimogsearch({ searchmodal, setSearchmodal,logmodal,setLogmodal }) {
  return (
    <div
      className={
        searchmodal
          ? "bg-black cursor-fancy z-10 fixed top-0 right-0 left-0 bottom-0 bg-opacity-75"
          : "hidden"
      }
    >
      <div
        onClick={() => setSearchmodal(searchmodal)}
        className="absolute z-10 top-0 border py-5 shadow-2xl right-0 flex justify-between left-0 bg-white"
      >
        <div className="item w-[25%]">
          <img
            className="w-[50%] ml-10"
            src="https://minimog-4437.kxcdn.com/wp-content/themes/minimog/assets/images/logo/dark-logo.png"
            alt=""
          />
        </div>
        <div className="item w-[50%] space-y-2">
          <div
            className="input-cat rounded-lg
           flex justify-between  w-[100%] border-minimog-theme-border-color border"
          >
            <input
              type="text"
              value="Search for items...."
              className="border-none w-[60%] rounded-lg text-[14px] text-[#7e7e7e]"
            />
            <button className=" w-[15%]   px-2 text-right ">
              <BsSearch className="text-[#7e7e7e] text-[17px] mt-1" />
            </button>
          </div>

          <div className="posearch flex justify-center space-x-2 text-[16px]">
            <h3 className="text-minimog-theme-default-title-color">
              Popular Searches:{" "}
            </h3>
            <div className="item flex space-x-2">
              <h3 className="underline text-minimog-theme-title-color font-[400]">
                T-Shirt{" "}
              </h3>
              <h3 className="underline text-minimog-theme-title-color font-[400]">
                Blue{" "}
              </h3>
              <h3 className="underline text-minimog-theme-title-color font-[400]">
                Jacket{" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="item  w-[25%] text-[25px] text-minimog-theme-menu-icon-color">
          <div className="mt-3 flex  justify-center space-x-8">
            <div className="" onClick={() => setLogmodal(!logmodal)}>
              <FaRegUser className="text-[20px]" />
            </div>
            {/* <div className="  ">
              <BsSearch className="text-[20px] " />
            </div> */}
            <div className="bdg relative">
              <FaRegStar className="text-[20px] " />
              <div
                className="bg-minimog-theme-menu-icon-number-bg-color -top-2 right-0
               left-4 bottom-2 absolute text-[13px] font-[800]  rounded-full text-minimog-theme-menu-icon-number-color w-[20px] text-center h-[20px] "
              >
                <h3 className="text-center "> 0</h3>
              </div>
            </div>
            <div className=" relative">
              {" "}
              <MdOutlineShoppingBag
                className="text-[20px] "
                // onClick={Hndlecartmodal}
              />
              <div
                className="bg-minimog-theme-menu-icon-number-bg-color -top-2 right-0
               left-4 bottom-2 absolute text-[13px] font-[800]  rounded-full text-minimog-theme-menu-icon-number-color w-[20px] text-center h-[20px] "
              >
                <h3 className="text-center "> 0</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setSearchmodal(!searchmodal)}
        className="  absolute bottom-0 top-0 left-0 right-0"
      ></div>
    </div>
  );
}
