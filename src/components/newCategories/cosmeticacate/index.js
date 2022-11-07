import React from "react";

export default function Cosmeticacate() {
  return (
    <div className="cosmetica-container md:space-y-0 space-y-4 md:flex md:space-x-8 font-Poppins">
      <div className="item space-y-5">
        <div className="image relative">
          <img src="https://i.postimg.cc/R07tvd48/image.jpg" alt="" />
          <div className="title absolute bottom-4 flex justify-between right-4 left-3">
            <div className="">
              <h3 className="text-black font-[500]">Collection Summer</h3>
              <p className="text-[14px]">
                consectetur adipisicing elit. Ipsa!{" "}
              </p>
            </div>
            <div className="btt">
              <div className="bt bg-black text-gray-300 p-2 w-[100%] text-[14px] rounded-3xl">
                Shop now
              </div>
            </div>
          </div>
        </div>
        <div className="image relative">
          <img src="https://i.postimg.cc/Bn45Xtnt/image-1.jpg" alt="" />
          <h3 className="absolute right-8 bottom-[5rem] font-[600] text-[1.8rem]">
            Cosmetic <br />
            <span className="flex space-x-2">
              {" "}
              <span className="">
                {" "}
                <div className="w-[40px] h-[2px] bg-black mt-4"></div>
              </span>{" "}
              <span>Nature</span>
            </span>
          </h3>
        </div>
      </div>
      <div className="item space-y-5">
        <img src="https://i.postimg.cc/Bn45Xtnt/image-1.jpg" alt="" />
        <img src="https://i.postimg.cc/R07tvd48/image.jpg" alt="" />
      </div>
    </div>
  );
}
