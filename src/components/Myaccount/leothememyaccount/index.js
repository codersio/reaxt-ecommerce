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
import Address from "./address";
import Dashboard from "./dashboard";
import OrderDetails from "./orderdetails";
export default function Leothemeacc() {
  return (
    <div className="leotheme-acct w-[100vw] p-5 font-Raleway text-[14px]">
      <Address />
    </div>
  );
}
