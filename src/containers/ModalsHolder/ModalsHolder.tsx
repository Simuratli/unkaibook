import React from 'react';
import { useStore } from '@/zustand';
import { Modal } from '@/containers';
import { Input, Button } from '@/components';
import { MODAL_TYPE, INPUT_TYPE, BUTTON_TYPE } from '@/types/global.types';

function ModalsHolder() {
  const { showModal } = useStore();

  return (
    <>
      {showModal && (
        <Modal type={MODAL_TYPE.SUBSCRIBE}>
          <h1>Get updated by subscribing to our newsletter</h1>
          <Input type={INPUT_TYPE.BASIC} placeholder='Email' />
          <Button type={BUTTON_TYPE.LIGHT_GREEN} text='Subscribe now' />
        </Modal>
      )}
    </>
  );
}

export default ModalsHolder;
