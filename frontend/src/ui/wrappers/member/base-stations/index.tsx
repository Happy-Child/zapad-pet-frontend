import "./style.scss"
import { MemberLayoutContainer } from "../../../templates/member";
import React, { memo } from "react";

const BaseStationsContainer: React.FC = () => {
  console.log('asd');
  return (
    <MemberLayoutContainer>
      BaseStationsContainer
    </MemberLayoutContainer>
  )
};

const BaseStationsContainerMemo = memo(BaseStationsContainer);

export { BaseStationsContainerMemo as BaseStationsContainer }
