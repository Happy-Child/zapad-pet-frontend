import React from "react";
import "./style.scss"
import { TLayoutMember } from "./types";
import { ONavPanel } from "../../organisms/ONavPanel";

const MemberLayoutContainer: React.FC<TLayoutMember> = ({ children }: TLayoutMember) => {
  return (
    <div className="member-container">
      <ONavPanel />
      <main className="member-container__main">
        {children}
      </main>
    </div>
  )
}


export { MemberLayoutContainer }
