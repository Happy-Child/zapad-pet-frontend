import "./style.scss"
import { MemberLayoutContainer } from "../../../templates/member";
import React, { memo } from "react";

const StatisticsContainer: React.FC = () => {
  return (
    <MemberLayoutContainer>
      StatisticsContainer
    </MemberLayoutContainer>
  )
};

const StatisticsContainerMemo = memo(StatisticsContainer);

export { StatisticsContainerMemo as StatisticsContainer }
