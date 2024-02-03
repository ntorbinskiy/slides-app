import React, { FC } from "react";
import ImageSVG, { ImageType } from "./Image";

interface BellInfoProps {
  readonly text: React.ReactNode;
  readonly className?: string;
}

const BellInfo: FC<BellInfoProps> = (props) => {
  return (
    <div className={`bell-info ${props.className}`}>
      <ImageSVG type={ImageType.BellIcon} className="bell-icon" />
      <div className="bell-description">{props.text}</div>
    </div>
  );
};

export default BellInfo;
