import {
  faArrowRight,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../Font/globalfont.scss";

export default function Electroxcate() {
  return (
    <div className="electrox-container grid grid-cols-1 md:grid-cols-4 gap-2 font-Inter">
      <div className="row flex space-x-4 bg-[#F7F7F7] w-[100%] p-5">
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0265/3493/6627/products/lgphone.png?v=1649399950&width=180"
            alt=""
          />
        </div>
        <div className="item space-y-3">
          <h3 className="text-[1.6rem] leading-[28px] font-[200]">
            Catch big <br /> <span className="font-[400]">Deals</span>
            on the <br />
            Cameras
          </h3>
          <div className="s flex space-x-2">
            <h3 className="font-[600]">Shop now</h3>
            <div
              className="icon w-[30px] h-[30px] text-white bg-[#fed700]
             grid place-items-center rounded-full"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
      <div className="row flex space-x-4 bg-[#F7F7F7] w-[100%] p-5">
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0265/3493/6627/products/lgphone.png?v=1649399950&width=180"
            alt=""
          />
        </div>
        <div className="item space-y-3">
          <h3 className="text-[1.6rem] leading-[28px] font-[200]">
            Catch big <br /> <span className="font-[400]">Deals</span>
            on the <br />
            Cameras
          </h3>
          <div className="s flex space-x-2">
            <h3 className="font-[600]">Shop now</h3>
            <div
              className="icon w-[30px] h-[30px] text-white bg-[#fed700]
             grid place-items-center rounded-full"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
      <div className="row flex space-x-4 bg-[#F7F7F7] w-[100%] p-5">
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0265/3493/6627/products/lgphone.png?v=1649399950&width=180"
            alt=""
          />
        </div>
        <div className="item space-y-3">
          <h3 className="text-[1.6rem] leading-[28px] font-[200]">
            Catch big <br /> <span className="font-[400]">Deals</span>
            on the <br />
            Cameras
          </h3>
          <div className="s flex space-x-2">
            <h3 className="font-[600]">Shop now</h3>
            <div
              className="icon w-[30px] h-[30px] text-white bg-[#fed700]
             grid place-items-center rounded-full"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
      <div className="row flex space-x-4 bg-[#F7F7F7] w-[100%] p-5">
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0265/3493/6627/products/lgphone.png?v=1649399950&width=180"
            alt=""
          />
        </div>
        <div className="item space-y-3">
          <h3 className="text-[1.6rem] leading-[28px] font-[200]">
            Catch big <br /> <span className="font-[400]">Deals</span>
            on the <br />
            Cameras
          </h3>
          <div className="s flex space-x-2">
            <h3 className="font-[600]">Shop now</h3>
            <div
              className="icon w-[30px] h-[30px] text-white bg-[#fed700]
             grid place-items-center rounded-full"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
