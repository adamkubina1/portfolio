import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='bg-light-base dark:bg-dark-base text-light-text dark:text-dark-text '>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
