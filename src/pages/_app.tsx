import type { AppProps } from "next/app";

import "../index.css";

const MyApp = function ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};

export default MyApp;
