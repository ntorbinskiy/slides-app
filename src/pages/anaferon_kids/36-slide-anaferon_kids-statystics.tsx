import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
import ColoredText from "../../components/ColoredText";
import SubTitle from "../../components/SubTitle";
import ImageSVG, { ImageType } from "../../components/Image";

const Page: React.FC = ({}) => {
  return (
    <Frame
      pageColor="anaferonKids"
      headerTitle="АНАФЕРОН"
      headerDescription={
        <span style={{ textTransform: "lowercase" }}>
          ЗНИЖУЄ РИЗИК ВИНИКНЕННЯ ГРВІ ТА ГРИПУ У ДІТЕЙ В
          <br /> В{" "}
          <ColoredText pageColor="anaferonKids" lowercase>
            2,5 РАЗИ
          </ColoredText>
          , А В ПОВТОРНИХ ВИПАДКАХ —{" "}
          <ColoredText pageColor="anaferonKids" lowercase>
            В 9 РАЗІВ!
          </ColoredText>
        </span>
      }
      upperCase
      footerText={
        <>
          Мокія-Сербіна С. А., Чечель В. В., Заболотна Н. І. Гомеопатичні
          препарати у профілактиці та лікуванні ГРВІ у <br />
          дітей: порівняльний аналіз ефективності та безпеки застосування.
          Сучасна педіатрія. №7 2015
        </>
      }
      kids
    >
      <SubTitle pageColor="anaferonKids">
        ЗАХВОРЮВАННІСТЬ НА ГРВІ ТА ГРИП У ДІТЕЙ, ЯКІ
        <br /> ВІДВІДУЮТЬ ОРГАНІЗОВАНІ КОЛЕКТИВИ
      </SubTitle>

      <div className="content-36">
        <ImageSVG type={ImageType.Slide_36_1} />
      </div>
    </Frame>
  );
};

export default Page;
