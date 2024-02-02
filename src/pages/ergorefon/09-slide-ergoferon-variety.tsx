import React, { FC } from "react";
import "../../root.css";
import Frame from "../../components/Frame";
import BlueText from "../../components/BlueText";
import ImageSVG, { ImageType } from "../../components/Image";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <Frame
      headerTitle="ЕРГОФЕРОН"
      headerDescription={
        <>
          ШИРОКИЙ СПЕКТР ПРОТИВІРУСНОЇ АКТИВНОСТІ ДІЄ НА ВСІ РЕСПІРАТОРНІ
          ВІРУСИ, В ТОМУ ЧИСЛІ Й <BlueText>МІКСТ-ІНФЕКЦІЇ</BlueText>
        </>
      }
      footerText="Інструкція медичного застосування препарату Ергоферон;"
      hideFooterTriangle
    >
      <div className="content-09">
        <ImageSVG type={ImageType.Slide_09_1}></ImageSVG>
        <ImageSVG type={ImageType.Slide_09_3}></ImageSVG>
        <ImageSVG type={ImageType.Slide_09_2}></ImageSVG>
      </div>
    </Frame>
  );
};

export default Page;
