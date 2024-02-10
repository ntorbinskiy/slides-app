import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
import ColoredText from "../../components/ColoredText";
import ImageSVG, { ImageType } from "../../components/Image";

const Page: React.FC = ({}) => {
  return (
    <Frame
      pageColor="tenoten"
      headerTitle="ТЕНОТЕН"
      headerDescription={
        <>
          модифікує функціональну активність білку{" "}
          <ColoredText pageColor="tenoten">S-100</ColoredText>
        </>
      }
      footerText={<>Інструкція для медичного застосування препарату Тенотен </>}
    >
      <div className="content-29">
        <ImageSVG type={ImageType.Slide_29_1} />
      </div>
    </Frame>
  );
};

export default Page;
