import React from "react";
import G200 from "../images/g-200.svg";

export const enum ImageType {
  Slide1_1,
}

export type Props = {
  readonly type: ImageType;
};

const typeToUrl: Record<ImageType, string> = {
  [ImageType.Slide1_1]: G200,
};

export const Image: React.FC<Props> = (props) => {
  return <img src={typeToUrl[props.type]} />;
};
