import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
import ColoredText from "../../components/ColoredText";

import ImageSVG, { ImageType } from "../../components/Image";

const Page: React.FC = ({}) => {
  return (
    <Frame
      pageColor="anaferon"
      headerTitle="АНАФЕРОН"
      headerDescription={
        <>
          знижує ризик зараження грві та грипом в{" "}
          <ColoredText pageColor="anaferon">2 рази1</ColoredText>
        </>
      }
      footerText={
        <>
          Каіра А.І. Не специфічна профілактика грипу та гострих респіраторних
          вірусних інфекцій препаратів Анаферон. <br /> Інфекційні хвороби. 2005
          Т.№3
        </>
      }
    >
      <div className="content-39">
        <ImageSVG type={ImageType.Slide_39_1} />
      </div>
    </Frame>
  );
};

export default Page;
