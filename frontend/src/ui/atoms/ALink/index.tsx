import React from 'react';
import "./style.scss"
import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'
import { TALink } from "./types";
import cn from 'classnames';

const ALink: React.FC<TALink> = ({ as, href = as, children, className = '' }: TALink) => {
  const { route }: NextRouter = useRouter();

  const resultClassName = cn('a-link', className);

  const isActive = route.endsWith(as)

  return isActive ? (
    <div className={resultClassName}>{children}</div>
  ) : (
    <Link as={as} href={href}>
      <a className={resultClassName}>
        {children}
      </a>
    </Link>
  );
};

export { ALink };
