import { ReactText } from "react";

type TALink = {
  as: string,
  href?: string,
  children: JSX.Element | ReactText,
  className?: string,
};

export type { TALink }
