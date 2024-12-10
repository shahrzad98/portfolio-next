import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window === 'undefined') {
    return null; // Disable SSR globally
  }

  return <Component {...pageProps} />;
}
