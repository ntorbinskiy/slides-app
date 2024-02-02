import React, { useState } from "react";

import Triangle from "../images/big-ocean-triangle.svg";
import InfoIcon from "../images/info-icon.svg";
import HomeIcon from "../images/home-icon.svg";
import HeaderTriangle from "../images/small-ocean-triangle.svg";

export const enum ImageType {
  FooterTriangle,
  FooterInfoIcon,
  FooterHomeIcon,
  HeaderTriangle,
}

export type Props = {
  readonly type: ImageType;
  readonly className?: string;
};

const typeToUrl: Record<ImageType, string> = {
  [ImageType.FooterTriangle]: Triangle,
  [ImageType.FooterInfoIcon]: InfoIcon,
  [ImageType.FooterHomeIcon]: HomeIcon,
  [ImageType.HeaderTriangle]: HeaderTriangle,
};

const ImageSVG: React.FC<Props> = (props) => (
  <img src={typeToUrl[props.type]} className={props.className} />
);

export default ImageSVG;
