import React from "react";
import "./style.scss"
import {AImage} from "../../atoms/AImage";
import {ALink} from "../../atoms/ALink";
import { ONavPanelMenu } from "./ONavPanelMenu";

const ONavPanel: React.FC = () => {
  return (
    <nav className="o-nav-panel">
      <div className="o-nav-panel__inner">
        <ALink as="/" href="/" className="o-nav-panel__wrap-logo">
          <AImage src="/images/logo-main.svg" />
        </ALink>

        <ONavPanelMenu />
      </div>
    </nav>
  )
};

export { ONavPanel };
