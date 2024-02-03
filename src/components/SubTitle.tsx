import React from "react";
import { PageColor } from "./Frame";
import { colors } from "./Header";

interface Props {
  readonly children: React.ReactNode;
  readonly pageColor: PageColor;
}

const SubTitle: React.FC<Props> = ({ children, pageColor }) => {
  return (
    <h2
      className="subtitle"
      style={{
        color: colors[pageColor],
        fontWeight:
          pageColor === "ergoferon" || pageColor === "rengalin" ? 500 : 600,
      }}
    >
      {children}
    </h2>
  );
};

export default SubTitle;
