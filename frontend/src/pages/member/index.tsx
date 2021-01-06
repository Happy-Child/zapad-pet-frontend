import { HomeContainer } from "../../ui/wrappers/home";
import React from "react";
import {NextPage} from "next";

const IndexPage: React.FC & NextPage = () => {
  return <HomeContainer />
}

IndexPage.getInitialProps = async () => {
  return {}
};

export default IndexPage
