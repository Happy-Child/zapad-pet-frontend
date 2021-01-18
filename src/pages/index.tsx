import { NextPage, NextPageContext } from 'next';

const IndexPage: NextPage = () => {
  return <div />
}

IndexPage.getInitialProps = async ({ res }: NextPageContext) => {
  if (res) {
    res.writeHead(301, { Location: '/login' });
    res.end();
  }

  return {};
};

export default IndexPage
