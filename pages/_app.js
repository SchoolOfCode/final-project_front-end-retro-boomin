import Layout from '../components/Layout';
import '../styles/globals.css';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ContextProvider } from '../context/Context';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
