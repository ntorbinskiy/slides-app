import React from "react";
import Frame from "../../components/Frame";
import "../../root.css";
import SubTitle from "../../components/SubTitle";
import ImageSVG, { ImageType } from "../../components/Image";
import ColorBlock, { Color } from "../../components/ColorBlocks";

const colors: Color[] = [
  {
    text: <>АНАФЕРОН</>,
    gradient:
      "linear-gradient(180.00deg, rgb(81, 106, 207),rgb(159, 178, 255) 100%)",
  },
  {
    text: <>Плацебо</>,
    gradient:
      "linear-gradient(180.00deg, rgb(187, 187, 187),rgba(187, 187, 187, 0) 159.615%)",
  },
];

const Page: React.FC = ({}) => {
  return (
    <Frame
      pageColor="anaferon"
      headerTitle="АНАФЕРОН"
      headerDescription={<>скорочує тривалість симптомів грві</>}
      footerText={
        <ol className="ol">
          <li>
            {" "}
            Мокія-Сербіна С. А., Чечель В. В., Заболотна Н. И. Гомеопатичні
            препарати у профілактиці та лікуванні ГРВІ у дітей
            <br />: порівняльний аналіз ефективності та безпеки застосування.
            Сучасна педіатрія. №7 2015{" "}
          </li>
          <li>
            Веревщіков В.К. Оцінка еффективності та переносимості імунотропної
            терапії гострих респіраторних захворювань у <br />
            хворих з обтяженим кардіологчним анамнезом. Інфекційні хвороби.
            Т.6.№3. 2008.
          </li>
        </ol>
      }
      footerStyle="content-40-footer"
      upperCase
    >
      <SubTitle pageColor="anaferon">
        анаферон в лікуванні грві у дорослих пацієнтів із
        <br /> супутньою серцево-судинною паталогією
      </SubTitle>

      <div className="content-40">
        <ImageSVG type={ImageType.Slide_40_1} />
        <ColorBlock colors={colors} className="content-40-colors" />
      </div>
    </Frame>
  );
};

export default Page;
