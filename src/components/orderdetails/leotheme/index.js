import React from "react";
import "../../../Font/globalfont.scss";
export default function Leoorder() {
  return (
    <div className="p-10 text-[14px] text-[#666]">
      <div className="leoorder font-Raleway flex border shadow-lg">
        <div className="row w-[60%] border-r p-3 space-y-6">
          <table className="w-full">
            <thead>
              <tr className="text-[15px]">
                <th className="w-[13%] p-1 text-black ">ORDER ITEMS</th>
                <th className="w-[30%] p-1 text-black "></th>
                <th className="w-[20%] p-1 text-black  text-left">
                  UNIT PRICE
                </th>
                <th className="w-[20%] p-1 text-black  text-left">QUANTITY</th>
                <th className="w-[20%] p-1 text-black  text-left">
                  TOTAL PRODUCTS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-1">
                  <img
                    className="w-[46%] m-auto"
                    src="https://demo1.leotheme.com/leo_wooden_demo/288-home_default/printed-dress.jpg"
                    alt=""
                  />
                </td>
                <td className="p-1">
                  Occaecat cupi - Size : S- Color : Orange
                </td>
                <td className="p-1">$25.99 </td>
                <td className="p-1">1</td>
                <td className="p-1">$25.99</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div className="item space-y-2">
            <div className="sub flex justify-between">
              <h3>Subtotal</h3>
              <h3>$25.99</h3>
            </div>
            <div className="ship flex justify-between">
              <h3>Shipping and handling</h3>
              <h3>$7.00</h3>
            </div>
            <div className="ship flex justify-between">
              <h3>TOTAL (TAX EXCL.)</h3>
              <h3>$32.99</h3>
            </div>
            <div className="ship flex justify-between">
              <h3>TOTAL (TAX INCL.)</h3>
              <h3>$32.99</h3>
            </div>
          </div>
        </div>
        <div className="row p-5 space-y-6 w-[30%]">
          <h3 className="text-[18px] text-black font-[600]">ORDER DETAILS:</h3>
          <div className="space-y-2">
            <h3>Order reference: VPQIAVBEZ</h3>
            <h3>Payment method: Bank transfer</h3>
            <h3>
              Shipping method: <br />{" "}
              <span className="italic">My carrier Delivery next day!</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
