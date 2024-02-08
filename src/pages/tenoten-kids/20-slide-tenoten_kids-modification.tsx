import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
import ColoredText from "../../components/ColoredText";
import ImageSVG, { ImageType } from "../../components/Image";

const Page: React.FC = ({}) => {
  return (
    <Frame
      pageColor="tenotenKids"
      headerTitle="ТЕНОТЕН"
      headerStyles={50}
      headerDescription={
        <>
          Модифікує функціональну активність білку{" "}
          <ColoredText pageColor="tenotenKids">S-100</ColoredText>
        </>
      }
      footerText={
        <>Інструкція для медичного застосування препарату ТЕНОТЕН дитячий</>
      }
      kids
    >
      <div className="content-20">
        <ImageSVG type={ImageType.Slide_20_1} />
      </div>
    </Frame>
  );
};

export default Page;
