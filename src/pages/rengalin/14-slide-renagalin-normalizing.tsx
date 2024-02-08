import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
import ColoredText from "../../components/ColoredText";
import ImageSVG, { ImageType } from "../../components/Image";
import BellInfo from "../../components/Bellinfo";
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
      headerDescription={
        <>
          Сприяє нормалізації аускультативної картини у{" "}
          <ColoredText pageColor="rengalin">50%</ColoredText>
          <br /> пацієнтів вже на 4-й день, у{" "}
          <ColoredText pageColor="rengalin">85%</ColoredText> – на 7-й день
          лікування
        </>
      }
      footerText={
        <>
          М.М.Кочуєва, ЗАСТОСУВАННЯ ПРЕПАРАТУ РЕНГАЛІН —НОВИЙ НАПРЯМОК У
          РЕГУЛЯЦІЇ КАШЛЮ, Новини медицини та фармації № 10 (728), 2020; У.Б.
          Чуловська, Сучасні підходи до
          <br /> діагностики та лікування продуктивного кашлю в амбулаторній
          практиці, Здоров’я України № 22 (515), Листопад 2021 р.; Л.Ф. Матюха,
          Ренгалін: застосування інноваційних технологій у <br />
          лікуванні кашлю, Здоров’я України № 3 (496) , Лютий 2021 р. М. М.
          Кочуєва, І. І. Грек Ренгалін – нові можливості ефективної терапії
          кашлю, Здоров’я України № 4 (497), Лютий 2021 р
        </>
      }
      pageColor="rengalin"
    >
      <div className="content-14">
        <ImageSVG type={ImageType.Slide_14_1} />
        <BellInfo
          text={
            <>
              <ColoredText pageColor="rengalin" lowercase>
                Ренгалін
              </ColoredText>{" "}
              регулює запалення в дихальних шляхах, селективно усуває спазм
              гладкої мускулатури бронхів сприяючи{" "}
              <ColoredText pageColor="rengalin" lowercase>
                покращенню аускультативної картини
              </ColoredText>{" "}
              і знижуючи ризик розвитку застійних явищ
            </>
          }
        />
      </div>
      <ColorBlock colors={colors} className="content-14-colors" />
    </Frame>
  );
};

export default Page;
