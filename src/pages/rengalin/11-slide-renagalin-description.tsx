import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
import ImageSVG, { ImageType } from "../../components/Image";

const Page: React.FC = ({}) => {
  return (
    <Frame
      headerTitle="Ренгалін"
      headerDescription={
        <>
          Протикашльовий препарат із протизапальною, бронхолітичною <br />{" "}
          діями, для лікування сухого, вологого та залишкового кашлю
        </>
      }
      footerText="Інструкція для медичного застосування препарату Ренгалін"
      pageColor="rengalin"
    >
      <div className="content-11">
        <ImageSVG type={ImageType.Slide_11_5} />

        <div className="content-11-box">
          <ImageSVG type={ImageType.Slide_11_1} className="slide_11_1" />

          <ImageSVG type={ImageType.Slide_11_3} className="slide_11_3" />
          <div className="content-11-sub-box">
            <div className="content-11-sub-box-item">
              Антитіла до <br />
              гістамину
            </div>
            <div className="content-11-sub-box-item">
              Антитіла до <br />
              брадикініну
            </div>
            <div className="content-11-sub-box-item">
              Антитіла до <br />
              морфіну
            </div>
          </div>
          <ImageSVG type={ImageType.Slide_11_4} className="slide_11_4" />

          <ImageSVG type={ImageType.Slide_11_2} className="slide_11_2" />
        </div>
      </div>
      <ImageSVG type={ImageType.Slide_11_6} className="slide_11_6" />
      <ImageSVG type={ImageType.Slide_11_7} className="slide_11_7" />
    </Frame>
  );
};

export default Page;
