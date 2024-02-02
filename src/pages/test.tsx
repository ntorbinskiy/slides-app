import React from "react";
import "../styles.css";
import { Image, ImageType } from "../components/Image";

const test = () => {
  return (
    <>
      <div className="red"> Hello </div>
      <Image type={ImageType.Slide1_1} />
    </>
  );
};

export default test;
