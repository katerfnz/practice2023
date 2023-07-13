import React, { useState } from 'react';
import Modal from "./Modal";
import "./style.css";



export const Course = ({ className, info }) => {
    
  return (
    <div className={`course ${className}`}>
      <div className="frame">
        <div className="ellipse" />
      </div>
      <div className="element">{info}</div>
      
    </div>
  );
};

export default Course;