import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
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
          більш ніж на <ColoredText pageColor="tenotenKids">80%</ColoredText>{" "}
          усуває головний біль та <br />
          емоційну лабільність у пацієнтів з вегетативними дисфункціями.
        </>
      }
      footerText="М.Ю. Галактіонова, И.Р. Ефективність використання «Тенотен ддитячий» при лікування синдрому вегетатитивної дисфункції у дітей та підлітків. Педіатрія. 2010. Том 89. №1"
      pageColor="tenotenKids"
      kids
    >
      <SubTitle pageColor="tenotenKids">
        Динаміка частоти скарг у дітей з вегетативними <br />
        дисфункціями після курусу терапії Тенотеном дитячим
      </SubTitle>
      <div className="content-23">
        <ImageSVG type={ImageType.Slide_23_1} />
        <ColorBlock colors={colors} />
      </div>
    </Frame>
  );
};

export default Page;
