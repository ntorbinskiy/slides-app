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
        <>
          Більш ніж на <ColoredText pageColor="tenoten">50%</ColoredText> знижує
          ознаки порушення сну
        </>
      }
      footerText="О.С.Чабан. Стрес-індуковані порушення в практиці сімейного лікаря. Здоров’я України. №18 2018 р."
      pageColor="tenoten"
    >
      <ImageSVG type={ImageType.Slide_30_2} className="slide_30_2" />
      <SubTitle pageColor="tenoten">
        Динаміка соматовегетативних симптомів
        <br /> на фоні прийому препарату Тенотен.
      </SubTitle>
      <div className="content-30">
        <ImageSVG type={ImageType.Slide_30_1} />
      </div>
    </Frame>
  );
};

export default Page;
