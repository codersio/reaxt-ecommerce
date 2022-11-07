import React from "react";
import PropType from "prop-types";
export default function Productcartpage6({ product }) {
  return (
    <>
      <div className="container  grid grid-cols-2 md:grid-cols-4 gap-3 ">
        <div className="row  shadow-lg">
          <div className="image relative">
            <img
              src="https://lusion.arrowtheme.com/wp-content/uploads/2020/10/minimalist-img-14.jpg.webp"
              alt=""
            />
            <div
              // onClick={ClickButton}
              style={
                {
                  // marginRight: "-15px",
                  // marginBottom: "-10px",
                  // backgroundColor: buttonBackground,
                }
              }
              className=" absolute left-3 shadow-lg rounded-full bg-slate-200 top-5  text-5xl text-yellow-500   w-9 text-center h-9 leading-6  text-black"
            >
              +
            </div>
            <div className=" absolute bottom-1 ml-2 font-bold">
              <h3 className=" ">Nik Blazer nid</h3>
              <div className=" flex justify-between right-0 ">
                <div>
                  {" "}
                  <h3>$ 2345</h3>
                </div>{" "}
                <div className="flex ml-16">
                  <div className=" w-6 h-6 bg-black rounded-full"></div>
                  <div className="ml-1 w-6 h-6 bg-blue-900 rounded-full"></div>
                </div>
              </div>

              {/* <button>Add To Cart</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Productcartpage6.propType = {
  product: PropType.string,
};
