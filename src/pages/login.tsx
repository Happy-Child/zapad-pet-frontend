import { LoginContainer } from "@/ui/wrappers/login";
import React from "react";
import {NextPage} from "next";

const LoginPage: React.FC & NextPage = () => {
  return <LoginContainer />
}

LoginPage.getInitialProps = async () => {
  return {}
};

export default LoginPage
