import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@testing-library/jest-dom';

const MuiRenderer = ({ children }) => {
  return (
    <ThemeProvider>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, {
    wrapper: MuiRenderer,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };

// import PropTypes from 'prop-types';
// import Head from 'next/head';

// import { CacheProvider } from '@emotion/react';
// import theme from '../src/theme';
// import createEmotionCache from '../src/createEmotionCache';
// import { UserProvider } from '@auth0/nextjs-auth0';

// // Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache();
// export default function MyApp(props) {
//   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
//   const { user } = pageProps;

//   return (
//     <UserProvider user={user}>
//       <CacheProvider value={emotionCache}>
//         <Head>
//           <meta name="viewport" content="initial-scale=1, width=device-width" />
//         </Head>
//         <ThemeProvider theme={theme}>
//           {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//           <CssBaseline />
//           <Component {...pageProps} />
//         </ThemeProvider>
//       </CacheProvider>
//     </UserProvider>
//   );
// }
// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   emotionCache: PropTypes.object,
//   pageProps: PropTypes.object.isRequired,
// };
