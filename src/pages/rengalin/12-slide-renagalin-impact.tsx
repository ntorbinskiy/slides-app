import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
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
    text: <>Фенспірид</>,
    gradient:
      " linear-gradient(180.00deg, rgb(187, 187, 187),rgba(187, 187, 187, 0) 159.615%)",
  },
];

const Page: React.FC = ({}) => {
  return (
    <Frame
      headerTitle="Ренгалін"
      headerStyles={66}
      headerDescription={
        <>
          <span style={{ textTransform: "capitalize" }}>Чинить</span>{" "}
          протизапальну і протинабрякову дії, в порівнянні з <br />
          Фенспіридом зменшує вираженість денного кашлю в{" "}
          <ColoredText pageColor="rengalin" lowercase>
            2,5 рази
          </ColoredText>
        </>
      }
      footerText={
        <>
          М.М.Кочуєва, ЗАСТОСУВАННЯ ПРЕПАРАТУ РЕНГАЛІН —НОВИЙ НАПРЯМОК У
          РЕГУЛЯЦІЇ КАШЛЮ, Новини медицини та фармації № 10 (728), 2020; У.Б.
          Чуловська, Сучасні підходи до діагностики та лікування продуктивного
          <br />
          кашлю в амбулаторній практиці, Здоров’я України № 22 (515), Листопад
          2021 р.; Л.Ф. Матюха, Ренгалін: застосування інноваційних технологій у
          лікуванні кашлю, Здоров’я України № 3 (496) , Лютий 2021 р.; М. М.
          Кочуєва, І. І. Грек
          <br /> Ренгалін – нові можливості ефективної терапії кашлю, Здоров’я
          України № 4 (497), Лютий 2021 р
        </>
      }
      pageColor="rengalin"
    >
      <SubTitle pageColor="rengalin">
        Вплив Ренгаліну і Фенспіриду на частоту виявлення денного кашлю в групі
      </SubTitle>
      <div className="content-12">
        <ImageSVG type={ImageType.Slide_12_1} />
        <ColorBlock colors={colors} className="content-12-colors" />
      </div>
    </Frame>
  );
};

export default Page;
