import Head from 'next/head';

export const Seo = ({ title }: { title?: string }) => {
  return (
    <Head>
      <title key='title'>{`${
        title ? title + ' | ' : ''
      }Adam Kubina - Developer`}</title>
      <meta
        name='description'
        content={'Personal portfolio page for Adam Kubina.'}
      />
      <meta
        name='keywords'
        content='Adam Kubina,developer,programmer,web developer,frontend,backend,resume,cv'
      />

      <meta name='robots' content='index,follow' />
      <link rel='shortcut icon' href='/favicon/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />
    </Head>
  );
};
