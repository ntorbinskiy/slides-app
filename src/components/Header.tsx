import React from "react";

interface Props {
  titleName: string;
  description: React.ReactNode;
}

const Header: React.FC<Props> = ({ titleName, description }) => {
  return (
    <div className="header">
      <h1 className="header-title">{titleName}</h1>
      <span className="header-description">{description}</span>
      <div className="header-divider">
        <hr className="header-divider-line" />
        <div className="header-divider-circle"></div>
      </div>
    </div>
  );
};

export default Header;
