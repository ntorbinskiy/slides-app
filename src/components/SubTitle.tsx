import React from "react";
import { PageColor } from "./Frame";
import { colors } from "./Header";

interface Props {
  readonly children: string;
  readonly pageColor: PageColor;
}

const SubTitle: React.FC<Props> = ({ children, pageColor }) => {
  return (
    <h2 className="subtitle" style={{ color: colors[pageColor] }}>
      {children}
    </h2>
  );
};

export default SubTitle;
