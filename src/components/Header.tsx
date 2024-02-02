import React from "react";
import ImageSVG, { ImageType } from "./Image";

interface Props {
  readonly title: string;
  readonly description: React.ReactNode;
}

const Header: React.FC<Props> = ({ title, description }) => {
  return (
    <>
      <ImageSVG
        type={ImageType.HeaderTriangle}
        className="small-ocean-triangle"
      ></ImageSVG>
      <div className="header">
        <h1 className="header-title">{title}</h1>
        <span className="header-description">{description}</span>
        <div className="header-divider">
          <hr className="header-divider-line" />
          <div className="header-divider-circle"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
