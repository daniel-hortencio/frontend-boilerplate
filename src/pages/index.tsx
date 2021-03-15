import Head from 'next/head';

import WebsiteTemplate from '../templates/public/Website';

import PageHome from '../containers/PageHome';

const Home = () => {
  return (
    <WebsiteTemplate>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHome />
    </WebsiteTemplate>
  );
};

export default Home;
