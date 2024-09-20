import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // For client-side errors
    if (typeof window !== 'undefined') {
      window.onerror = function (message, source, lineno, colno, error) {
        fetch('/api/logError', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message,
            source,
            lineno,
            colno,
            stack: error ? error.stack : null,
          }),
        });
      };
    }
  }, []); 

  return (
    <>
      <Head>
        <title>Baby Hippo Central</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
