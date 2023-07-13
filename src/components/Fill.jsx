import React from "react";
import { Content } from "./Content";
import "./style.css";

export const Fill = ({ className }) => {
  return (
    <div className={`fill ${className}`}>
      <div className="frame-wrapper">
        <div className="div-wrapper">
          <div className="frame-3">
            <div className="element-3">Название раздела</div>
            <div className="rectangle" />
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
};

export default Fill;