import "./style.scss"
import { MemberLayoutContainer } from "../../../templates/member";
import React, { memo } from "react";

const HomeContainer: React.FC = () => {
  return (
    <MemberLayoutContainer>
      HomeContainer
    </MemberLayoutContainer>
  )
};

const HomeContainerMemo = memo(HomeContainer);

export { HomeContainerMemo as HomeContainer }
