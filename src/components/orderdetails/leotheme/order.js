import React from "react";
import "../../../Font/globalfont.scss";
export default function Leoorderdetail() {
  return (
    <div className=" p-10 orderdetails-2 font-Raleway space-y-7 text-[14px] text-[#878787]">
      <div className="item flex justify-between">
        <h3 className="font-[800]">
          Order Reference VPQIAVBEZ - placed on 09/19/2022
        </h3>
        <h3>Record</h3>
      </div>
      <div className="item">
        <h3>
          <span className="font-[800]">Carrier</span> My carrier
        </h3>
        <h3>
          <span className="font-[800]">Payment method</span> Bank transfer
        </h3>
      </div>
      <div className="item">
        <h3 className="text-[#414141] font-[700]">
          FOLLOW YOUR ORDER'S STATUS STEP-BY-STEP
        </h3>
        <div className="orderdetails bg-[#f6f6f6]">
          <table className="table-auto w-full space-y-3">
            <thead className="p-9 text-[14px] text-[#acaaa6]">
              <tr>
                <th className="border font-[500] p-3 text-left">Date</th>

                <th className=" border  font-[500] p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-center mt-5 text-[14px]">
              <tr>
                <td className=" border text-[#878787] p-2 text-left">
                  09/15/2022
                </td>

                <td className=" border p-2 ">
                  <h3 className="bg-[#4169e1] w-[26%] p-1 text-[14px] text-[#fff] rounded-md">
                    Awaiting bank wire payment
                  </h3>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex space-x-9 ">
        <div className="item-billing w-[50%] space-y-5">
          <div className="space-y-2">
            <div className="item flex space-x-5">
              <h3 className=" text-[14px] md:text-[14px] text-black font-[700]">
                Delivery address My Address
              </h3>
            </div>
          </div>
          {/* <h3>You have not set up this type of address yet.</h3> */}
          <div className="addre space-y-2">
            <h3 className="">Name Here</h3>
            <h3 className="">Company name here</h3>
            <h3 className="">Addrss here</h3>
            <h3 className="">State here</h3>
            <h3 className="">Phone no here</h3>
            <h3 className="">Country name here</h3>
          </div>
        </div>
        <div className="item-billshippinging w-[50%] space-y-5">
          <div className="space-y-2">
            <div className="item flex space-x-5">
              <h3 className="text-[14px] md:text-[14px]  text-black font-[700]">
                Invoice address My Address
              </h3>
            </div>
          </div>
          {/* <h3>You have not set up this type of address yet.</h3> */}
          <div className="addre space-y-2">
            <h3 className="">Name Here</h3>
            <h3 className="">Company name here</h3>
            <h3 className="">Addrss here</h3>
            <h3 className="">State here</h3>
            <h3 className="">Phone no here</h3>
            <h3 className="">Country name here</h3>
          </div>
        </div>
      </div>

      <div className="orderdetails bg-[#f6f6f6]">
        <table className="table-auto w-full space-y-3">
          <thead className="p-9 text-[14px] text-[#acaaa6]">
            <tr>
              <th className=" border  font-[500] p-3">Product</th>

              <th className=" border  font-[500] p-3 text-left">Quantity</th>
              <th className=" border  font-[500] p-3 text-left">Unit price</th>
              <th className=" border  font-[500] p-3 text-left">Total price</th>
            </tr>
          </thead>
          <tbody className="text-center mt-5 ">
            <tr>
              <td className=" border  text-left p-2">
                <h3 className="font-[800]">
                  {" "}
                  Occaecat cupi - Size : S- Color : Orange
                </h3>
                <h3>Reference: demo_10</h3>
              </td>

              <td className=" border text-[#878787] p-2  text-left">1 </td>
              <td className=" border p-5 text-right">$55</td>
              <td className="p-2 border text-right">$322</td>
            </tr>
            <tr>
              <td className=" border text-black font-[600] p-2"></td>

              <td className=" border text-[#878787] p-2"> </td>
              <td className=" border p-5 text-right">Subtotal </td>
              <td className="p-2 border text-right">$322</td>
            </tr>
            <tr>
              <td className=" border text-black font-[600] p-2"></td>

              <td className=" border text-[#878787] p-2"> </td>
              <td className=" border p-5 text-right">Shipping and handling </td>
              <td className="p-2 border text-right">$322</td>
            </tr>
            <tr>
              <td className=" border text-black font-[600] p-2"></td>

              <td className=" border text-[#878787] p-2"> </td>
              <td className=" border p-5 text-right">Tax </td>
              <td className="p-2 border text-right">$322</td>
            </tr>
            <tr>
              <td className=" border text-black font-[600] p-2"></td>

              <td className=" border text-[#878787] p-2"> </td>
              <td className=" border p-5 text-right">Total </td>
              <td className="p-2 border text-right">$322</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="orderdetails bg-[#f6f6f6]">
        <table className="table-auto w-full space-y-3">
          <thead className="p-9 text-[14px] text-[#acaaa6]">
            <tr>
              <th className="border font-[500] p-3 text-left">Date</th>

              <th className=" border  font-[500] p-3 text-left">Carrier</th>
              <th className=" border  font-[500] p-3 text-left">Weight</th>
              <th className=" border  font-[500] p-3 text-left">
                Shipping cost
              </th>
              <th className=" border  font-[500] p-3 text-left">
                Tracking number
              </th>
            </tr>
          </thead>
          <tbody className="text-center mt-5 text-[14px]">
            <tr>
              <td className=" border text-[#878787] p-2 text-left">
                09/15/2022
              </td>
              <td className=" border text-[#878787] p-2 text-left">
                My carrier{" "}
              </td>
              <td className=" border text-[#878787] p-2 ">-</td>
              <td className=" border p-5   text-left">$7.00</td>
              <td></td>
              <td className="p-2 border ">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
