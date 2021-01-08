import { BidContainer } from "../../../ui/wrappers/member/bid";
import React from "react";
import {NextPage} from "next";

const BidPage: React.FC & NextPage = () => {
  return <BidContainer />
}

BidPage.getInitialProps = async () => {
  return {}
};

export default BidPage
