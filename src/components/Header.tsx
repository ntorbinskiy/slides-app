import React from "react";

import { PageColor } from "./Frame";

interface Props {
  readonly title: string;
  readonly description: React.ReactNode;
  readonly upperCase?: boolean;
  readonly pageColor: PageColor;
  readonly kids?: boolean;
  readonly headerStyles?: number;
}

export const colors = {
  ergoferon: "rgb(0, 128, 131)",
  rengalin: "rgb(225, 9, 32)",
  tenotenKids: "rgb(0, 156, 79)",
  tenoten: "rgb(25, 160, 86)",
  anaferonKids: "rgb(0, 136, 212)",
  anaferon: "rgb(30, 99, 175)",
};

const DividerBasicWidth = 70;

const Header: React.FC<Props> = (props) => {
  return (
    <>
      <svg
        width="48"
        height="92"
        viewBox="0 0 48 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="small-ocean-triangle"
      >
        <path d="M0 91.5L47.5 0H0V91.5Z" fill={colors[props.pageColor]} />
      </svg>
      <header
        className="header"
        style={{
          gridTemplateColumns: `auto ${
            props.headerStyles ?? DividerBasicWidth
          }%`,
        }}
      >
        <h1
          className="header-title"
          style={{
            color:
              props.pageColor === "rengalin"
                ? "black"
                : colors[props.pageColor],
            textTransform:
              props.pageColor === "rengalin" ? "capitalize" : "uppercase",
          }}
        >
          {props.title}
          {props.kids && <span>Дитячий</span>}
        </h1>
        <span
          className="header-description"
          style={{ textTransform: props.upperCase ? "uppercase" : "none" }}
        >
          {props.description}
        </span>
        <div className="header-divider">
          <hr
            className="header-divider-line"
            style={{ borderColor: colors[props.pageColor] }}
          />
          <div
            className="header-divider-circle"
            style={{ background: colors[props.pageColor] }}
          ></div>
        </div>
      </header>
    </>
  );
};

export default Header;
