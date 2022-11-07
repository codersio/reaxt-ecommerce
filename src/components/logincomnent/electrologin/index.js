import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Register from "./register";
import { faR } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import Login from "./login";

export default function Electrologin() {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="electro">
      {tabs == 0 ? <Login setTabs={setTabs} /> : <Register setTabs={setTabs} />}
    </div>
  );
}
