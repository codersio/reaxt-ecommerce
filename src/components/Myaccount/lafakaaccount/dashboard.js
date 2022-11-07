import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard space-y-5 font-Rubik">
      <div className="item flex space-x-3">
        <div className="image rounded-full">
          <img
            className="rounded-full"
            src="https://secure.gravatar.com/avatar/70b03db954aa45fc2559e85f5d5bd13e?s=100&d=mm&r=g"
            alt=""
          />
        </div>
        <div className="grid place-items-center"></div>
      </div>
      <div>
        <h3 className="text-[16px] text-[#333]">
          Hello <span className="text-[#333] font-[700]">a-5604</span> (not{" "}
          <span className="text-[#333] font-[700]">a-5604</span>?{" "}
          <span className="text-[#f2002d]">Log out</span> )
        </h3>
      </div>
      <h3 className="text-[16px] text-[#333]">
        From your account dashboard. you can easily check & view your
        <span className="text-[#f2002d] font-[500]">recent orders</span> ,
        manage your{" "}
        <span className="text-[#f2002d] font-[500]">
          shipping and billing addresses
        </span>{" "}
        ,{" "}
        <span className="text-[#f2002d] font-[500]">
          and edit your password and account details.
        </span>
      </h3>
    </div>
  );
}
