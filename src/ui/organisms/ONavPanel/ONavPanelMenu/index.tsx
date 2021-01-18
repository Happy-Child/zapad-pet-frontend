import React from "react";
import "./style.scss";
import {ONavPanelMenuItem} from "../ONavPanelMenuItem";
import {TONavPanelMenu} from "./types";

const ONavPanelMenu: React.FC<TONavPanelMenu> = ({ menu }: TONavPanelMenu) => {
  return (
    <ul className="o-nav-panel-menu">
      {menu.map((menuItem) => (
        <ONavPanelMenuItem key={menuItem.as} item={menuItem} />
      ))}
    </ul>
  )
};

export { ONavPanelMenu };
