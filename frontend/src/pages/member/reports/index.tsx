import { ReportsContainer } from "../../../ui/wrappers/member/reports";
import React from "react";
import {NextPage} from "next";

const ReportsPage: React.FC & NextPage = () => {
  return <ReportsContainer />
}

ReportsPage.getInitialProps = async () => {
  return {}
};

export default ReportsPage
