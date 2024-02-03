import React from "react";
import Frame from "../../components/Frame";
import "../../root.css";
import ColoredText from "../../components/ColoredText";
import SubTitle from "../../components/SubTitle";
import ImageSVG, { ImageType } from "../../components/Image";

const Page: React.FC = ({}) => {
  return (
    <Frame
      headerTitle="ТЕНОТЕН"
      headerDescription={
        <>
          Потрійна допомога{" "}
          <ColoredText pageColor="tenoten">нервовій системі</ColoredText>{" "}
          протитривожна,
          <br /> вегетотропна, ноотропна в умовах підвищеного{" "}
          <ColoredText pageColor="tenoten">стресового фону</ColoredText>
        </>
      }
      footerText={
        <>
          О.С.Чабан. Стрес-індуковані порушення в практиці
          <br /> сімейного лікаря. Здоров’я України. №18 2018 р.
        </>
      }
      pageColor="tenoten"
    >
      <SubTitle pageColor="tenoten">
        одночасний прийом тенотена з антигіпертензивними препаратами допомогає
        <br /> в
        <span
          className="subtitle"
          style={{ fontWeight: 800, color: "rgb(25, 160, 86)" }}
        >
          {" "}
          2 рази
        </span>{" "}
        швидше досягти стійкого зниження артеріального тиску (ат)
      </SubTitle>
      <div className="content-32">
        <ImageSVG type={ImageType.Slide_32_1} />
      </div>
    </Frame>
  );
};

export default Page;
