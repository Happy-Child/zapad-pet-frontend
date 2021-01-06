import React from "react";
import "./style.scss"
import {TONavPanelMenuItem} from "./types";

const ONavPanelMenuItem: React.FC<TONavPanelMenuItem> = ({ children }: TONavPanelMenuItem) => {
  return (
    <li>
      {children}
    </li>
  )
};

export { ONavPanelMenuItem };
