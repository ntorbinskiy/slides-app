import React from "react";
import Frame from "../../components/Frame";
import "../../root.css";
import ColoredText from "../../components/ColoredText";
import SubTitle from "../../components/SubTitle";
import ImageSVG, { ImageType } from "../../components/Image";
import ColorBlock, { Color } from "../../components/ColorBlocks";

const colors: Color[] = [
  {
    text: <>Ренгалін</>,
    gradient:
      "linear-gradient(184.01deg, rgb(231, 14, 0) -15.471%,rgb(255, 119, 119) 92.149%)",
  },
  {
    text: <>Стоптусин</>,
    gradient:
      " linear-gradient(180.00deg, rgb(187, 187, 187),rgba(187, 187, 187, 0) 159.615%)",
  },
];

const Page: React.FC = ({}) => {
  return (
    <Frame
      headerTitle="Ренгалін"
      headerDescription={
        <>
          скорочує тривалість постінфекційного кашлю до
          <ColoredText pageColor="rengalin">7</ColoredText> днів у{" "}
          <ColoredText pageColor="rengalin">80% пацієнтів,</ColoredText> завдяки
          вираженій протизапальній, бронхолітичній та протикашльовій дії
        </>
      }
      footerText="Л.Ф.Матюха, НОВІ НАПРЯМКИ В РЕГУЛЯЦІЇ ВПЛИВУ НА КАШЛЬОВИЙ СИНДРОМ В АМБУЛАТОРНІЙ ПРАКТИЦІ, Новини медицини та фармації № 8 (726), 2020;"
      pageColor="rengalin"
    >
      <SubTitle pageColor="rengalin">
        індекс кашльового синдрому на 2-му візиті (7й день)
      </SubTitle>
      <div className="content-17">
        <ImageSVG type={ImageType.Slide_17_1} className="slide_17_1" />
        <ColorBlock colors={colors} />
      </div>
    </Frame>
  );
};

export default Page;
