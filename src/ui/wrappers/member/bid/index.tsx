import "./style.scss"
import { MemberLayoutContainer } from "../../../templates/member";
import React, { memo } from "react";

const BidContainer: React.FC = () => {
  return (
    <MemberLayoutContainer>
      BidContainer
    </MemberLayoutContainer>
  )
};

const BidContainerMemo = memo(BidContainer);

export { BidContainerMemo as BidContainer }
