import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
import ImageSVG, { ImageType } from "../../components/Image";
import SubTitle from "../../components/SubTitle";

const Page: React.FC = ({}) => {
  return (
    <Frame
      pageColor="tenotenKids"
      headerTitle="ТЕНОТЕН"
      headerStyles={34}
      headerDescription={<>Чому саме Тенотен дитячий?</>}
      footerText={
        <>
          Інструкція для медичного застосування
          <br /> препарату Тенотен дитячий
        </>
      }
      footerStyle="footer-28"
      kids
      upperCase
    >
      <div className="content-28">
        <SubTitle pageColor="tenotenKids" className="title1-28">
          Чому саме Тенотен дитячий?
        </SubTitle>
        <div className="box1-28">
          <ImageSVG type={ImageType.Slide_28_1} />
        </div>
        <SubTitle pageColor="tenotenKids" className="title2-28">
          схема прийому тенотену
        </SubTitle>
        <div className="box2-28">
          <ImageSVG type={ImageType.Slide_28_2} />
        </div>
        <div className="tenoten-28">
          <ImageSVG type={ImageType.Slide_24_2} className="slide_24_2" />
          <ImageSVG type={ImageType.Slide_35_2} className="slide_35_2_28" />
        </div>
      </div>
    </Frame>
  );
};

export default Page;
