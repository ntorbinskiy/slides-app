import React, { FC } from "react";
import "../../styles/root.css";

import Frame from "../../components/Frame";
import ColoredText from "../../components/ColoredText";
import ImageSVG, { ImageType } from "../../components/Image";

const Page: FC = () => {
  return (
    <Frame
      pageColor="ergoferon"
      headerTitle="ЕРГОФЕРОН"
      headerDescription={
        <>
          Профілактичній курс препарату протягом одного місяця знижує
          ймовірність повторного захворювання{" "}
          <ColoredText pageColor="ergoferon">у 2 рази</ColoredText>
        </>
      }
      footerText="Інструкція медичного застосування препарату Ергоферон; Для профілактики вірусних інфекцій захворювань – по 1-2 таблетки на добу. Рекомендований термін профіактичного курсу визначається індивідуально і може ставити 1-6 місяців; О.М. Охотнікова, О.В. Шарікадзе, Сучасні можливості лікування гострих респіраторних вірусних інфекцій у дітей з алергічною патологією, ЗУ «Педіатрія» №1 (40), березень 2017 р.   "
      bodyStyles={{ paddingRight: "0" }}
    >
      <div className="ergoferon-course-08">
        <ImageSVG
          type={ImageType.Slide_08_shield}
          className="slide-08-shield"
        />
        <div className="groupIcon1 groupIcon">
          <ImageSVG
            type={ImageType.Slide_08_groupIcon1}
            className="slide-08-groupIcon1"
          />
        </div>
        <div className="groupIcon2 groupIcon">
          <ImageSVG
            type={ImageType.Slide_08_2_Icon1}
            className="slide-08-2-groupIcon"
          />
          <ImageSVG
            type={ImageType.Slide_08_2_Icon2}
            className="slide-08-2-groupIcon"
          />
          <ImageSVG
            type={ImageType.Slide_08_2_Icon3}
            className="slide-08-2-groupIcon"
          />
        </div>
      </div>
    </Frame>
  );
};

export default Page;
