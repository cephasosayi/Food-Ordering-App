import '../styles/globals.css'
import Layout from '../components/Layout'
import React, {useState, useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
         <Layout>
             <Component {...pageProps} />
          </Layout>
    );
  }
}

export default MyApp;
