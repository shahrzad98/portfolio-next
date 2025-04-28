'use client';

import { ReactNode } from 'react';
import {
  ColorSchemeScript,
  createTheme,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import '@mantine/core/styles.css';
import 'react-multi-carousel/lib/styles.css';
import '@/styles/globals.css';
import Head from 'next/head';
import Header from '@/components/Header';

const theme = createTheme({});
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" {...mantineHtmlProps}>
      <Head>
        <meta name="language" content={'fa'} />
        <ColorSchemeScript />
      </Head>
      <body className="font-gandom">
        <main>
          <MantineProvider theme={theme}>
            <Header />
            {children}
          </MantineProvider>
        </main>
      </body>
    </html>
  );
}
