import React from "react";
import "../../../Font/globalfont.scss";
export default function Luchiana() {
  return (
    <div className="luchianaorder shadow-sm md:p-16 w-[100vw] space-y-16 grid place-items-center font-Inter text-[13px]">
      <div className=" md:inline-block hidden row w-[95%]">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="text-[15px] text-[#000] font-[500] tracking-[0.17rem]">
                ORDER NUMBER:
              </th>
              <th className="text-[15px] text-[#000] font-[500] tracking-[0.17rem]">
                DATE:
              </th>
              <th className="text-[15px] text-[#000] font-[500] tracking-[0.17rem]">
                Email:
              </th>
              <th className="text-[15px] text-[#000] font-[500] tracking-[0.17rem]">
                TOTAL:
              </th>
              <th className="text-[15px] text-[#000] font-[500] tracking-[0.17rem]">
                PAYMENT METHOD:
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center pt-2 text-[#616161] font-[200]">
                2945
              </td>
              <td className="text-center pt-2 text-[#616161] font-[200]">
                September 20, 2022
              </td>
              <td className="text-center pt-2 text-[#616161] font-[200]">
                a@gmail.com
              </td>
              <td className="text-center pt-2 text-[#616161] font-[200]">
                $45.00
              </td>
              <td className="text-center pt-2 text-[#616161] font-[200]">
                Cash on delivery
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mobile md:hidden space-y-7  grid placeitems-center">
        <div className="item text-center space-y-1">
          <h3 className="text-[15px] text-[#000] font-[500] tracking-[0.17rem]">
            ORDER NUMBER:
          </h3>
          <h3 className="text-center pt-2 text-[#616161] font-[200]">2946</h3>
        </div>
        <div className="item text-center space-y-1">
          <h3 className="text-[15px] text-[#000] font-[500] tracking-[0.17rem]">
            DATE:
          </h3>
          <h3 className="text-center pt-2 text-[#616161] font-[200]">
            September 20, 2022
          </h3>
        </div>
        <div className="item text-center space-y-1">
          <h3 className="text-[15px] text-[#000] font-[500] tracking-[0.17rem]">
            EMAIL:
          </h3>
          <h3 className="text-center pt-2 text-[#616161] font-[200]">
            a@gmail.com
          </h3>
        </div>
        <div className="item text-center space-y-1">
          <h3 className="text-[15px] text-[#000] font-[500] tracking-[0.17rem]">
            TOTAL:
          </h3>
          <h3 className="text-center pt-2 text-[#616161] font-[200]">2946</h3>
        </div>
        <div className="item text-center space-y-1">
          <h3 className="text-[15px] text-[#000] font-[500] tracking-[0.17rem]">
            ORDER NUMBER:
          </h3>
          <h3 className="text-center pt-2 text-[#616161] font-[200]">
            a@gmail.com
          </h3>
        </div>
        <div className="item text-center space-y-1">
          <h3 className="text-[15px] text-[#000] font-[500] tracking-[0.17rem]">
            PAYMENT METHOD:
          </h3>
          <h3 className="text-center pt-2 text-[#616161] font-[200]">
            Cash on delivery
          </h3>
        </div>
      </div>

      <div className="item w-full md:w-[50%] ">
        <div className="text-left p-6">
          <h3 className="text-[13px]  font-[200]">
            Pay with cash upon delivery.
          </h3>
        </div>
        <div className="right-order  w-full p-6 space-y-4">
          <h3 className="text-[17px] md:text-[17px] uppercase font-[400] tracking-[0.17rem] text-[#000]">
            Order details
          </h3>
          <table className="w-full table-auto uppercase tracking-[0.1rem] font-[400] text-[10px]">
            <thead className="border-b">
              <tr className=" ">
                <th className="p-3  text-left  text-[#616161] font-[400]">
                  Product
                </th>
                <th className="p-3  text-right text-[#616161] font-[400]">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="tbody">
              <tr className=" ">
                <td className="p-3  text-[#616161] text-[13px] font-[600]">
                  Wool-blend Jacket × 1
                </td>
                <td className="p-3 text-right text-[#616161] text-[13px] ">
                  $29.00
                </td>
              </tr>
              <tr className=" border-b">
                <td className="p-3  text-[#616161]">Subtotal:</td>
                <td className="p-3 text-right text-[#616161] text-[13px] ">
                  $29.00
                </td>
              </tr>
              <tr className=" border-b">
                <td className="p-3  text-[#616161]">Shipping:</td>
                <td className="p-3 text-right text-[#616161]">$10.00 via</td>
              </tr>
              <tr className="border-b ">
                <td className="p-3 text-[#616161]">Payment method:</td>
                <td className="p-3 text-right text-[13px] capitalize text-[#616161]">
                  Direct bank transfer
                </td>
              </tr>
              <tr className=" ">
                <td className="p-3  text-[#616161]">Total:</td>
                <td className="p-3 text-right text-[#616161] text-[13px]">
                  $39.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
