import React, { FC } from "react";

export interface Color {
  readonly text: React.ReactNode;
  readonly gradient: string;
}

const Color: FC<Color> = (props) => (
  <div className="color">
    <div className="color-block" style={{ background: props.gradient }}></div>
    <div className="color-name">{props.text}</div>
  </div>
);

interface ColorBlocksProps {
  colorAmount: number;
  colors: Color[];
  className?: string;
}

const ColorBlock: FC<ColorBlocksProps> = (props) => {
  console.log(props.colors);
  return (
    <div className={`colors ${props.className}`}>
      {props.colors.map((color) => (
        <Color text={color.text} gradient={color.gradient} />
      ))}
    </div>
  );
};

export default ColorBlock;
