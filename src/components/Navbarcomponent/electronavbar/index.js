import {
  faAngleDown,
  faBackspace,
  faBarsStaggered,
  faCartFlatbed,
  faCodeCommit,
  faCodeCompare,
  faHeart,
  faList,
  faLocationDot,
  faMagic,
  faMessage,
  faXmark,
  faPhone,
  faSearch,
  faUser,
  faBriefcase,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiHeart } from "react-icons/fi";
import { BsSearch, BsGlobe } from "react-icons/bs";
import { VscMail } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";
import { IoLocationOutline, IoChevronForwardSharp } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "../../../Font/globalfont.scss";
import React, { useState } from "react";

export default function Electronavbar() {
  const [menubar, setMenubar] = useState(false);
  const Hndle = () => {
    setMenubar(!menubar);
  };
  return (
    <div className="menubar">
      <div className=" md:block hidden electro-container font-Inter border-b-2 ">
        <div className="topbar p-2 justify-between flex border pl-10 pr-10">
          <div className="item flex space-x-3 text-[13px] text-electrox-theme-default-menu-title-color">
            <div className="icon flex space-x-2  ">
              <FontAwesomeIcon
                icon={faPhone}
                className="mt-1 text-electrox-theme-default-icon-color"
              />

              <h3 className="text-[13px] text-electrox-theme-default-menu-title-color font-[500]">
                (+0800) 123 456 7890
              </h3>
              <div className="w-[1px] h-[1rem] mt-1 bg-[#333e481a] "></div>
            </div>
            <div className="icon flex space-x-2 font-[500]">
              <div>
                <VscMail className="mt-1 text-electrox-theme-default-icon-color text-[17px]" />
              </div>
              <h3>sample@email.com</h3>
            </div>
          </div>

          <div className="item flex space-x-5 text-[13px] text-electrox-theme-default-menu-title-color">
            <div className="icon flex space-x-2  ">
              <IoLocationOutline className=" text-electrox-theme-default-menu-title-color text-[17px]" />

              <h3 className="text-[13px] text-electrox-theme-default-menu-title-color font-[500]">
                Store Location
              </h3>
              <div className="w-[1px] h-[1rem] bg-[#333333e48e481a] "></div>
            </div>
            <div className="icon flex space-x-2">
              <BiUser className=" text-electrox-theme-default-menu-title-color text-[17px]" />
              <h3 className="text-[13px] text-electrox-theme-default-menu-title-color font-[500]">
                Sign in or Register
              </h3>
            </div>
            <div className="icon flex space-x-2">
              <BsGlobe className=" text-electrox-theme-default-menu-title-color text-[20px]" />
            </div>
          </div>
        </div>

        <div className="main-header flex p-5 pl-10 pr-10">
          <div className="item w-[25%]">
            <img
              className="w-[50%]"
              src="https://minimog-4437.kxcdn.com/wp-content/themes/minimog/assets/images/logo/dark-logo.png"
              alt=""
            />
          </div>
          <div className="item w-[60%] flex">
            <input
              type="text"
              value="Search"
              className="w-[80%] rounded-l-3xl 
              border-electrox-theme-input-border-color text-electrox-theme-input-title-color border-2"
            />
            <button className="bg-electrox-theme-search-bg-color grid place-items-center  border-2 border-electrox-theme-input-border-color p-2 w-[8%] rounded-r-3xl">
              <BsSearch className="text-[20px] text-electrox-theme-search-title-color" />
            </button>
          </div>
          <div className="item p-1 w-[20%] flex justify-center space-x-14 text-[22px]">
            <div className="icon relative ">
              <FontAwesomeIcon
                icon={faCodeCompare}
                className="rotate-[77deg] text-electrox-theme-default-menu-title-color"
              />
              <h3
                className="bg-electrox-theme-count-number-title-color w-[23px] 
                absolute top-3 right-0 left-3 h-[23px] rounded-full text-[12px] 
            grid place-items-center font-[600] text-electrox-theme-default-menu-title-color"
              >
                0
              </h3>
            </div>
            <div className="icon relative mt-1">
              <FiHeart className="text-[25px] text-electrox-theme-default-menu-title-color" />
              <h3
                className="bg-electrox-theme-count-number-title-color w-[23px] 
                absolute top-3 right-0 left-3 h-[23px] rounded-full text-[12px] 
            grid place-items-center font-[600] text-electrox-theme-default-menu-title-color"
              >
                2
              </h3>
            </div>
            <div className="icon  ">
              <div className="flex  mt-1 space-x-2">
                <div className=" relative  ">
                  <HiOutlineShoppingBag className="text-[27px] text-electrox-theme-default-menu-title-color" />

                  <h3
                    className="bg-electrox-theme-count-number-title-color w-[25px]
                   absolute top-3 right-0 left-2 h-[25px] 
                   rounded-full text-[12px] 
            grid place-items-center font-[600] text-electrox-theme-default-menu-title-color"
                  >
                    0
                  </h3>
                </div>
                <h3 className="text-[15px] font-[600] mt-1">$110.00</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation flex pl-5 space-x-4">
          <div
            className=" text-electrox-theme-default-menu-title-color
           item w-[19%] flex space-x-3 font-[700] rounded-xl text-[14px] 
             p-3 bg-electrox-theme-alldepartment-bg-color"
          >
            <div>
              <FontAwesomeIcon icon={faList} className="text-[18px]" />
            </div>{" "}
            <h3>All Department</h3>
          </div>
          <div className="item w-[75%]  text-electrox-theme-default-menu-title-color ">
            <ul className="flex space-x-11 p-3 text-[14px] font-[600]">
              <li>
                <a href="">Home</a> <FontAwesomeIcon icon={faAngleDown} />
              </li>
              <li>
                <a href="">Catalog</a> <FontAwesomeIcon icon={faAngleDown} />
              </li>
              <li>
                <a href="">Gift Cards</a> <FontAwesomeIcon icon={faAngleDown} />
              </li>
              <li>
                <a href="">Pages</a> <FontAwesomeIcon icon={faAngleDown} />
              </li>
              <li>
                <a href="">Features</a> <FontAwesomeIcon icon={faAngleDown} />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:hidden relative block mobilemenu p-4 justify-center bg-electrox-theme-count-number-title-color">
        <div className="row flex justify-between ">
          <div className="item  space-x-6 flex">
            <div className="humbar " onClick={Hndle}>
              <FontAwesomeIcon
                icon={faBars}
                className="text-[25px] mt-1 text-electrox-theme-default-menu-title-color"
              />
            </div>
            <div className="image">
              <img
                className="w-[55%]"
                src="https://minimog-4437.kxcdn.com/wp-content/themes/minimog/assets/images/logo/dark-logo.png"
                alt=""
              />
            </div>
          </div>
          <div className="item text-electrox-theme-default-menu-title-color ">
            <div className="mt-1 flex justify-center space-x-5">
              {" "}
              <div className="icon">
                <BsSearch className="text-[26px]" />
              </div>
              <div className="icon">
                <BiUser className="text-[26px]" />
              </div>
              <div className="icon relative">
                <HiOutlineShoppingBag className="text-[26px]" />
                <h3
                  className="bg-electrox-theme-default-menu-title-color z-10 w-[20px] absolute bottom-0 top-4 right-0 left-2 h-[20px] rounded-full text-[14px] 
            grid place-items-center font-[600] text-white"
                >
                  0
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            menubar
              ? "nav-menu absolute space-y-3 z-20  top-0 transition-all bottom-0  duration-1000 left-0 right-0 bg-white"
              : "nav-menu hidden absolute space-y-9 z-20  top-0 transition-all bottom-0  duration-1000 left-0 right-0 bg-white"
          }
        >
          <div className="row flex justify-between bg-electrox-theme-count-number-title-color p-3 pl-[1rem] pr-[1rem]">
            <div className="item justify-center space-x-6 flex">
              <div className="humbar " onClick={Hndle}>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-[26px] text-electrox-theme-default-menu-title-color text-[#33e48] mt-[5px]"
                />
              </div>
            </div>
            <div className="item ">
              <div className="mt-1 flex justify-center space-x-5">
                {" "}
                <div className="icon relative ">
                  <FontAwesomeIcon
                    icon={faCodeCompare}
                    className="rotate-[77deg] text-[25px] text-electrox-theme-default-menu-title-color"
                  />
                  <h3
                    className="bg-electrox-theme-default-menu-title-color w-[23px] 
                absolute top-3 right-0 left-1 h-[23px] rounded-full text-[12px] 
            grid place-items-center font-[600] text-[#fff]"
                  >
                    0
                  </h3>
                </div>
                <div className="icon relative ">
                  <FiHeart className="text-[25px] text-electrox-theme-default-menu-title-color" />
                  <h3
                    className="bg-electrox-theme-default-menu-title-color w-[23px] 
                absolute top-3 right-0 left-1 h-[23px] rounded-full text-[12px] 
            grid place-items-center font-[600] text-[#fff]"
                  >
                    2
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <ul className="space-y-3 justify-center   ">
            <li className=" dropdown border-b p-2 pl-5">
              <div className=" flex justify-between ">
                <a href="">Home</a>
                <IoChevronForwardSharp />
              </div>
            </li>
            <li className=" dropdown border-b p-2 pl-5">
              <div className=" flex justify-between ">
                <a href="">Shop</a>
                <IoChevronForwardSharp />
              </div>
            </li>
            <li className=" dropdown border-b p-2 pl-5">
              <div className=" flex justify-between ">
                <a href="">Products</a>
                <IoChevronForwardSharp />
              </div>
            </li>
          </ul>
          <div className="item p-5 space-y-2 flex flex-col  text-[13px] text-electrox-theme-default-menu-title-color">
            <h3 className="uppercase text-[16px] font-[700] text-electrox-theme-default-menu-title-color">
              need help? contact us
            </h3>
            <div className="icon flex space-x-2  ">
              <FontAwesomeIcon
                icon={faPhone}
                className="mt-1 text-electrox-theme-default-icon-color"
              />

              <h3 className="text-[13px] text-electrox-theme-default-menu-title-color font-[500]">
                (+0800) 123 456 7890
              </h3>
              <div className="w-[1px] h-[1rem] mt-1 bg-[#333e481a] "></div>
            </div>
            <div className="icon flex space-x-2 font-[500]">
              <div>
                <VscMail className="mt-1 text-electrox-theme-default-icon-color text-[17px]" />
              </div>
              <h3>sample@email.com</h3>
            </div>
          </div>
          <div className="">
            <ul className="space-y-3 justify-center text-electrox-theme-default-menu-title-color   ">
              <li className=" dropdown border-b p-2 pl-5">
                <div className=" flex justify-between ">
                  <a href="">
                    L/A <br />
                    En
                  </a>
                  <IoChevronForwardSharp />
                </div>
              </li>
              <li className=" dropdown border-b p-2 pl-5">
                <div className=" flex justify-between ">
                  <a href="">
                    L/A <br />
                    En
                  </a>
                  <IoChevronForwardSharp />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
