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
import Slide_09_4 from "../images/shield-09.svg";

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

import Slide_20_1 from "../images/modification-20.svg";

import Slide_21_1 from "../images/graph-21.svg";

import Slide_22_1 from "../images/graph-22.svg";

import Slide_23_1 from "../images/graph-23.svg";

import Slide_24_1 from "../images/graph-24.svg";
import Slide_24_2 from "../images/hearts-24.svg";

import Slide_25_1 from "../images/graph-25.svg";

import Slide_29_1 from "../images/modification-29.svg";

import Slide_30_1 from "../images/graph-30.svg";
import Slide_30_2 from "../images/moon-30.svg";

import Slide_31_1 from "../images/graph-31.svg";
import Slide_31_2 from "../images/sleepy-31.svg";

import Slide_32_1 from "../images/graph-32.svg";

import Slide_33_1 from "../images/diagrams-33.svg";

import Slide_34_1 from "../images/graph-34.svg";

import Slide_35_1 from "../images/schema-35.svg";
import Slide_35_2 from "../images/tenoten-35.svg";

import Slide_36_1 from "../images/graph-36.svg";

import Slide_37_1 from "../images/graph-37.svg";
import Slide_37_2 from "../images/blue-hearts-37.svg";

import Slide_38_1 from "../images/cons-38.svg";
import Slide_38_2 from "../images/anaferon_kids-38.svg";

import Slide_39_1 from "../images/graph-39.svg";

import Slide_40_1 from "../images/graph-40.svg";

import Slide_41_1 from "../images/cons-41.svg";
import Slide_41_2 from "../images/anaferon-41.svg";
import Slide_41_3 from "../images/purple-hearts-41.svg";

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
  Slide_20_1,
  Slide_22_1,
  Slide_23_1,
  Slide_24_1,
  Slide_25_1,
  Slide_30_1,
  Slide_30_2,
  Slide_31_1,
  Slide_31_2,
  Slide_32_1,
  Slide_34_1,
  Slide_36_1,
  Slide_37_1,
  Slide_37_2,
  Slide_39_1,
  Slide_40_1,
  Slide_33_1,
  Slide_35_1,
  Slide_35_2,
  Slide_38_1,
  Slide_38_2,
  Slide_41_1,
  Slide_41_2,
  Slide_41_3,
  Slide_29_1,
  Slide_21_1,
  Slide_09_4,
  Slide_24_2,
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
  [ImageType.Slide_30_1]: Slide_30_1,
  [ImageType.Slide_30_2]: Slide_30_2,
  [ImageType.Slide_31_1]: Slide_31_1,
  [ImageType.Slide_31_2]: Slide_31_2,
  [ImageType.Slide_32_1]: Slide_32_1,
  [ImageType.Slide_34_1]: Slide_34_1,
  [ImageType.Slide_36_1]: Slide_36_1,
  [ImageType.Slide_37_1]: Slide_37_1,
  [ImageType.Slide_37_2]: Slide_37_2,
  [ImageType.Slide_39_1]: Slide_39_1,
  [ImageType.Slide_40_1]: Slide_40_1,
  [ImageType.Slide_33_1]: Slide_33_1,
  [ImageType.Slide_35_1]: Slide_35_1,
  [ImageType.Slide_35_2]: Slide_35_2,
  [ImageType.Slide_38_1]: Slide_38_1,
  [ImageType.Slide_38_2]: Slide_38_2,
  [ImageType.Slide_41_1]: Slide_41_1,
  [ImageType.Slide_41_2]: Slide_41_2,
  [ImageType.Slide_41_3]: Slide_41_3,
  [ImageType.Slide_29_1]: Slide_29_1,
  [ImageType.Slide_21_1]: Slide_21_1,
  [ImageType.Slide_09_4]: Slide_09_4,
  [ImageType.Slide_20_1]: Slide_20_1,
  [ImageType.Slide_24_2]: Slide_24_2,
};

const ImageSVG: React.FC<Props> = (props) => (
  <img src={typeToUrl[props.type]} className={props.className} />
);

export default ImageSVG;
