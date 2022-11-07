import { faFaceGrinWide } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faEllipsis,
  faGrip,
  faMinus,
  faPlus,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { BsGrid3X3Gap } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
export default function Electrox() {
  const [dropdwn, setDropdown] = useState(false);

  return (
    <div className="font-Inter md:p-28 md:pl-20 md:pr-20 md:space-y-4 p-9">
      <div className="w-full flex bg-[#f0f2f5] text-[#103178] space-x-4 text-[18px] p-2">
        <div>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div>
          <BsGrid3X3Gap className="mt-[0.3rem] text-[16px]" />
        </div>
      </div>
      <div className="md:mt-1 mt-4 w font-Inter flex justify-between">
        <div
          onClick={() => setDropdown(!dropdwn)}
          className="item flex space-x-3"
        >
          {dropdwn ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faAngleUp} />
          )}

          <h3 className="uppercase text-[12px] font-bold text-[#000]">
            {" "}
            my wishlist
          </h3>
          <p className="text-[12px]">2</p>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
      </div>
      {dropdwn ? (
        <div className=" md:mt-1 mt-8 font-Inter md:p-0 pt-5 border border-[#f2f2f2] rounded-md text-[14px] text-[#333e48] electrox-wishlist flex md:flex-nowrap flex-wrap md:justify-center">
          <div className="item w-[50%] md:w-[35%]  grid place-items-center">
            <div className="image relative w-[79%] md:w-[55%]">
              <img
                className="w-[100%] block m-auto"
                src="https://cdn.shopify.com/s/files/1/0265/3493/6627/products/ipadgreen_large.png?v=1649393790"
                alt=""
              />
              <div className=" bg-white absolute top-0 right-0 text-[25px]">
                <GrClose />
              </div>
            </div>
          </div>
          <div className="item grid place-items-center w-[50%] text-center">
            <div className=" space-y-3">
              <div>
                <h3 className="text-[#333e48] text-[16px] font-bold">
                  Faxtex Product Sample
                </h3>
                <p>In stock</p>
              </div>

              <div className=" block m-auto rounded-3xl border p-3 w-[60%]">
                M / Blue
              </div>
            </div>
          </div>
          <div className="item md:mt-auto mt-5 space-y-6 md:border-l border-t p-9 w-[100%] md:w-[25%] text-center">
            <h3 className="text-[30px] font-[600]">$11.00</h3>
            <div className="btn flex justify-between bg-[#f0f2f5] rounded-3xl p-3">
              <div className="icon">
                <FontAwesomeIcon icon={faMinus} />
              </div>
              <div className="conten">1</div>
              <div className="icon">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
            <h3>Add To Cart</h3>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
