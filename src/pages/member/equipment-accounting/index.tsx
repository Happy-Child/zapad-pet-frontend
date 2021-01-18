import { EquipmentAccountingContainer } from "../../../ui/wrappers/member/equipment-accounting";
import React from "react";
import {NextPage} from "next";

const EquipmentAccountingPage: React.FC & NextPage = () => {
  return <EquipmentAccountingContainer />
}

EquipmentAccountingPage.getInitialProps = async () => {
  return {}
};

export default EquipmentAccountingPage
