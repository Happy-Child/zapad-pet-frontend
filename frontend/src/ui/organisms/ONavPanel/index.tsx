import React from "react";
import "./style.scss"
import {AImage} from "../../atoms/AImage"
import {ALink} from "../../atoms/ALink";
import { ONavPanelMenu } from "./ONavPanelMenu";
import IconHome from "../../../../public/images/svg/menu/icon-menu-1.svg";
import IconBid from "../../../../public/images/svg/menu/icon-menu-2.svg";
import IconBaseStations from "../../../../public/images/svg/menu/icon-menu-3.svg";
import IconStaff from "../../../../public/images/svg/menu/icon-menu-4.svg";
import IconReports from "../../../../public/images/svg/menu/icon-menu-5.svg";
import IconStatistics from "../../../../public/images/svg/menu/icon-menu-6.svg";
import IconEquipmentAccounting from "../../../../public/images/svg/menu/icon-menu-7.svg";

const menu = [
  {
    text: 'Главная',
    iconComponent: IconHome,
    as: '/member',
    href: '/member',
    menu: null,
  },
  {
    text: 'Заявки',
    iconComponent: IconBid,
    as: '/member/bid',
    href: '/member/bid',
    menu: null,
  },
  {
    text: 'Базовые станции',
    iconComponent: IconBaseStations,
    as: '/member/base-stations',
    href: '/member/base-stations',
    menu: null,
  },
  {
    text: 'Персонал',
    iconComponent: IconStaff,
    as: '/member/staff',
    href: '/member/staff',
    menu: null,
  },
  {
    text: 'Отчеты',
    iconComponent: IconReports,
    as: '/member/reports',
    href: '/member/reports',
    menu: null,
  },
  {
    text: 'Статистика',
    iconComponent: IconStatistics,
    as: '/member/statistics',
    href: '/member/statistics',
    menu: null,
  },
  {
    text: 'Учет оборудования',
    iconComponent: IconEquipmentAccounting,
    as: '/member/equipment-accounting',
    href: '/member/equipment-accounting',
    menu: null,
  },
];

const ONavPanel: React.FC = () => {
  return (
    <nav className="o-nav-panel">
      <div className="o-nav-panel__inner">
        <ALink as="/member" href="/member" className="o-nav-panel__wrap-logo">
          <AImage src="/images/logo-main.svg" />
        </ALink>
        <ONavPanelMenu menu={menu} />
      </div>
    </nav>
  )
};

export { ONavPanel };
