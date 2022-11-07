import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard space-y-5">
      <h3>
        Hello <span className=" font-[700]">ww</span> (not{" "}
        <span className=" font-[700]">ww</span>?{" "}
        <span className="text-black font-[500]">Log Out</span>)
      </h3>
      <h3>
        From your account dashboard you can view your{" "}
        <span className="text-black font-[500]">recent orders</span> , manage
        your{" "}
        <span className="text-black font-[500]">
          shipping and billing addresses
        </span>{" "}
        ,{" "}
        <span className="text-black font-[500]">
          and edit your password and account details.
        </span>
      </h3>
    </div>
  );
}
