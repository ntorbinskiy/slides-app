import React from "react";
import Header from "./Header";

import FooterInfo from "./FooterInfo";

interface Props {
  readonly hideFooterTriangle?: boolean;
  readonly headerTitle: string;
  readonly headerDescription: React.ReactNode;
  readonly footerText: string;
  readonly children: JSX.Element;
}

const Frame: React.FC<Props> = (props) => {
  return (
    <>
      <Header title={props.headerTitle} description={props.headerDescription} />
      {props.children}
      <FooterInfo text={props.footerText} />
    </>
  );
};

export default Frame;
