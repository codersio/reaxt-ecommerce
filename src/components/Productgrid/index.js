import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faAddressBook,
  faAirFreshener,
  faAmbulance,
  faAtom,
  faBook,
  faArrowLeft,
  faBrands,
  faBus,
  faCoins,
  faDice,
} from "@fortawesome/free-solid-svg-icons";

import "../../scss/global.scss";
export default function Productgrid({
  desktop,
  mobile,
  // colors = true,
  color,
  colors,
  columnpadding,
}) {
  // const colorCla = colors[color];
  return (
    <>
      <div
        className={` border  p-${columnpadding} grid grid-cols-${mobile} md:grid-cols-${desktop} `}
      >
        <div
          // style={{ fontFamily: `var(--quicksand-font)` }}
          className={` font-quicksand-font
           text-[color:var(--primary-color)]  
           border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
        >
          Lorem ipsum dolor sit amet consectetur.
          <FontAwesomeIcon icon={faArrowLeft} />
          <FontAwesomeIcon icon={faBook} />
        </div>
      </div>
      {/* {desktop > 10 || mobile > 3 ? (
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-3">
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${
              colors ? colors : colors
            }]`}
          >
            <div>hello world</div>
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
        </div>
      ) : (
        <div
          className={` p-${columnpadding} md:p-${columnpadding} grid grid-cols-${mobile} md:grid-cols-${desktop} gap-3`}
        >
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
          <div
            className={` border-2 w-32 h-32 row grid place-items-center text-[${colors}]`}
          >
            hello world
          </div>
        </div>
      )} */}
    </>
  );
}
Productgrid.propTypes = {
  colors: PropTypes.string,
};
