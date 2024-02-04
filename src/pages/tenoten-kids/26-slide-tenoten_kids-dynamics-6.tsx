import React from "react";
import Frame from "../../components/Frame";
import "../../root.css";
import ColoredText from "../../components/ColoredText";
import SubTitle from "../../components/SubTitle";
import ImageSVG, { ImageType } from "../../components/Image";

const Page: React.FC = ({}) => {
  return (
    <Frame
      pageColor="tenotenKids"
      headerTitle="ТЕНОТЕН"
      headerStyles="divider-26"
      headerDescription={
        <>
          сприяє зниженню рівня тривоги з високого <br />
          до помірного більш ніж у{" "}
          <ColoredText pageColor="tenotenKids">60%</ColoredText>
          пацієнтів.
        </>
      }
      footerStyle="footer-26"
      footerText={
        <>
          1.Timothy Allen, Rashash Dhoalokia, Sylvia Johnson Clinical and safety
          evaluation of Brillia in patients with anxiety disorder. Clinical and
          Medical Reports. <br /> 26.05.2019.
          <a
            href="https://www.oatext.com/clinical-and-safety-evaluation-of-brillia-in-patients-with-anxiety-disorder.php#Article"
            style={{ color: "black" }}
          >
            https://www.oatext.com/clinical-and-safety-evaluation-of-brillia-in-patients-with-anxiety-disorder.php#Article
          </a>
        </>
      }
    >
      <SubTitle pageColor="tenotenKids" className="title-26">
        Динаміка частки рівня тривоги у пацієнтів з тривожними
        <br /> розладами після 12 тижнів лікування Тенотеном дитячим
      </SubTitle>
      <ImageSVG type={ImageType.Slide_26_1} className="slide_26_1" />
    </Frame>
  );
};

export default Page;
