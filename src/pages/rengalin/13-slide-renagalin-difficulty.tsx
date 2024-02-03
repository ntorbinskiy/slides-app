import React from "react";
import Frame from "../../components/Frame";
import "../../root.css";
import SubTitle from "../../components/SubTitle";
import ImageSVG, { ImageType } from "../../components/Image";
import ColorBlock, { Color } from "../../components/ColorBlocks";

const colors: Color[] = [
  {
    text: <>День</>,
    gradient:
      "linear-gradient(184.01deg, rgb(231, 14, 0) -15.471%,rgb(255, 119, 119) 92.149%)",
  },
  {
    text: <>Нiч</>,
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
          Зменшує тяжкість кашлю з 1-го дня терапії, за рахунок регуляції
          рефлекторних і запальних механізмів
        </>
      }
      footerText="Л.Ф. Матюха, Ренгалін: застосування інноваційних технологій у лікуванні кашлю, Здоров’я України, № 3 (496) , Лютий 2021 р..; М. М. Кочуєва, І. І. Грек  Ренгалін – нові можливості ефективної терапії кашлю, № 4 (497), Лютий 2021 р.; Л.Ф.Матюха, НОВІ НАПРЯМКИ В РЕГУЛЯЦІЇ ВПЛИВУ НА КАШЛЬОВИЙ СИНДРОМ В АМБУЛАТОРНІЙ ПРАКТИЦІ, Новини медицини та фармації № 8 (726),  2020
"
      pageColor="rengalin"
    >
      <SubTitle pageColor="rengalin">
        Динаміка відносних змін тяжкості кашлю в балах в денний і нічний час
      </SubTitle>
      <div className="content-13">
        <ImageSVG type={ImageType.Slide_13_1} className="slide_13_1" />
        <ImageSVG type={ImageType.Slide_13_2} className="slide_13_2" />
      </div>
      <ColorBlock colors={colors} />
    </Frame>
  );
};

export default Page;
