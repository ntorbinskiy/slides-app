import React from "react";
import Frame from "../../components/Frame";
import "../../root.css";
import ColoredText from "../../components/ColoredText";
import SubTitle from "../../components/SubTitle";
import ImageSVG, { ImageType } from "../../components/Image";
import ColorBlock, { Color } from "../../components/ColorBlocks";

const colors: Color[] = [
  {
    text: <>До лікування</>,
    gradient:
      " linear-gradient(180.00deg, rgb(187, 187, 187),rgba(187, 187, 187, 0) 159.615%)",
  },
  {
    text: <>Після лікування</>,
    gradient:
      "linear-gradient(183.47deg, rgb(124, 199, 0) -32.656%,rgb(198, 245, 121) 92.306%)",
  },
];

const Page: React.FC = ({}) => {
  return (
    <Frame
      headerTitle="ТЕНОТЕН"
      headerDescription={
        <>
          більш ніж у <ColoredText pageColor="tenotenKids">70%</ColoredText>{" "}
          пацієнтів купує порушення сну <br />
          та зменшує дратівливість при змінах психоемоційного фону
        </>
      }
      footerText="1. Л.С. Бабінець. Постінфекційний астеновегетативний синдром: шляхи профілактики та лікування в практиці сімейного лікаря. Здоров’я України. 2019. № 3."
      pageColor="tenotenKids"
      kids
    >
      <SubTitle pageColor="tenotenKids">
        Динаміка поведінкових реакцій у дітей, які приймали
        <br /> Тенотен дитячий, в період вікових кризів
      </SubTitle>

      <div className="content-20">
        <ImageSVG type={ImageType.Slide_20_1} />
        <ColorBlock colors={colors} className="content-20-colors" />
      </div>
    </Frame>
  );
};

export default Page;
