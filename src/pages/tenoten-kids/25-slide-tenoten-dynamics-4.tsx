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
          більш ніж в{" "}
          <ColoredText pageColor="tenotenKids">1.5 рази</ColoredText> усуває
          патологічні ритми <br />
          серця у пацієнтів з вегетативними дисфункціями
        </>
      }
      footerText="Є.В.Зубов, О.А.Єршова Можливості терапії корекції вегетативної дисфункції синусового вузла в педіатрії. Педіатрія. 2010 Том 89. №3"
      pageColor="tenotenKids"
    >
      <ImageSVG type={ImageType.Slide_25_2} className="hearts-25" />
      <SubTitle pageColor="tenotenKids">
        Динаміка показників ЕКГ у дітей з синдромом вегетативної
        <br /> дисфункції після курсу терапії Тенотеном дитячим
      </SubTitle>
      <div className="content-25">
        <ImageSVG type={ImageType.Slide_25_1} />
      </div>
    </Frame>
  );
};

export default Page;
