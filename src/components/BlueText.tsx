import React, { FC } from "react";

interface BlueTextProps {
  children: string;
}

const BlueText: FC<BlueTextProps> = ({ children }) => {
  return <span className="blue-text">{children}</span>;
};

export default BlueText;
