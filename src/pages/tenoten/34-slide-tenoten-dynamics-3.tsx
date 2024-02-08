import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
import ColoredText from "../../components/ColoredText";
import SubTitle from "../../components/SubTitle";
import ImageSVG, { ImageType } from "../../components/Image";

const Page: React.FC = ({}) => {
  return (
    <Frame
      headerTitle="ТЕНОТЕН"
      headerDescription={
        <>В 2 рази знижує рівень тривоги з високого до легкого ступеню</>
      }
      footerText={
        <>
          В.І. Ткаченко. Тенотен у лікуванні невротичних <br />
          розладів. Здоров’я України. №15-16 2022 р.
        </>
      }
      pageColor="tenoten"
    >
      <SubTitle pageColor="tenoten">
        ДДинаміка вираженості тривоги в групі Тенотен та плацебо <br />
        за шкалою Гамільтона (НАМ-М)
      </SubTitle>
      <div className="content-34">
        <ImageSVG type={ImageType.Slide_34_1} className="slide_34_1" />
      </div>
    </Frame>
  );
};

export default Page;
