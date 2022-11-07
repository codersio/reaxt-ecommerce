import React from "react";
import "./style.scss";
import PropsTyeps from "prop-types";
export default function Categoryimagetexts({
  name,
  image,
  titleColor,
  backGround,
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="row  m-1 w-full text-center">
        <div className="relative grid place-items-center">
          <img className=" h-5/6  rounded-lg" src={image} />

          {/* <h3 className="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3> */}
          <div
            style={{ backgroundColor: backGround }}
            className="  bg-opacity-50 absolute bg-slate-200 w-3/4 h-10 bottom-10 "
          >
            <h3
              style={{ color: titleColor }}
              className=" text-black   text-2xl text-green-300   text-center"
            >
              {name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

Categoryimagetexts.prototype = {
  image: PropsTyeps.string,
  name: PropsTyeps.string,
  titleColor: PropsTyeps.string,
  backGround: PropsTyeps.string,
};
