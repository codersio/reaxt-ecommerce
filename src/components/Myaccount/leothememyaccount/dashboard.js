import {
  faCalendar,
  faCirclePlay,
  faCirclePlus,
  faCircleUser,
  faCreditCard,
  faHeart,
  faLocationArrow,
  faLocationPin,
  faU,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FaBeer } from "react-icons/fa";
import { AiFillAccountBook } from "react-icons/ai";
import { MdCalendarToday } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Dashboard() {
  return (
    <div className="leotheme-acct w-[100vw] p-5 font-Raleway text-[14px]">
      <div className="section grid gap-3 grid-cols-3">
        <div className="item m-4 text-center w-[100%] h-[7rem] shadow-lg   rounded-sm grid place-items-center">
          <div className="space-y-5">
            <FontAwesomeIcon icon={faLocationPin} className="text-[41px]" />
            <h3 className="uppercase">information</h3>
          </div>
        </div>
        <div className="item m-4 text-center w-[100%] h-[7rem] shadow-lg   rounded-sm grid place-items-center">
          <div className="space-y-5">
            <FontAwesomeIcon icon={faLocationArrow} className="text-[41px]" />

            <h3 className="uppercase">add first address</h3>
          </div>
        </div>
        <div className="item m-4 text-center w-[100%] h-[7rem] shadow-lg   rounded-sm grid place-items-center">
          <div className="space-y-5">
            <MdCalendarToday className="text-[41px]" />
            <h3 className="uppercase">order history and detils</h3>
          </div>
        </div>

        <div className="item m-4 text-center w-[100%] h-[7rem] shadow-lg   rounded-sm grid place-items-center">
          <div className="space-y-5">
            <FontAwesomeIcon icon={faCreditCard} className="text-[41px]" />
            <h3 className="uppercase">credit slips</h3>
          </div>
        </div>
        <div className="item m-4 text-center w-[100%] h-[7rem] shadow-lg   rounded-sm grid place-items-center">
          <div className="space-y-5">
            <FontAwesomeIcon icon={faHeart} className="text-[41px]" />
            <h3 className="uppercase">wishlist</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
