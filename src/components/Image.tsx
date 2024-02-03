import React from "react";

import Triangle from "../images/big-ocean-triangle.svg";
import InfoIcon from "../images/info-icon.svg";
import HomeIcon from "../images/home-icon.svg";
import HeaderTriangle from "../images/small-ocean-triangle.svg";
import BellIcon from "../images/bell-icon.svg";

import Slide_07_Diagram from "../images/07-ergoferon-diagram.svg";

import Slide_08_shield from "../images/08-shield.svg";
import Slide_08_groupIcon1 from "../images/08-icon-group-1.svg";
import Slide_08_2_Icon1 from "../images/08-1-icon-item-2.svg";
import Slide_08_2_Icon2 from "../images/08-2-icon-item-2.svg";
import Slide_08_2_Icon3 from "../images/08-3-icon-item-2.svg";

import Slide_09_1 from "../images/left-side-09.svg";
import Slide_09_2 from "../images/right-side-09.svg";
import Slide_09_3 from "../images/ergoferon-09.svg";

import Slide_10_1 from "../images/first-10.svg";
import Slide_10_2 from "../images/second-10.svg";
import Slide_10_3 from "../images/third-10.svg";

import Slide_11_1 from "../images/left-side-11.svg";
import Slide_11_2 from "../images/right-side-11.svg";
import Slide_11_3 from "../images/left-side-arrow-11.svg";
import Slide_11_4 from "../images/right-side-arrow-11.svg";
import Slide_11_5 from "../images/5-11.svg";
import Slide_11_6 from "../images/shield-1-11.svg";
import Slide_11_7 from "../images/shield-2-11.svg";

import Slide_12_1 from "../images/graph-12.svg";

import Slide_13_1 from "../images/graph-13.svg";
import Slide_13_2 from "../images/woman-13.svg";

import Slide_14_1 from "../images/graph-14.svg";

import Slide_15_1 from "../images/graph-15.svg";
import Slide_15_2 from "../images/renagalin-15.svg";

import Slide_17_1 from "../images/graph-17.svg";

import Slide_18_1 from "../images/graph-18.svg";

import Slide_22_1 from "../images/graph-22.svg";

import Slide_23_1 from "../images/graph-23.svg";

import Slide_24_1 from "../images/graph-24.svg";

import Slide_25_1 from "../images/graph-25.svg";
import Slide_25_2 from "../images/hearts-25.svg";

import Slide_26_1 from "../images/graph-26.svg";

export const enum ImageType {
  FooterTriangle,
  FooterInfoIcon,
  FooterHomeIcon,
  HeaderTriangle,
  BellIcon,
  Slide_07_Diagram,
  Slide_08_shield,
  Slide_08_groupIcon1,
  Slide_08_2_Icon1,
  Slide_08_2_Icon2,
  Slide_08_2_Icon3,
  Slide_09_1,
  Slide_09_2,
  Slide_09_3,
  Slide_10_1,
  Slide_10_2,
  Slide_10_3,
  Slide_11_1,
  Slide_11_2,
  Slide_11_3,
  Slide_11_4,
  Slide_11_5,
  Slide_11_6,
  Slide_11_7,
  Slide_12_1,
  Slide_13_1,
  Slide_13_2,
  Slide_14_1,
  Slide_15_1,
  Slide_15_2,
  Slide_17_1,
  Slide_18_1,
  Slide_22_1,
  Slide_23_1,
  Slide_24_1,
  Slide_25_1,
  Slide_25_2,
  Slide_26_1,
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
  [ImageType.BellIcon]: BellIcon,
  [ImageType.Slide_07_Diagram]: Slide_07_Diagram,
  [ImageType.Slide_08_shield]: Slide_08_shield,
  [ImageType.Slide_08_groupIcon1]: Slide_08_groupIcon1,
  [ImageType.Slide_08_2_Icon1]: Slide_08_2_Icon1,
  [ImageType.Slide_08_2_Icon2]: Slide_08_2_Icon2,
  [ImageType.Slide_08_2_Icon3]: Slide_08_2_Icon3,
  [ImageType.Slide_09_1]: Slide_09_1,
  [ImageType.Slide_09_2]: Slide_09_2,
  [ImageType.Slide_09_3]: Slide_09_3,
  [ImageType.Slide_10_1]: Slide_10_1,
  [ImageType.Slide_10_2]: Slide_10_2,
  [ImageType.Slide_10_3]: Slide_10_3,
  [ImageType.Slide_11_1]: Slide_11_1,
  [ImageType.Slide_11_2]: Slide_11_2,
  [ImageType.Slide_11_3]: Slide_11_3,
  [ImageType.Slide_11_4]: Slide_11_4,
  [ImageType.Slide_11_5]: Slide_11_5,
  [ImageType.Slide_11_7]: Slide_11_6,
  [ImageType.Slide_11_6]: Slide_11_7,
  [ImageType.Slide_12_1]: Slide_12_1,
  [ImageType.Slide_13_1]: Slide_13_1,
  [ImageType.Slide_13_2]: Slide_13_2,
  [ImageType.Slide_14_1]: Slide_14_1,
  [ImageType.Slide_15_1]: Slide_15_1,
  [ImageType.Slide_15_2]: Slide_15_2,
  [ImageType.Slide_17_1]: Slide_17_1,
  [ImageType.Slide_18_1]: Slide_18_1,
  [ImageType.Slide_22_1]: Slide_22_1,
  [ImageType.Slide_23_1]: Slide_23_1,
  [ImageType.Slide_24_1]: Slide_24_1,
  [ImageType.Slide_25_1]: Slide_25_1,
  [ImageType.Slide_25_2]: Slide_25_2,
  [ImageType.Slide_26_1]: Slide_26_1,
};

const ImageSVG: React.FC<Props> = (props) => (
  <img src={typeToUrl[props.type]} className={props.className} />
);

export default ImageSVG;
