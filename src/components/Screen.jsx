import React from "react";
import { Fill } from "./Fill";
import {Menu} from "./Menu"

import "./style.css";

export const Screen = () => {
  return (
    <div className="screen">
        <Menu/>
        <svg className="mask" width="205" height="249" viewBox="0 0 1 249" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1" height="249" fill="#D9D9D9"/>
        </svg>
      <Fill />
      <svg width="1" height="249" viewBox="0 0 1 249" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1" height="249" fill="#D9D9D9"/>
        </svg>
    </div>
  );
};

export default Screen;