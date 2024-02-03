import React, { FC } from "react";
import { PageColor } from "./Frame";
import { colors } from "./Header";

interface BlueTextProps {
  children: string;
  readonly pageColor: PageColor;
}

const ColoredText: FC<BlueTextProps> = ({ children, pageColor }) => {
  return (
    <span className="colored-text" style={{ color: colors[pageColor] }}>
      {children}
    </span>
  );
};

export default ColoredText;
