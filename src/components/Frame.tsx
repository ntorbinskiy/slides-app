import React from "react";
import Header from "./Header";

import FooterInfo from "./FooterInfo";

interface Props {
  readonly headerTitle: string;
  readonly headerDescription: React.ReactNode;
  readonly upperCase?: boolean;
  readonly bodyStyles?: Object;

  readonly footerText: string;

  readonly hideFooterTriangle?: boolean;
  readonly children: JSX.Element[] | JSX.Element;
}

const Frame: React.FC<Props> = (props) => {
  return (
    <>
      <div className="content" style={props.bodyStyles}>
        <Header
          title={props.headerTitle}
          description={props.headerDescription}
          upperCase={props.upperCase}
        />
        {props.children}
      </div>
      <FooterInfo text={props.footerText} hideFooterTriangle />
    </>
  );
};

export default Frame;
