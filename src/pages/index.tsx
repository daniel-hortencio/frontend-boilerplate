import Head from 'next/head';

import WebsiteTemplate from '../Layouts/public/Website';
import Section from '../components/Section';
import Text from '../components/Text';

export default function Home() {
  return (
    <WebsiteTemplate>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Text element="h1" limit={2}>
          Olha só que texto
          <Text element="span" text="bacana" />
          demais da conta Sôh! Eita carambolas meu irmão doidoo!!
        </Text>
        <span>Qualquer </span>
      </Section>
    </WebsiteTemplate>
  );
}
