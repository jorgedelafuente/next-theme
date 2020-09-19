/**@jsx jsx */
import Head from 'next/head';
import { jsx } from 'theme-ui';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Next with Theme UI</h1>
      </main>

      <div sx={{ variant: 'containers.card' }}>
        <p sx={{ fontSize: 30, fontWeight: 'bold' }}>Enjoy</p>
        <p>Next boilerplate with Theme UI, Prettier, Eslint, dotEnv</p>
      </div>

      <footer></footer>
    </div>
  );
}
