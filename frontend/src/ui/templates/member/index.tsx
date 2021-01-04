import React from "react";
import "./style.scss"
import { TLayoutMember } from "./types";

const MemberLayoutContainer: React.FC<TLayoutMember> = ({ children }: TLayoutMember) => {
  return (
    <div className="member-container">
      {children}
    </div>
  )
}


export { MemberLayoutContainer }
