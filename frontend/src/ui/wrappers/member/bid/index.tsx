import "./style.scss"
import { MemberLayoutContainer } from "../../../templates/member";
import React, { memo } from "react";

const BidContainer: React.FC = () => {
  console.log('asd');
  return (
    <MemberLayoutContainer>
      BidContainer
    </MemberLayoutContainer>
  )
};

const BidContainerMemo = memo(BidContainer);

export { BidContainerMemo as BidContainer }
