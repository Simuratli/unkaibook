import type { AppProps } from 'next/app';
import '@/styles/global.scss';
import { Sidebar, Navbar } from '@/components';
import { ModalsHolder } from '@/containers';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='home'>
      <Sidebar />
      <ModalsHolder />
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
      {/* <Chat /> */}
    </div>
  );
}
