import {
  faCartFlatbed,
  faStamp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Nestproduct() {
  return (
    <div className="nest-container font---nest-theme-font grid gap-3 grid-cols-1 md:grid-cols-5 p-5">
      <div className="nest-item border rounded-3xl">
        <div className="image relative overflow-hidden">
          <img
            className="rounded-3xl"
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
            alt=""
          />
          <h3 className="deal absolute text-white top-0 left-0 w-[4rem] rounded-tl-3xl text-center rounded-br-3xl bg-pink-500 p-1">
            Hot
          </h3>
        </div>
        <div className=" p-5 space-y-2">
          <p className="text-[12px] text-nest-theme-category-color">Snack</p>
          <h3 className="text-nest-theme-title-color text-[16px] font-[700]">
            Seeds of Change Organic Quinoa, Brown, & Red Rice
          </h3>
          <div className="review text-[14px]">
            <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
            <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
            <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
            <FontAwesomeIcon icon={faStar} className="text-gray-500" />
          </div>
          <h3 className="text-[14px] font-Lato font-[500] text-nest-theme-ordersby-color">
            By <span className="text-nest-theme-category-color">NestFood</span>
          </h3>
          <div className="p flex justify-between">
            <h3 className="text-nest-theme-price-color mt-1 font-[800] text-[18px]">
              $28.85{" "}
              <span className="ml-2 text-[14px] text-nest-theme-mrp-color">
                <s>$32.8</s>
              </span>
            </h3>
            <button
              className="bg-nest-theme-cart-bg-color space-x-1 rounded-lg p-2 
            font-[600] w-[40%]  text-nest-theme-cart-title-color text-[14px]"
            >
              {" "}
              <FontAwesomeIcon icon={faCartFlatbed} /> <span>Add</span>{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="nest-item border rounded-3xl">
        <div className="image relative overflow-hidden">
          <img
            className="rounded-3xl"
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
            alt=""
          />
          <h3 className="deal absolute text-white top-0 left-0 w-[4rem] rounded-tl-3xl text-center rounded-br-3xl bg-pink-500 p-1">
            Hot
          </h3>
        </div>
        <div className=" p-5 space-y-2">
          <p className="text-[12px] text-[#adadad]">Snack</p>
          <h3 className="text-[#253d4e] text-[16px] font-[700]">
            Seeds of Change Organic Quinoa, Brown, & Red Rice
          </h3>
          <div className="review text-[14px]">
            <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
            <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
            <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
            <FontAwesomeIcon icon={faStar} className="text-gray-500" />
          </div>
          <h3 className="text-[14px] font-Lato font-[500] text-[#b6b6b6]">
            By <span className="text-[#3bb77e]">NestFood</span>
          </h3>
          <div className="p flex justify-between">
            <h3 className="text-[#3bb77e] mt-1 font-[800] text-[18px]">
              $28.85{" "}
              <span className="ml-2 text-[14px] text-[#adadad]">
                <s>$32.8</s>
              </span>
            </h3>
            <button className="bg-[#def9ec] space-x-1 rounded-lg p-2 font-[600] w-[40%]  text-[#3bb77e] text-[14px]">
              {" "}
              <FontAwesomeIcon icon={faCartFlatbed} /> <span>Add</span>{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="nest-item border rounded-3xl">
        <div className="image relative overflow-hidden">
          <img
            className="rounded-3xl"
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
            alt=""
          />
          <h3 className="deal absolute text-white top-0 left-0 w-[4rem] rounded-tl-3xl text-center rounded-br-3xl bg-pink-500 p-1">
            Hot
          </h3>
        </div>
        <div className=" p-5 space-y-2">
          <p className="text-[12px] text-[#adadad]">Snack</p>
          <h3 className="text-[#253d4e] text-[16px] font-[700]">
            Seeds of Change Organic Quinoa, Brown, & Red Rice
          </h3>
          <div className="review text-[14px]">
            <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
            <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
            <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
            <FontAwesomeIcon icon={faStar} className="text-gray-500" />
          </div>
          <h3 className="text-[14px] font-Lato font-[500] text-[#b6b6b6]">
            By <span className="text-[#3bb77e]">NestFood</span>
          </h3>
          <div className="p flex justify-between">
            <h3 className="text-[#3bb77e] mt-1 font-[800] text-[18px]">
              $28.85{" "}
              <span className="ml-2 text-[14px] text-[#adadad]">
                <s>$32.8</s>
              </span>
            </h3>
            <button className="bg-[#def9ec] space-x-1 rounded-lg p-2 font-[600] w-[40%]  text-[#3bb77e] text-[14px]">
              {" "}
              <FontAwesomeIcon icon={faCartFlatbed} /> <span>Add</span>{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="nest-item border rounded-3xl">
        <div className="image relative overflow-hidden">
          <img
            className="rounded-3xl"
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
            alt=""
          />
          <h3 className="deal absolute text-white top-0 left-0 w-[4rem] rounded-tl-3xl text-center rounded-br-3xl bg-pink-500 p-1">
            Hot
          </h3>
        </div>
        <div className=" p-5 space-y-2">
          <p className="text-[12px] text-[#adadad]">Snack</p>
          <h3 className="text-[#253d4e] text-[16px] font-[700]">
            Seeds of Change Organic Quinoa, Brown, & Red Rice
          </h3>
          <div className="review text-[14px]">
            <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
            <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
            <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
            <FontAwesomeIcon icon={faStar} className="text-gray-500" />
          </div>
          <h3 className="text-[14px] font-Lato font-[500] text-[#b6b6b6]">
            By <span className="text-[#3bb77e]">NestFood</span>
          </h3>
          <div className="p flex justify-between">
            <h3 className="text-[#3bb77e] mt-1 font-[800] text-[18px]">
              $28.85{" "}
              <span className="ml-2 text-[14px] text-[#adadad]">
                <s>$32.8</s>
              </span>
            </h3>
            <button className="bg-[#def9ec] space-x-1 rounded-lg p-2 font-[600] w-[40%]  text-[#3bb77e] text-[14px]">
              {" "}
              <FontAwesomeIcon icon={faCartFlatbed} /> <span>Add</span>{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="nest-item border rounded-3xl">
        <div className="image relative overflow-hidden">
          <img
            className="rounded-3xl"
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
            alt=""
          />
          <h3 className="deal absolute text-white top-0 left-0 w-[4rem] rounded-tl-3xl text-center rounded-br-3xl bg-pink-500 p-1">
            Hot
          </h3>
        </div>
        <div className=" p-5 space-y-2">
          <p className="text-[12px] text-[#adadad]">Snack</p>
          <h3 className="text-[#253d4e] text-[16px] font-[700]">
            Seeds of Change Organic Quinoa, Brown, & Red Rice
          </h3>
          <div className="review text-[14px]">
            <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
            <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
            <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
            <FontAwesomeIcon icon={faStar} className="text-gray-500" />
          </div>
          <h3 className="text-[14px] font-Lato font-[500] text-[#b6b6b6]">
            By <span className="text-[#3bb77e]">NestFood</span>
          </h3>
          <div className="p flex justify-between">
            <h3 className="text-[#3bb77e] mt-1 font-[800] text-[18px]">
              $28.85{" "}
              <span className="ml-2 text-[14px] text-[#adadad]">
                <s>$32.8</s>
              </span>
            </h3>
            <button className="bg-[#def9ec] space-x-1 rounded-lg p-2 font-[600] w-[40%]  text-[#3bb77e] text-[14px]">
              {" "}
              <FontAwesomeIcon icon={faCartFlatbed} /> <span>Add</span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
