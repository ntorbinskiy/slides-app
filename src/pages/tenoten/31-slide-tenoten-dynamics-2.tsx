import React from "react";
import Frame from "../../components/Frame";
import "../../root.css";
import ColoredText from "../../components/ColoredText";
import SubTitle from "../../components/SubTitle";
import ImageSVG, { ImageType } from "../../components/Image";

const Page: React.FC = ({}) => {
  return (
    <Frame
      headerTitle="ТЕНОТЕН"
      headerDescription={
        <>
          Більш ніж на <ColoredText pageColor="tenoten">15%</ColoredText>{" "}
          скорочує скарги з боку серцево
          <br /> судинної системи (кардіалгії, перебої в роботі серця)
        </>
      }
      footerText="О.С.Чабан. Стрес-індуковані порушення в практиці сімейного лікаря. Здоров’я України. №18 2018 р."
      pageColor="tenoten"
    >
      <ImageSVG type={ImageType.Slide_31_2} className="slide_31_2" />
      <SubTitle pageColor="tenoten">
        Динаміка соматовегетативних симптомів
        <br /> на фоні прийому препарату Тенотен.
      </SubTitle>
      <div className="content-31">
        <ImageSVG type={ImageType.Slide_31_1} />
      </div>
    </Frame>
  );
};

export default Page;
