import type { AppProps } from 'next/app';
import '@/styles/global.scss';
import { Sidebar, Navbar, Button, Input } from '@/components';
import { Modal } from '@/containers';
import React from 'react';
import { MODAL_TYPE, BUTTON_TYPE, INPUT_TYPE } from '@/types/global.types';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='home'>
      <Modal type={MODAL_TYPE.SUBSCRIBE}>
        <h1>Get updated by subscribing to our newsletter</h1>
        <Input type={INPUT_TYPE.BASIC} placeholder='Email' />
        <Button type={BUTTON_TYPE.LIGHT_GREEN} text='Subscribe now' />
      </Modal>
      <Sidebar />
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
      {/* <Chat /> */}
    </div>
  );
}
