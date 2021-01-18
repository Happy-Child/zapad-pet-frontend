import React, {memo} from "react";
import "./style.scss"
import { TLayoutMember } from "./types";
import { ONavPanel } from "@/ui/organisms/ONavPanel";

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

const MemberLayoutContainerMemo = memo<TLayoutMember>(MemberLayoutContainer);

export { MemberLayoutContainerMemo as MemberLayoutContainer }
