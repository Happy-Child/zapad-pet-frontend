import { ResetPasswordContainer } from "../ui/wrappers/reset-password";
import React from "react";
import {NextPage} from "next";

const ResetPasswordPage: React.FC & NextPage = () => {
  return <ResetPasswordContainer />
}

ResetPasswordPage.getInitialProps = async () => {
  return {}
};

export default ResetPasswordPage
