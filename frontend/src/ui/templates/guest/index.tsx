import React from "react";
import "./style.scss"
import { TLayoutGuest } from "./types";

const GuestLayoutContainer: React.FC<TLayoutGuest> = ({ children }: TLayoutGuest) => {
  return (
    <div className="guest-container">
      <div className="guest-container__item guest-container__wrap-content">
        {children}
      </div>
      <div className="guest-container__item guest-container__wrap-img" />
    </div>
  )
}


export { GuestLayoutContainer }
