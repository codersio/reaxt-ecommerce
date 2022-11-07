import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Minimogshop() {
  const [sidebardropdown, setSidebarDropdown] = useState(true);
  const [sidebardropdowncolor, setSidebardropdowncolor] = useState(true);
  const [sidebardropdowncategory, setSidebardropdowncategory] = useState(true);
  const [sidebardropdownprice, setSidebardropdownprice] = useState(true);
  const [sidebardropdownbrand, setSidebardropdownbrand] = useState(true);
  const Handlesidebar = () => {
    setSidebarDropdown(!sidebardropdown);
  };
  const Handlesidebarcolor = () => {
    setSidebardropdowncolor(!sidebardropdowncolor);
  };
  const Handlesidebarcategory = () => {
    setSidebardropdowncategory(!sidebardropdowncategory);
  };
  const Handlesidebarprice = () => {
    setSidebardropdownprice(!sidebardropdownprice);
  };
  const Handlesidebarbrand = () => {
    setSidebardropdownbrand(!sidebardropdownbrand);
  };
  return (
    <div className="filtersofminimog font-minimog-theme-font  ">
      <div className="item space-y-10  p-8   ">
        <h3 className="text-[34px] text-minimog-theme-title-color">Filters</h3>
        <div className="sizeall min-w-fit space-y-4">
          <div className="flex justify-between">
            <h3 className="text-[18px] text-minimog-theme-title-color font-[600]">
              Size
            </h3>
            {sidebardropdown ? (
              <FontAwesomeIcon icon={faMinus} onClick={Handlesidebar} />
            ) : (
              <FontAwesomeIcon icon={faPlus} onClick={Handlesidebar} />
            )}
          </div>
          <div
            className={
              sidebardropdown
                ? "item  flex flex-wrap  duration-1000 ease-in  "
                : "hidden  duration-1000 ease-out"
            }
          >
            <div className="m-1">
              <button className="border rounded-lg p-3 text-[18px]">
                Iphone 11 Pro case
              </button>
            </div>
            <div className="m-1">
              <button className="border rounded-lg p-3 text-[18px]">
                Iphone 8 case
              </button>
            </div>
            <div className="m-1">
              <button className="border rounded-lg p-3 text-[18px]">
                Iphone 8 case
              </button>
            </div>
            <div className="m-1">
              <button className="border rounded-lg p-3 text-[18px]">
                Iphone 8 case
              </button>
            </div>
            <div className="m-1">
              <button className="border rounded-lg p-3 text-[18px]">Xl</button>
            </div>
          </div>
        </div>

        {/* ENDOF PRODUC SIZE */}
        <div className="color space-y-4">
          <div className="flex justify-between">
            <h3 className="text-[18px] text-minimog-theme-title-color font-[600]">
              Color
            </h3>
            {sidebardropdowncolor ? (
              <FontAwesomeIcon icon={faMinus} onClick={Handlesidebarcolor} />
            ) : (
              <FontAwesomeIcon icon={faPlus} onClick={Handlesidebarcolor} />
            )}
          </div>
          <div className="item ">
            <div
              className={
                sidebardropdowncolor
                  ? "div flex flex-wrap duration-700 transition-transform"
                  : "hidden duration-700 transition-transform"
              }
            >
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-green-500 rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-blue-600 rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-pink-600 rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-yellow-600 rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-gray-600 rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        {/* ENDOF PRODUC COLOR */}

        <div className="category space-y-4">
          <div className="flex justify-between">
            <h3 className="text-[18px] text-minimog-theme-title-color font-[600]">
              Categories
            </h3>
            {sidebardropdowncategory ? (
              <FontAwesomeIcon icon={faMinus} onClick={Handlesidebarcategory} />
            ) : (
              <FontAwesomeIcon icon={faPlus} onClick={Handlesidebarcategory} />
            )}
          </div>
          <div className="item h-[14rem] scrollbar-thin scrollbar-thumb-[#aaa] scrollbar-track-[#eee]  overflow-y-scroll  ">
            <ul className="text-[16px] space-y-2 text-minimog-theme-default-title-color">
              <li>
                <a href="">Houseware (5)</a>
              </li>
              <li>
                <a href="">Juice (11)</a>
              </li>
              <li>
                <a href="">Mirror (8)</a>
              </li>
              <li>
                <a href="">Nail Polishing (20)</a>
              </li>
              <li>
                <a href="">Organic (11)</a>
              </li>
              <li>
                <a href="">Pet (5)</a>
              </li>
              <li>
                <a href="">Pizza (9)</a>
              </li>
              <li>
                <a href="">POD (14)</a>
              </li>
              <li>
                <a href="">Skateboards (16)</a>
              </li>
              <li>
                <a href="">Skincare (4)</a>
              </li>
              <li>
                <a href="">Socks (8)</a>
              </li>
            </ul>
          </div>
        </div>

        {/* ENDOF PRODUC CATEGORY */}
        <div className="Price space-y-4">
          <div className="flex justify-between">
            <h3 className="text-[18px] text-minimog-theme-title-color font-[600]">
              Price
            </h3>
            {sidebardropdownprice ? (
              <FontAwesomeIcon icon={faMinus} onClick={Handlesidebarprice} />
            ) : (
              <FontAwesomeIcon icon={faPlus} onClick={Handlesidebarprice} />
            )}
          </div>
          <div className="item">
            <ul
              className={
                sidebardropdownprice
                  ? "text-[16px] space-y-2 text-minimog-theme-default-title-color"
                  : "hidden"
              }
            >
              <li>
                <a href="">$0.00 – $470.00</a>
              </li>
              <li>
                <a href="">$470.00 – $940.00</a>
              </li>
              <li>
                <a href="">$940.00 – $1,410.00</a>
              </li>
              <li>
                <a href="">$1,410.00 – $1,880.00</a>
              </li>
              <li>
                <a href="">$1,880.00 – $2,350.00</a>
              </li>
            </ul>
          </div>
        </div>
        {/* ENDOF PRODUC price */}
        <div className="Brand space-y-4">
          <div className="flex justify-between">
            <h3 className="text-[18px] text-minimog-theme-title-color font-[600]">
              Brand
            </h3>
            {sidebardropdownbrand ? (
              <FontAwesomeIcon icon={faMinus} onClick={Handlesidebarbrand} />
            ) : (
              <FontAwesomeIcon icon={faPlus} onClick={Handlesidebarbrand} />
            )}
          </div>
          <div className="item">
            <ul
              className={
                sidebardropdownbrand
                  ? "text-[16px] space-y-2 text-minimog-theme-default-title-color"
                  : "hidden"
              }
            >
              <li>
                <a href="">Abby (41)</a>
              </li>
              <li>
                <a href="">Brook (32)</a>
              </li>
              <li>
                <a href="">Learts (5)</a>
              </li>
              <li>
                <a href="">Minimog (350)</a>
              </li>
              <li>
                <a href="">Retrolie (26)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
