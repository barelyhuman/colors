import NextHead from 'next/head';

export default function Head({ children }) {
  return (
    <>
      <NextHead>
        <link rel="icon" href="https://reaper.im/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
        <title>Colors</title>
        {children}
      </NextHead>
    </>
  );
}
