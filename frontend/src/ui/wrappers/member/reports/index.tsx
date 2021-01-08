import "./style.scss"
import { MemberLayoutContainer } from "../../../templates/member";
import React, { memo } from "react";

const ReportsContainer: React.FC = () => {
  return (
    <MemberLayoutContainer>
      ReportsContainer
    </MemberLayoutContainer>
  )
};

const ReportsContainerMemo = memo(ReportsContainer);

export { ReportsContainerMemo as ReportsContainer }
