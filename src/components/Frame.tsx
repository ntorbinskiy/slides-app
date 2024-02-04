import React from "react";
import Header from "./Header";

import FooterInfo from "./FooterInfo";

export type PageColor =
  | "ergoferon"
  | "rengalin"
  | "tenoten"
  | "tenotenKids"
  | "anaferon"
  | "anaferonKids";

interface Props {
  readonly pageColor: PageColor;

  readonly headerTitle: string;
  readonly headerDescription: React.ReactNode;
  readonly upperCase?: boolean;
  readonly bodyStyles?: Object;
  readonly headerStyles?: string;

  readonly footerText: React.ReactNode;
  readonly footerStyle?: string;

  readonly hideFooterTriangle?: boolean;
  readonly kids?: boolean;
  readonly children: JSX.Element[] | JSX.Element;
}

const Frame: React.FC<Props> = (props) => (
  <>
    <div className="content" style={props.bodyStyles}>
      <Header
        title={props.headerTitle}
        description={props.headerDescription}
        upperCase={props.upperCase}
        pageColor={props.pageColor}
        kids={props.kids}
        headerStyles={props.headerStyles}
      />
      {props.children}
    </div>
    <FooterInfo
      text={props.footerText}
      hideFooterTriangle={props.hideFooterTriangle}
      pageColor={props.pageColor}
      footerStyle={props.footerStyle}
    />
  </>
);

export default Frame;
