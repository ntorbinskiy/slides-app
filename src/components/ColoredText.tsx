import React, { FC } from "react";
import { PageColor } from "./Frame";
import { colors } from "./Header";

interface BlueTextProps {
  children: string;
  readonly pageColor: PageColor;
  readonly lowercase?: boolean;
}

const ColoredText: FC<BlueTextProps> = ({ children, pageColor, lowercase }) => {
  return (
    <span
      className="colored-text"
      style={{
        color: colors[pageColor],
        textTransform: lowercase ? "none" : "uppercase",
      }}
    >
      {children}
    </span>
  );
};

export default ColoredText;
