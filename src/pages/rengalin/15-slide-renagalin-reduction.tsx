import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
import ColoredText from "../../components/ColoredText";
import SubTitle from "../../components/SubTitle";
import ImageSVG, { ImageType } from "../../components/Image";
import BellInfo from "../../components/Bellinfo";

const Page: React.FC = ({}) => {
  return (
    <Frame
      headerTitle="Ренгалін"
      headerDescription={
        <>
          знижує потребу в муколітичній терапії на{" "}
          <ColoredText pageColor="rengalin">20%</ColoredText> вже через{" "}
          <ColoredText pageColor="rengalin" lowercase>
            3 дні
          </ColoredText>{" "}
          лікування
        </>
      }
      headerStyles={74}
      footerText={
        <>
          Л.Ф. Матюха, Ренгалін: застосування інноваційних технологій у
          лікуванні кашлю, Здоров’я України, № 3 (496) , Лютий 2021 р..; М. М.
          Кочуєва, І. І. Грек Ренгалін – нові можливості ефективної терапії
          кашлю,
          <br /> Здоров’я України № 4 (497), Лютий 2021 р.; Л.Ф.Матюха, НОВІ
          НАПРЯМКИ В РЕГУЛЯЦІЇ ВПЛИВУ НА КАШЛЬОВИЙ СИНДРОМ В АМБУЛАТОРНІЙ
          ПРАКТИЦІ, Новини Медицини та Фармації № 8 (726), 2020
        </>
      }
      pageColor="rengalin"
    >
      <SubTitle pageColor="rengalin">
        Частка пацієнтів з призначенням амброксолу на 4-й день лікування
      </SubTitle>
      <div className="content-15">
        <ImageSVG type={ImageType.Slide_15_1} className="slide_15_1" />
        <ImageSVG type={ImageType.Slide_15_2} className="slide_15_2" />
        <BellInfo
          text={
            <>
              <ColoredText pageColor="rengalin" capitalize>
                Прийом Ренгаліну
              </ColoredText>{" "}
              протягом трьох днів{" "}
              <ColoredText pageColor="rengalin" lowercase>
                перешкоджає розвитку ексудації
              </ColoredText>{" "}
              з утворенням в'язкого мокротиння, що істотно знижує потребу
              призначення муколітичних препаратів.
            </>
          }
          className="bell-info-15"
        />
      </div>
    </Frame>
  );
};

export default Page;
