import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
import SubTitle from "../../components/SubTitle";
import ImageSVG, { ImageType } from "../../components/Image";

const Page: React.FC = ({}) => {
  return (
    <Frame
      pageColor="rengalin"
      headerTitle="Ренгалін"
      headerStyles={53}
      headerDescription={
        <>
          у 65% пацієнтів сприяє трансформації сухого кашлю
          <br /> в залишкове покашлювання (або його усунення)
        </>
      }
      footerText={
        <>
          Л.Ф. Матюха, Ренгалін: застосування інноваційних технологій у
          лікуванні кашлю, Здоров’я України № 3 (496) , Лютий 2021 р..; М. М.
          Кочуєва, І. І. Грек Ренгалін – нові можливості ефективної терапії
          кашлю,
          <br /> Здоров’я України № 4 (497), Лютий 2021 р.; Л.Ф.Матюха, НОВІ
          НАПРЯМКИ В РЕГУЛЯЦІЇ ВПЛИВУ НА КАШЛЬОВИЙ СИНДРОМ В АМБУЛАТОРНІЙ
          ПРАКТИЦІ, Новини медицини та фармації № 8 (726), 2020;
          <br />
          М.М.Кочуєва, ЗАСТОСУВАННЯ ПРЕПАРАТУ РЕНГАЛІН —НОВИЙ НАПРЯМОК У
          РЕГУЛЯЦІЇ КАШЛЮ, Новини медицини та фармації № 10 (728), 2020
        </>
      }
    >
      <SubTitle pageColor="rengalin">Виражений протизапальний ефект</SubTitle>
      <div className="content-16">
        <ImageSVG type={ImageType.Slide_16_1} />
      </div>
    </Frame>
  );
};

export default Page;
