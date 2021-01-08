import { BaseStationsContainer } from "../../../ui/wrappers/member/base-stations";
import React from "react";
import {NextPage} from "next";

const BaseStationsPage: React.FC & NextPage = () => {
  return <BaseStationsContainer />
}

BaseStationsPage.getInitialProps = async () => {
  return {}
};

export default BaseStationsPage
