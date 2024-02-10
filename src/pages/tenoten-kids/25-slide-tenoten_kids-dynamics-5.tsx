import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
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
          <ColoredText pageColor="tenotenKids" lowercase>
            респіраторних інфекцій
          </ColoredText>
        </>
      }
      headerStyles={66}
      footerText={
        <>
          Мітюряєва І. О. Корекція порушень адаптації як невід'ємний компонент
          лікування
          <br /> ГРВІ у дітей. Новини медицини та фармації. Тематичний номер №4.
          2019
        </>
      }
      pageColor="tenotenKids"
      kids
    >
      <SubTitle pageColor="tenotenKids">
        Динаміка клінічних проявів порушення адаптаційно-компенсаторних
        <br /> рекцій у дітей з ГРВІ після 3-х місяців терапії Тенотеном дитячим
      </SubTitle>
      <div className="content-25">
        <ImageSVG type={ImageType.Slide_25_1} />
      </div>
    </Frame>
  );
};

export default Page;
