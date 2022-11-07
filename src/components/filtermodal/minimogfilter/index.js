import React, { useState } from "react";
import Minimogshop from "../../shopall/minimogshop";
export default function Minimogfilter({ filterminimog, setFilterminimog }) {
  //   const [filterminimog, setFilterminimog] = useState(false);
  return (
    <div className="minimogfilter relative">
      {/* <button onClick={() => setFilterminimog(!filterminimog)}>click me</button> */}
      <div
        className={
          filterminimog
            ? "bg-black z-40 bg-opacity-75 overflow-hidden top-0 right-0 left-0 bottom-0 w-[100vw] h-[100vh] fixed"
            : "hidden"
        }
      >
        <div
          className="modal w-[89%]
        h-[100vh]
         scrollbar-thin scrollbar-thumb-[#aaa]
          scrollbar-track-[#eee]  overflow-y-scroll 
           filter-modal absolute top-0 left-0  bg-white"
        >
          <Minimogshop />
        </div>
      </div>
    </div>
  );
}
