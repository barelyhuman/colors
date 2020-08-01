import 'animate.css/animate.min.css';
import '../styles/globals.css';
import Head from 'components/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}

export default App;
