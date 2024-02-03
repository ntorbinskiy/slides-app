import React from "react";
import "../../root.css";
import Frame from "../../components/Frame";
import ColoredText from "../../components/ColoredText";
import SubTitle from "../../components/SubTitle";
import ImageSVG, { ImageType } from "../../components/Image";
import ColorBlock, { Color } from "../../components/ColorBlocks";

const colors: Color[] = [
  {
    text: (
      <>
        Не отримували <br /> антибактеріальні препарати
      </>
    ),
    gradient:
      "linear-gradient(183.47deg, rgb(0, 128, 131) -32.656%,rgb(63, 190, 193) 92.306%)",
  },
  {
    text: (
      <>
        Отримували <br />
        антибактеріальні препарати
      </>
    ),
    gradient:
      "linear-gradient(180.00deg, rgb(16, 145, 218),rgb(125, 197, 237) 100%)",
  },
];

const test = () => (
  <>
    <Frame
      pageColor="ergoferon"
      headerTitle="ЕРГОФЕРОН"
      headerDescription={
        <>
          У <ColoredText pageColor="ergoferon">85%</ColoredText> пацієнтів
          зменшує ймовірність розвитку бактеріальних ускладнень, що вимагають
          призначення антибіотикотерапії на тлі ГРВІ, згідно результатам
          дослідження «Ермітаж»: 8 411 пацієнтів
        </>
      }
      footerText='І.А. Мітюряєва, Противірусна терапія при ГРВІ у стримуванні зростання антибіотикорезистентності, ЗУ «Педіатрія» №1 (48), березень 2019 р., с. 8-9; А.В. Возняк, Оптимізація лікування гострих респіраторних інфекцій у дітей, ЗУ «Педіатрія», № 3 (50), 2019 р.; Геппе Н.А. і співавт., Лікування ГРВІ та Грипу в амбулаторно-поліклінічній практиці: результати міжнародної спостережної неінтервенційної програми "Ермітаж«, Терапія, №8 (18), 2017 р.'
    >
      <SubTitle title="ЧАСТКА ПАЦІЄНТІВ, ЩО ОТРИМУВАЛИ ТА НЕ ОТРИМУВАЛИ АНТИБАКТЕРІАЛЬНІ ПРЕПАРАТИ" />

      <div className="diagram-box-07">
        <div className="blue-rounded-box blue-rounded-box-first">
          <span className="blue-rounded-box-text-1">
            Всього <ColoredText pageColor="ergoferon">3,3%</ColoredText>{" "}
            пацієнтів отримували АБП на другий і наступні дні лікування{" "}
            <ColoredText pageColor="ergoferon">Ергофероном</ColoredText>
          </span>
        </div>
        <ImageSVG
          type={ImageType.Slide_07_Diagram}
          className="ergoferon-diagram-07"
        />
        <div className="arrow">
          <div className="circle"></div>
          <div className="arrow-lines"></div>
        </div>
        <div className="blue-rounded-box blue-rounded-box-second">
          <span className="blue-rounded-box-text-2">
            <span className="light-blue-text">11,5%</span> АБП на 1-й день{" "}
            <br /> <span className="light-blue-text">3,3%</span> АБП на 2-й день
            і пізніше
          </span>
        </div>
      </div>
      <ColorBlock colorAmount={2} colors={colors} className="colors-07" />
    </Frame>
  </>
);

export default test;
