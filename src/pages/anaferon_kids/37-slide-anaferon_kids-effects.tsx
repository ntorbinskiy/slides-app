import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
import SubTitle from "../../components/SubTitle";
import ImageSVG, { ImageType } from "../../components/Image";
import ColorBlock, { Color } from "../../components/ColorBlocks";

const colors: Color[] = [
  {
    text: <>АНАФЕРОН</>,
    gradient:
      "linear-gradient(180.00deg, rgb(16, 145, 218),rgb(125, 197, 237) 100%)",
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
      pageColor="anaferonKids"
      headerTitle="АНАФЕРОН"
      headerDescription={<>скорочує тривалість симптомів грві</>}
      footerText={
        <>
          Мокія-Сербіна С. А., Чечель В. В., Заболотна Н. И. Гомеопатичні
          препарати у профілактиці та лікуванні ГРВІ у дітей:
          <br /> порівняльний аналіз ефективності та безпеки застосування.
          Сучасна педіатрія. №7 2015. <br /> Веревщіков В.К. Оцінка
          еффективності та переносимості імунотропної терапії гострих
          респіраторних захворювань у <br />
          хворих з обтяженим кардіологчним анамнезом. Інфекційні хвороби.
          Т.6.№3. 2008.2.
        </>
      }
      footerStyle="content-37-footer"
      kids
    >
      <ImageSVG type={ImageType.Slide_37_2} className="slide_37_2" />

      <SubTitle pageColor="anaferonKids">
        анаферон дитячий в лікуванні грві
      </SubTitle>

      <div className="content-37">
        <ImageSVG type={ImageType.Slide_37_1} />
        <ColorBlock colors={colors} className="content-37-colors" />
      </div>
    </Frame>
  );
};

export default Page;
