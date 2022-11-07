import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../Font/globalfont.scss";

import React from "react";

export default function Minimogcategory() {
  return (
    <ScrollContainer
      horizontal={true}
      activationDistance={4}
      className="minimogcat-container flex p-5 font-Jost"
    >
      <div className="minimog-item">
        <div className="image relative p-4">
          <img
            src="https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/cat_01.jpg"
            alt=""
          />
          <div className="title absolute bottom-8 right-8 left-8 flex justify-between">
            <div className="itme">
              <h3 className="text-[24px] text-black">Sneakers</h3>
              <h3 className="text-[16px] text-[#666]">11 items</h3>
            </div>
            <div className="item ">
              <div className="btt w-[40px] grid place-items-center h-[40px] bg-white text-black rounded-full">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="minimog-item">
        <div className="image relative p-4">
          <img
            src="https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/cat_01.jpg"
            alt=""
          />
          <div className="title absolute bottom-8 right-8 left-8 flex justify-between">
            <div className="itme">
              <h3 className="text-[24px] text-black">Sneakers</h3>
              <h3 className="text-[16px] text-[#666]">11 items</h3>
            </div>
            <div className="item ">
              <div className="btt w-[40px] grid place-items-center h-[40px] bg-white text-black rounded-full">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="minimog-item">
        <div className="image relative p-4">
          <img
            src="https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/cat_01.jpg"
            alt=""
          />
          <div className="title absolute bottom-8 right-8 left-8 flex justify-between">
            <div className="itme">
              <h3 className="text-[24px] text-black">Sneakers</h3>
              <h3 className="text-[16px] text-[#666]">11 items</h3>
            </div>
            <div className="item ">
              <div className="btt w-[40px] grid place-items-center h-[40px] bg-white text-black rounded-full">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="minimog-item">
        <div className="image relative p-4">
          <img
            src="https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/cat_01.jpg"
            alt=""
          />
          <div className="title absolute bottom-8 right-8 left-8 flex justify-between">
            <div className="itme">
              <h3 className="text-[24px] text-black">Sneakers</h3>
              <h3 className="text-[16px] text-[#666]">11 items</h3>
            </div>
            <div className="item ">
              <div className="btt w-[40px] grid place-items-center h-[40px] bg-white text-black rounded-full">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollContainer>
  );
}
