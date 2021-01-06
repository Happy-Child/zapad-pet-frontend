import { NewPasswordContainer } from "../ui/wrappers/new-password";
import React from "react";
import {NextPage} from "next";

const NewPasswordPage: React.FC & NextPage = () => {
  return <NewPasswordContainer />
}

NewPasswordPage.getInitialProps = async () => {
  return {}
};

export default NewPasswordPage
