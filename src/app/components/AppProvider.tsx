import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Readex_Pro } from 'next/font/google';
import { PropsWithChildren } from 'react';

const readexPro = Readex_Pro({ subsets: ['latin'] });

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <main className={readexPro.className}>
      <MantineProvider>{children}</MantineProvider>
    </main>
  );
};

export default AppProvider;
