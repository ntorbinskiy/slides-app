import React from "react";
import Frame from "../../components/Frame";
import "../../root.css";
import ColoredText from "../../components/ColoredText";
import SubTitle from "../../components/SubTitle";
import ImageSVG, { ImageType } from "../../components/Image";
import ColorBlock, { Color } from "../../components/ColorBlocks";

const colors: Color[] = [
  {
    text: <>До лікування</>,
    gradient:
      " linear-gradient(180.00deg, rgb(187, 187, 187),rgba(187, 187, 187, 0) 159.615%)",
  },
  {
    text: <>Після лікування</>,
    gradient:
      "linear-gradient(183.47deg, rgb(124, 199, 0) -32.656%,rgb(198, 245, 121) 92.306%)",
  },
];

const Page: React.FC = ({}) => {
  return (
    <Frame
      headerTitle="ТЕНОТЕН"
      headerDescription={
        <>
          більш ніж у{" "}
          <ColoredText pageColor="tenotenKids" lowercase>
            70%
          </ColoredText>{" "}
          пацієнтів сприяє усуненню <br />
          клінічних проявів функціональних порушень
          <ColoredText pageColor="tenotenKids"> ШКТ</ColoredText>
        </>
      }
      footerText="Бабаян М.Л. Сучасні підходи до терапії функціональних розладів шлунково-кишкового тракту у дітей// Лікар 2012 №3 (71)"
      pageColor="tenotenKids"
      kids
    >
      <SubTitle pageColor="tenotenKids">
        Динаміка частоти скарг у дітей з функціональними порушеннями ШКТ на тлі
        лікування Тенотеном дитячим
      </SubTitle>
      <div className="content-23">
        <ImageSVG type={ImageType.Slide_23_1} />
        <ColorBlock colors={colors} className="content-23-colors" />
      </div>
    </Frame>
  );
};

export default Page;
