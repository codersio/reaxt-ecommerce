import React, { useState } from "react";
import "./index.scss";
import PropsType from "prop-types";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Categorywithicon({
  background,
  title,
  titleColor,
  borderColor,
}) {
  const [buttonClick, SetButton] = useState(true);
  const ClickButton = () => {
    SetButton(!buttonClick);
  };
  return (
    <ScrollContainer className="scroll-container" horizontal="true">
      <div>
        <ScrollContainer horizontal={true} className="container flex ">
          {buttonClick ? (
            <div
              onClick={ClickButton}
              style={{
                color: titleColor,
                borderColor: borderColor,
                // backgroundColor: background,
              }}
              className="pointer-events-auto  text-lg m-2 rounded-2xl text-center border-2 row align-middle w-1/4 text-black p-3 "
            >
              {title}
            </div>
          ) : (
            <div
              onClick={ClickButton}
              style={{
                color: titleColor,
                borderColor: borderColor,
                // backgroundColor: background,
              }}
              className="text-white bg-sky-900  text-lg m-2 rounded-2xl text-center border-2 row align-middle w-1/4 pointer-events-auto p-3 "
            >
              {title}
            </div>
          )}
        </ScrollContainer>
      </div>
    </ScrollContainer>
  );
}

Categorywithicon.propType = {
  titleColor: PropsType.string,
  borderColor: PropsType.string,
  title: PropsType.string,
  background: PropsType.string,
};
