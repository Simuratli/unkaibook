import type { AppProps } from 'next/app';
import '@/styles/global.scss';
import { Sidebar, Chat, Navbar } from '@/components';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='home'>
      <Sidebar />
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
      <Chat />
    </div>
  );
}
