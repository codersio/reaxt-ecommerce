import React from "react";
import PropsTypes from "prop-types";
import "./style.scss";
export default function SquareGridcategory({ name, image, titleColor, color }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
      <div className="row  m-1 w-full text-center">
        <div className="shadow-lg rounded-lg">
          <img className="rounded-lg" src={image} alt="" />
        </div>

        <p style={{ color: titleColor }} className="mt-6 text-base md:text-xl">
          {name}
        </p>
      </div>
    </div>
  );
}

SquareGridcategory.propsTypes = {
  name: PropsTypes.string.isRequired,
  titleColor: PropsTypes.string,
};
