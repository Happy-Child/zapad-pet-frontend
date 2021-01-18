import React from "react";
import "./style.scss"
import {TONavPanelMenuItem} from "./types";
import {ONavPanelMenu} from "../ONavPanelMenu";
import { ALink } from "../../../atoms/ALink";
import cn from "classnames";
import {NextRouter, useRouter} from "next/router";

const ONavPanelMenuItem: React.FC<TONavPanelMenuItem> = ({ item }: TONavPanelMenuItem) => {
  const { route }: NextRouter = useRouter();
  const active = route.endsWith(item.as);

  const customTextContent = item.customTextContent;
  const Icon = item.iconComponent;
  const child = item.menu;

  return (
    <li className={cn('o-nav-panel-menu-item', {'o-nav-panel-menu-item_has-child': child})}>
      <ALink className={cn("o-nav-panel-menu-item__link", {"o-nav-panel-menu-item__link_active": active})} as={item.as} href={item.href}>
        {Icon && (<Icon className="o-nav-panel-menu-item__icon" />)}
        <span className="o-nav-panel-menu-item__text">
          {customTextContent ?? item.text}
        </span>
      </ALink>
      {child && active && <ONavPanelMenu menu={child} />}
    </li>
  )
};

export { ONavPanelMenuItem };
