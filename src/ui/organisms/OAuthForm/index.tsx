import React from "react";
import { TOAuthForm } from "./types";
import "./style.scss"
import { AImage } from "../../atoms/AImage";

const OAuthForm: React.FC<TOAuthForm> = ({ children }: TOAuthForm) => {
  return (
    <div className="o-auth-form">
      <AImage
        className="o-auth-form__logo"
        src="/images/logo-main.svg"
      />
      {children}
    </div>
  )
};

export { OAuthForm };
