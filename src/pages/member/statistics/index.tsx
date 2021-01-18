import { StatisticsContainer } from "../../../ui/wrappers/member/statistics";
import React from "react";
import {NextPage} from "next";

const StatisticsPage: React.FC & NextPage = () => {
  return <StatisticsContainer />
}

StatisticsPage.getInitialProps = async () => {
  return {}
};

export default StatisticsPage
