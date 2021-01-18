import React from "react";
import { TAInput } from "./types";
import "./style.scss"
import cn from 'classnames';

const AInput: React.FC<TAInput> = ({ className = '', type = 'text', placeholder = '', label }: TAInput) => {
  return (
    <label className={cn('a-input', className)}>
      {label && <span className="a-input__label">{label}</span>}
      <input className="a-input__field" type={type} placeholder={placeholder} />
    </label>
  )
};

export { AInput };
