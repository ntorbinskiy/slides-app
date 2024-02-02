import React from "react";

import Triangle from "../images/big-ocean-triangle.svg";
import InfoIcon from "../images/info-icon.svg";
import HomeIcon from "../images/home-icon.svg";
import HeaderTriangle from "../images/small-ocean-triangle.svg";

import Slide_07_Diagram from "../images/07-ergoferon-diagram.svg";

import Slide_08_shield from "../images/08-shield.svg";
import Slide_08_groupIcon1 from "../images/08-icon-group-1.svg";
import Slide_08_2_Icon1 from "../images/08-1-icon-item-2.svg";
import Slide_08_2_Icon2 from "../images/08-2-icon-item-2.svg";
import Slide_08_2_Icon3 from "../images/08-3-icon-item-2.svg";

import Slide_09_1 from "../images/left-side-09.svg";
import Slide_09_2 from "../images/right-side-09.svg";
import Slide_09_3 from "../images/ergoferon-09.svg";

export const enum ImageType {
  FooterTriangle,
  FooterInfoIcon,
  FooterHomeIcon,
  HeaderTriangle,
  Slide_07_Diagram,
  Slide_08_shield,
  Slide_08_groupIcon1,
  Slide_08_2_Icon1,
  Slide_08_2_Icon2,
  Slide_08_2_Icon3,
  Slide_09_1,
  Slide_09_2,
  Slide_09_3,
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
  [ImageType.Slide_07_Diagram]: Slide_07_Diagram,
  [ImageType.Slide_08_shield]: Slide_08_shield,
  [ImageType.Slide_08_groupIcon1]: Slide_08_groupIcon1,
  [ImageType.Slide_08_2_Icon1]: Slide_08_2_Icon1,
  [ImageType.Slide_08_2_Icon2]: Slide_08_2_Icon2,
  [ImageType.Slide_08_2_Icon3]: Slide_08_2_Icon3,
  [ImageType.Slide_09_1]: Slide_09_1,
  [ImageType.Slide_09_2]: Slide_09_2,
  [ImageType.Slide_09_3]: Slide_09_3,
};

const ImageSVG: React.FC<Props> = (props) => (
  <img src={typeToUrl[props.type]} className={props.className} />
);

export default ImageSVG;
