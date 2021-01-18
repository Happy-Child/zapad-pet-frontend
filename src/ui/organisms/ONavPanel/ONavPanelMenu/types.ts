import React from "react";

type TIconComponent = {
  className?: string,
}

type TONavPanelMenuDataItem = {
  text: string,
  customTextContent?: React.ReactNode,
  iconComponent?: React.FC<TIconComponent>,
  href: string,
  as: string,
  menu: TONavPanelMenuDataItem[] | null,
}

type TONavPanelMenu = {
  menu: TONavPanelMenuDataItem[],
}

export type { TONavPanelMenu, TONavPanelMenuDataItem }
