import "./style.scss"
import { MemberLayoutContainer } from "../../../templates/member";
import React, { memo } from "react";

const StaffContainer: React.FC = () => {
  return (
    <MemberLayoutContainer>
      StaffContainer
    </MemberLayoutContainer>
  )
};

const StaffContainerMemo = memo(StaffContainer);

export { StaffContainerMemo as StaffContainer }
