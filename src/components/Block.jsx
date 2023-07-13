import React from "react";
import { Course } from "./Course";
import "./style.css";

export const Block = ({ className }) => {
  return (
    <div className={`block ${className}`}>
      <div className="text-wrapper">Новые образовательные программы</div>
      <Course info={"Управление проектами"}/>
      <Course info={"Турецкий язык"}/>
      <Course className="course-instance" info={"Физическая культура"}/>
    </div>
  );
};

export default Block;