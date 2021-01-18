import { RegistrationContainer } from "../ui/wrappers/registration";
import React from "react";
import {NextPage} from "next";

const RegistrationPage: React.FC & NextPage = () => <RegistrationContainer />

RegistrationPage.getInitialProps = async () => {
  return {}
};

export default RegistrationPage
