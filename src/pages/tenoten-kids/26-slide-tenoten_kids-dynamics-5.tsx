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
          усуває більш ніж у{" "}
          <ColoredText pageColor="tenotenKids">70%</ColoredText> пацієнтів
          вегетативні та психоемоційні <br />
          порушення після перенесених{" "}
          <ColoredText pageColor="tenotenKids">
            респіраторних інфекцій
          </ColoredText>
        </>
      }
      footerText="Є.В.Зубов, О.А.Єршова Можливості терапії корекції вегетативної дисфункції синусового вузла в педіатрії. Педіатрія. 2010 Том 89. №3"
      pageColor="tenotenKids"
      kids
    >
      <SubTitle pageColor="tenotenKids">
        ДДинаміка клінічних проявів порушення адаптаційно-компенсаторних
        <br /> рекцій у дітей з ГРВІ після 3-х місяців терапії Тенотеном дитячим
      </SubTitle>
      <div className="content-26">
        <ImageSVG type={ImageType.Slide_26_1} />
      </div>
    </Frame>
  );
};

export default Page;
