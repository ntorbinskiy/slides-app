import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
import ImageSVG, { ImageType } from "../../components/Image";
import ColoredText from "../../components/ColoredText";

const Page: React.FC = ({}) => {
  return (
    <Frame
      pageColor="tenoten"
      headerTitle="ТЕНОТЕН"
      headerDescription={<>КОМПЛЕКСНА ДОПОМОГА НЕРВОВОЇ СИСТЕМИ</>}
      headerStyles="divider-35"
      footerText={
        <ol className="ol">
          <li> Інструкція для медичного застосування препарату Тенотен</li>
          <li>
            В.І. Ткаченко. Тенотен у лікуванні невротичних розладів. Здоров’я
            України. №15-16 2022 р.
          </li>
        </ol>
      }
    >
      <ImageSVG type={ImageType.Slide_35_1} className="slide_35_1" />
      <div className="content-35">
        <span className="content-35-text">
          Максимальна трермін курсу терапії:{" "}
          <ColoredText pageColor="tenoten" lowercase>
            6 місяців
          </ColoredText>
        </span>
      </div>
      <ImageSVG type={ImageType.Slide_35_2} className="slide_35_2" />
    </Frame>
  );
};

export default Page;
