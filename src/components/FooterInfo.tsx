import React from "react";
import ImageSVG, { ImageType } from "./Image";

interface Props {
  text: string;
}

const FooterInfo: React.FC<Props> = (props) => (
  <>
    <div className="footer-info">
      <ImageSVG type={ImageType.FooterInfoIcon}></ImageSVG>
      <span>{props.text}</span>
    </div>

    <div className="footer-line"></div>
    <ImageSVG
      type={ImageType.FooterHomeIcon}
      className="footer-home-icon"
    ></ImageSVG>
    <ImageSVG
      type={ImageType.FooterTriangle}
      className="big-ocean-triangle"
    ></ImageSVG>
  </>
);

export default FooterInfo;
