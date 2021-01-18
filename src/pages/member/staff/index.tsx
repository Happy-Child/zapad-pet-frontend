import { StaffContainer } from "../../../ui/wrappers/member/staff";
import React from "react";
import {NextPage} from "next";

const StaffPage: React.FC & NextPage = () => {
  return <StaffContainer />
}

StaffPage.getInitialProps = async () => {
  return {}
};

export default StaffPage
