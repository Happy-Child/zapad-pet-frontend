import React from "react";
import "./style.scss"
import {ONavPanelMenuItem} from "../ONavPanelMenuItem";
import IconHome from '../../../../../public/images/svg/menu/icon-menu-1.svg'
import IconBid from '../../../../../public/images/svg/menu/icon-menu-2.svg'

const menu = [
  {
    text: 'Главная',
    iconJSX: IconHome,
    as: '/member',
    href: 'member',
  },
  {
    text: 'Заявки',
    iconJSX: IconBid,
    as: '/member/bid',
    href: 'member/bid',
  },
];

const ONavPanelMenu: React.FC = () => {
  return (
    <ul className="o-nav-panel-menu">
      <ONavPanelMenuItem
        as="/"
        href="/"
      >
        <IconHome className="o-nav-panel-menu__item-icon" />
        <span className="o-nav-panel-menu__item-text">
          Главный экран
        </span>
      </ONavPanelMenuItem>


      <ONavPanelMenuItem
        as="/"
        href="/"
      >
        <IconHome className="o-nav-panel-menu__item-icon" />
        <span className="o-nav-panel-menu__item-text">
          Главный экран
        </span>
      </ONavPanelMenuItem>

      <ONavPanelMenuItem
        as="/"
        href="/"
      >
        <IconHome className="o-nav-panel-menu__item-icon" />
        <span className="o-nav-panel-menu__item-text">
          Главный экран
        </span>
      </ONavPanelMenuItem>
    </ul>
  )
};

export { ONavPanelMenu };
