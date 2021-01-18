import React from "react";
import { TAButton } from "./types";
import "./style.scss"
import cn from 'classnames';

const AButton: React.FC<TAButton> = ({ children, className = '', theme }: TAButton) => {
  const themeClass = theme ? `a-button_${theme}` : '';
  return (
    <button className={cn('a-button', themeClass, className)}>
      {children}
    </button>
  )
};

export { AButton };
