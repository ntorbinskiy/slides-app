import React from "react";

interface Props {
  readonly title: string;
}

const SubTitle: React.FC<Props> = ({ title }) => {
  return <h2 className="subtitle">{title}</h2>;
};

export default SubTitle;
