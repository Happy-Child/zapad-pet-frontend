import { HomeContainer } from "../../ui/wrappers/member/home";
import React from "react";
import {NextPage} from "next";

const HomePage: React.FC & NextPage = () => {
  return <HomeContainer />
}

HomePage.getInitialProps = async () => {
  return {}
};

export default HomePage
