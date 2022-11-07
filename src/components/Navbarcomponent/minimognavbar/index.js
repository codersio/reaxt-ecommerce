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
import "../../../Font/globalfont.scss";
import React, { useState } from "react";
import Minimogcarmodal from "../../productdropdowncart/minimog";
import { Link } from "gatsby";
import "./menu.scss";
import Loginmodal from "../../logincomnent/loginmodal";
import Minimogsearch from "../../searchmodal/minimogsearchmodal";
export default function Minimognavbar({
  minimog,
  mainmenu,
  logmodal,
  setLogmodal,
  Minimodata,
}) {
  const [menubar, setMenubar] = useState(false);
  const [searchmodal, setSearchmodal] = useState(false);
  // const [logmodal, setLogmodal] = useState(false);
  const [cartmodal, seCart] = useState(false);
  const Hndle = () => {
    seCart(!menubar);
  };
  const Hndlecartmodal = () => {
    seCart(!cartmodal);
  };
  return (
    <div className="menybar font-minimog-theme-font">
      <Loginmodal logmodal={logmodal} setLogmodal={setLogmodal} />
      <Minimogsearch
        searchmodal={searchmodal}
        setSearchmodal={setSearchmodal}
        logmodal={logmodal}
        setLogmodal={setLogmodal}
      />
      <Minimogcarmodal
        cartmodal={cartmodal}
        Hndlecartmodal={Hndlecartmodal}
        seCart={seCart}
      />
      <div
        className="flex justify-center text-[14px]
       text-minimog-theme-topbar-title-color p-2 bg-minimog-theme-topbar-bg-color"
      >
        <h3 className="uppercase font-[500] tracking-[.05em]">
          cool new color: sterling so worth it
        </h3>
      </div>
      <div className=" md:flex hidden minimog-nav  bg-white p-3 space-x-6 w-full">
        <div className="item">
          <Link to="/Minimogtheme/Homepage">
            {" "}
            <img
              className="w-[50%] ml-10"
              src="https://minimog-4437.kxcdn.com/wp-content/themes/minimog/assets/images/logo/dark-logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="item text-center text-minimog-theme-menu-title-color  w-[50%] ">
          <div className="nav ">
            <ul
              className="flex space-x-8 
            justify-center mt-3 text-[16px] font-[500]"
            >
              {Minimodata.mainmenu.map((item) => (
                <li className="dropdown">
                  <p className="flex space-x-1 ">
                    <Link to="/Minimogtheme/mshopp">
                      <span> {item.name}</span>
                    </Link>

                    {/*<span><IoIosArrowDown className="mt-1 text-[12px]" /></span>*/}
                  </p>
                  {/*<div className="dropdown-menu text-[#666] space-x-80  p-10 w-full left-0 shadow-xl hidden  right-0 bg-white absolute">*/}
                  {/*  {item.submenu &&*/}
                  {/*    item.submenu.map((sub) => (*/}
                  {/*      <div className="item space-y-2 text-center ">*/}
                  {/*        <ul className="space-y-5">*/}
                  {/*          <li>*/}
                  {/*            <a href="">{sub.title}</a>*/}
                  {/*          </li>*/}
                  {/*        </ul>*/}
                  {/*      </div>*/}
                  {/*    ))}*/}
                  {/*</div>*/}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="item  w-[25%] text-[25px] text-minimog-theme-menu-icon-color">
          <div className="mt-3 flex  justify-center space-x-8">
            <div
              className="grid place-items-center"
              onClick={() => setLogmodal(!logmodal)}
            >
              <FaRegUser className="text-[20px]" />
            </div>
            <div className="  " onClick={() => setSearchmodal(!searchmodal)}>
              <BsSearch className="text-[20px] " />
            </div>
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
                onClick={Hndlecartmodal}
              />
              <div
                className="bg-minimog-theme-menu-icon-number-bg-color -top-2 right-0
               left-4 bottom-2 absolute text-[13px] font-[800]  rounded-full text-minimog-theme-menu-icon-number-color w-[20px] text-center h-[20px] "
              >
                <h3 className="text-center "> 1</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden  block mobilemenu p-3 pl-5 pr-8 justify-center bg-white">
        <div className="row flex justify-between ">
          <div className="item  space-x-4 flex">
            <div className="humbar " onClick={Hndle}>
              <FontAwesomeIcon icon={faBars} className="text-[18px]" />
            </div>
            <div className="image">
              <img
                className="w-[35%]"
                src="https://minimog-4437.kxcdn.com/wp-content/themes/minimog/assets/images/logo/dark-logo.png"
                alt=""
              />
            </div>
          </div>
          <div className="item ">
            <div className="mt-1 flex justify-center space-x-5">
              {" "}
              <BsSearch className="text-[20px]" />
              <div className=" relative">
                {" "}
                <MdOutlineShoppingBag className="text-[25px]" />
                <div
                  className="bg-minimog-theme-menu-icon-number-bg-color -top-2 right-0
               left-4 bottom-2 absolute text-[13px] font-[800]  rounded-full text-minimog-theme-menu-title-color w-[20px] text-center h-[20px] "
                >
                  <h3 className="text-center "> 1</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            menubar
              ? "nav-menu z-40 space-y-5 absolute top-0 transition-all bottom-0 p-4 duration-1000 left-0 right-0 bg-opacity-75 bg-black"
              : "hidden -left-[80px]"
          }
        >
          <div
            className={
              menubar
                ? "nav-menu space-y-9 absolute top-0 transition-all bottom-0 p-4 duration-1000 left-0 right-28 bg-white"
                : "hidden -left-[80px]"
            }
          >
            <ul className="space-y-8 justify-center mt-5 text-minimog-theme-menu-title-color">
              {Minimodata.mainmenu.map((item) => (
                <li className=" dropdown">
                  <a href="">{item.name}</a>
                  <ul className="dropdown-menu">
                    {item.submenu &&
                      item.submenu.map((sub) => <li>{sub.title}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
            <div className="log space-y-4">
              <input
                onClick={() => setLogmodal(!logmodal)}
                type="button"
                value="Login"
                className="w-full rounded-md bg-minimog-theme-button-bg-color text-minimog-theme-default-title-color p-2"
              />
              <input
                type="button"
                value="Register"
                className="w-full rounded-md border text-minimog-theme-button-title-color border-minimog-theme-border-color  p-2"
              />
            </div>
          </div>
          <div
            className="absolute top-0 right-9 text-[23px] text-white"
            onClick={Hndle}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      </div>
    </div>
  );
}
