import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Addressmodal() {
  return (
    <div
      className=" bg-black bg-opacity-75 
     p-[24rem] grid place-items-center h-auto
        m-address absolute top-0 right-0 bottom-0 left-0"
    >
      <div
        className="addressbo h-[89%]
       space-y-4 rounded-t-xl rounded-b-xl 
       p-[1rem] 
       absolute bg-white w-[57%]"
      >
        <div
          className="absolute top-0
         rounded-full text-[20px] right-0
          bg-blue-500 
           w-[60px] h-[60px] "
        >
          <FontAwesomeIcon icon={faRemove} />
        </div>
        <h3 className="text-[30px] text-[#333e48] font-[600] ">
          Add a new address
        </h3>
        <div className="flex space-x-3 h-[80%] overflow-y-scroll">
          <div className="label space-y-[2.8rem] w-[40%]  p-5">
            <h3>first name</h3>
            <h3>Last name</h3>
            <h3>Company</h3>
            <h3>Address 1</h3>
            <h3>Address 2</h3>
            <h3>City</h3>
            <h3>Country/region</h3>
            <h3>Postal/ZIP code</h3>
            <h3>Postal/ZIP code</h3>
          </div>
          <div className="input-box w-[60%] space-y-5">
            <div>
              <input type="text" className="w-full rounded-3xl p-3" />
            </div>
            <div>
              <input type="text" className="w-full rounded-3xl p-3" />
            </div>
            <div>
              <input type="text" className="w-full rounded-3xl p-3" />
            </div>
            <div>
              <input type="text" className="w-full rounded-3xl p-3" />
            </div>
            <div>
              <input type="text" className="w-full rounded-3xl p-3" />
            </div>
            <div>
              <input type="text" className="w-full rounded-3xl p-3" />
            </div>
            <div>
              <input type="text" className="w-full rounded-3xl p-3" />
            </div>
            <div>
              <input type="text" className="w-full rounded-3xl p-3" />
            </div>
            <div>
              <input type="text" className="w-full rounded-3xl p-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
