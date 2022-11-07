import React, { useState } from "react";
import "./index.scss";
import PropsType from "prop-types";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Scrollcategory({ title, titleColor, borderColor }) {
  const [buttonClick, SetButton] = useState(true);
  const ClickButton = () => {
    SetButton(!buttonClick);
  };

  return (
    <div>
      <ScrollContainer horizontal={true} className="container flex ">
        <div className="row w-full">
          {buttonClick ? (
            <div
              onClick={ClickButton}
              style={{ color: titleColor, borderColor: borderColor }}
              className=" text-lg m-2 rounded-full text-center border-2 row align-middle w-1/4  text-black p-3 "
            >
              {title}
            </div>
          ) : (
            <div
              onClick={ClickButton}
              style={{ color: titleColor, borderColor: borderColor }}
              className=" border-cyan-900 text-lg m-2 rounded-full text-center border-2 row align-middle w-1/4 font-bold text-black p-3 "
            >
              {title}
            </div>
          )}
          <div>content</div>
        </div>
      </ScrollContainer>
    </div>
  );
}

Scrollcategory.propType = {
  titleColor: PropsType.string,
  borderColor: PropsType.string,
  title: PropsType.string,
};
