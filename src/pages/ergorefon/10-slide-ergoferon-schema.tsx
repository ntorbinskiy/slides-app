import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
import ColoredText from "../../components/ColoredText";
import ImageSVG, { ImageType } from "../../components/Image";

const Page: React.FC = ({}) => {
  return (
    <Frame
      pageColor="ergoferon"
      headerTitle="ЕРГОФЕРОН"
      headerDescription={
        <span style={{ textTransform: "lowercase" }}>СХЕМА ПРИЙОМУ</span>
      }
      headerStyles={19}
      footerText="Інструкція для медичного застосування лікарського засобу Ергоферон."
    >
      <div className="content-10">
        <div className="content-10-box-1 content-10-box">
          <ImageSVG type={ImageType.Slide_10_1}></ImageSVG>
          <ImageSVG type={ImageType.Slide_10_2}></ImageSVG>
          <span className="content-10-box-text">1 ДЕНЬ</span>
        </div>
        <div className="content-10-box-2 content-10-box">
          <ImageSVG type={ImageType.Slide_10_3}></ImageSVG>
          <span className="content-10-box-text">2-5 ДЕНЬ</span>
        </div>
        <h3 className="content-10-text">
          ДЛЯ ПРОФІЛАКТИКИ{" "}
          <ColoredText pageColor="ergoferon">1-2 ТАБЛЕТКИ</ColoredText> НА ДОБУ
        </h3>
        <ImageSVG type={ImageType.Slide_09_3} className="slide_09_3" />
      </div>
    </Frame>
  );
};

export default Page;
