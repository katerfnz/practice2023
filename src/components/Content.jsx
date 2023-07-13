import React from "react";
import { Block } from "./Block";
import { Course } from "./Course";
import "./style.css";

export const Content = ({ className }) => {
  return (
    <div className={`content ${className}`}>
      <div className="div">Дополнительные образовательные курсы</div>
      <div className="frame-2">
        <div className="element-2">Новые образовательные программы</div>
        <Course info={"Управление проектами"} frameClassName="design-component-instance-node"/>
        <Course info={"Турецкий язык"} frameClassName="design-component-instance-node"/>
        <Course className="course-instance" info={"Физическая культура"} frameClassName="design-component-instance-node"/>
      </div>
      <div className="frame-2">
        <div className="element-2">Программы дополнительного профессионального образования</div>
        <Course info={"Авторские Тренинги по развитию soft skills"} frameClassName="design-component-instance-node" />
        <Course info={"Работа с программными продуктами"} frameClassName="design-component-instance-node" />
        <Course info={"Обеспечение безопасности дорожного движения"} frameClassName="design-component-instance-node" />
        <Course info={"Эксплуатация и техническое обслуживание автомобилей"} frameClassName="design-component-instance-node" />
        <Course info={"Промышленная и экологическая безопасность"} frameClassName="design-component-instance-node" />
        <Course info={"Хладотехника"} frameClassName="design-component-instance-node" />
        <Course info={"Металлообработка"} frameClassName="design-component-instance-node" />
        <Course info={"Экспертная и оценочная деятельность"} frameClassName="design-component-instance-node" />
        <Course info={"Экспертная и оценочная деятельность"} frameClassName="design-component-instance-node" />
        <Course info={"Экономика и управление"} frameClassName="design-component-instance-node"/>
        <Course info={"Полиграфическое производство"} className="course-instance" frameClassName="design-component-instance-node"/>
      </div>
    </div>
  );
};

export default Content;