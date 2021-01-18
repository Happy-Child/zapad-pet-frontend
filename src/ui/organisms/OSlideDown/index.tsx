import React from "react";
import { TOSlideDown } from "./types";
import "./style.scss"
import {SlideDown} from "react-slidedown";

const OSlideDown: React.FC<TOSlideDown> = ({ children, open = false }: TOSlideDown) => {
  return (
    <SlideDown closed={!open}>
      {children}
    </SlideDown>
  )
};

export { OSlideDown };
