import React from "react";

export default function OrderDetails() {
  return (
    <div className="orderdetails space-y-4">
      <h3 className="text-[#253d4e] text-[32px] font-[600]">Your Orders</h3>
      <table className="table-auto w-full space-y-3">
        <thead className="text-[16px] text-left border p-9">
          <tr>
            <th className="text-black font-[500] p-3">Order</th>
            <th className="text-black font-[500] p-3">Date</th>
            <th className="text-black font-[500] p-3">Status</th>
            <th className="text-black font-[500] p-3">Total</th>
            <th className="text-black font-[500] p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-left mt-5 border">
          <tr>
            <td className="text-black font-[600] p-4">#20109</td>
            <td className="text-[#666] p-4">Sep 14, 2022</td>
            <td className="text-[#666] p-4">On hold</td>
            <td className="p-4">
              <span className="text-black font-[500] ">$68.00</span>{" "}
              <span className="text-[#666] ">for 2 items</span>
            </td>
            <td className="p-4">
              <h3 className="p-2 w-[80%]  text-[#3bb77e]  ">View </h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
