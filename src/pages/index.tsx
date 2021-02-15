import Head from 'next/head';

import WebsiteTemplate from '../layouts/public/Website';
import SectionExample from '../components/Home/SectionExample';

const Home = () => {
  return (
    <WebsiteTemplate>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionExample />
    </WebsiteTemplate>
  );
};

export default Home;
