import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
import ColoredText from "../../components/ColoredText";
import SubTitle from "../../components/SubTitle";
import ImageSVG, { ImageType } from "../../components/Image";
import ColorBlock, { Color } from "../../components/ColorBlocks";

const colors: Color[] = [
  {
    text: "Дорослі (n=289)",
    gradient:
      "linear-gradient(184.01deg, rgb(231, 14, 0) -15.471%,rgb(255, 119, 119) 92.149%)",
  },
];

const Page: React.FC = ({}) => {
  return (
    <Frame
      headerTitle="Ренгалін"
      headerDescription={
        <>
          сприяє усуненню кашлю у{" "}
          <ColoredText pageColor="rengalin">27%</ColoredText> пацієнтів вже на
          3-й день лікування
        </>
      }
      footerText={
        <>
          Л.Ф. Матюха, Ренгалін: застосування інноваційних технологій у
          лікуванні кашлю, Здоров’я України № 3 (496) , Лютий 2021 р..; М. М.
          Кочуєва, І. І. Грек Ренгалін – нові можливості ефективної <br />
          терапії кашлю, Здоров’я України № 4 (497), Лютий 2021 р.; Л.Ф.Матюха,
          НОВІ НАПРЯМКИ В РЕГУЛЯЦІЇ ВПЛИВУ НА КАШЛЬОВИЙ СИНДРОМ В АМБУЛАТОРНІЙ
          ПРАКТИЦІ, Новини медицини <br />
          та фармації № 8 (726), 2020; М.М.Кочуєва, ЗАСТОСУВАННЯ ПРЕПАРАТУ
          РЕНГАЛІН —НОВИЙ НАПРЯМОК У РЕГУЛЯЦІЇ КАШЛЮ, Новини медицини та
          фармації № 10 (728), 2020
        </>
      }
      pageColor="rengalin"
    >
      <SubTitle pageColor="rengalin">
        Частка пацієнтів з тяжкістю кашля 0-1 бал*
      </SubTitle>
      <div className="content-18">
        <ImageSVG type={ImageType.Slide_18_1} />
        <ColorBlock colors={colors} className="content-18-colors" />
      </div>
    </Frame>
  );
};

export default Page;
