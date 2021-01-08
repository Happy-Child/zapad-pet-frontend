import "./style.scss"
import { MemberLayoutContainer } from "../../../templates/member";
import React, { memo } from "react";

const EquipmentAccountingContainer: React.FC = () => {
  return (
    <MemberLayoutContainer>
      EquipmentAccountingContainer
    </MemberLayoutContainer>
  )
};

const EquipmentAccountingContainerMemo = memo(EquipmentAccountingContainer);

export { EquipmentAccountingContainerMemo as EquipmentAccountingContainer }
