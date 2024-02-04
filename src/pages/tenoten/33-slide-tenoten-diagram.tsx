import React from "react";
import Frame from "../../components/Frame";
import "../../root.css";
import ColoredText from "../../components/ColoredText";
import ImageSVG, { ImageType } from "../../components/Image";

const Page: React.FC = ({}) => {
  return (
    <Frame
      pageColor="tenoten"
      headerTitle="ТЕНОТЕН"
      headerStyles="divider-33"
      headerDescription={
        <>
          Разом із стандартною терапією сердцево-судинних захворювань
          <br />{" "}
          <ColoredText pageColor="tenoten" lowercase>
            покращую перебіг IXC
          </ColoredText>{" "}
          <ColoredText pageColor="tenoten" lowercase>
            та призводить до зменшення ЕКГ
          </ColoredText>{" "}
          — ознак ішемії міокарда у{" "}
          <ColoredText pageColor="tenoten">60%</ColoredText> пацієнтів
        </>
      }
      footerText={
        <>
          Матюштн Г.В. Досвід застосування анксіолітичного засобу в терапії
          хворих з єкстрасистолією та пароксизмальними надшлуночковими
          тахікардіями. Лікуючий лікар. 2009. №2
        </>
      }
    >
      <div className="content-33">
        <ImageSVG type={ImageType.Slide_33_1} />
      </div>
    </Frame>
  );
};

export default Page;
