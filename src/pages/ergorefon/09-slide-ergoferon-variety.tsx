import React, { FC } from "react";
import "../../styles/root.css";
import Frame from "../../components/Frame";
import ColoredText from "../../components/ColoredText";
import ImageSVG, { ImageType } from "../../components/Image";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <Frame
      pageColor="ergoferon"
      headerTitle="ЕРГОФЕРОН"
      headerDescription={
        <>
          ШИРОКИЙ СПЕКТР ПРОТИВІРУСНОЇ АКТИВНОСТІ ДІЄ НА ВСІ РЕСПІРАТОРНІ
          ВІРУСИ, В ТОМУ ЧИСЛІ Й{" "}
          <ColoredText pageColor="ergoferon">МІКСТ-ІНФЕКЦІЇ</ColoredText>
        </>
      }
      footerText="Інструкція медичного застосування препарату Ергоферон;"
      hideFooterTriangle
    >
      <div className="content-09">
        <ImageSVG type={ImageType.Slide_09_1} />
        <ImageSVG type={ImageType.Slide_09_3} />
        <ImageSVG type={ImageType.Slide_09_2} />
      </div>
      <ImageSVG type={ImageType.Slide_09_4} className="slide_09_4" />
    </Frame>
  );
};

export default Page;
