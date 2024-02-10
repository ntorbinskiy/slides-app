import React, { FC, useEffect, useState } from "react";
import { PageColor } from "./Frame";
import { colors } from "./Header";

interface BlueTextProps {
  children: string;
  readonly pageColor: PageColor;
  readonly lowercase?: boolean;
  readonly capitalize?: boolean;
}

type Text = "capitalize" | "uppercase" | "lowercase";

const ColoredText: FC<BlueTextProps> = ({
  children,
  pageColor,
  lowercase,
  capitalize,
}) => {
  const [textTransform, setTextTransform] = useState<Text>("uppercase");
  useEffect(() => {
    if (lowercase) {
      setTextTransform("lowercase");
    }

    if (capitalize) {
      setTextTransform("capitalize");
    }
  }, []);

  return (
    <span
      className="colored-text"
      style={{
        color: colors[pageColor],
        textTransform,
      }}
    >
      {children}
    </span>
  );
};

export default ColoredText;
