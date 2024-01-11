import React from 'react';
import { ModalPropTypes } from './Modal.types';
import Close from '@/assets/close';
import { useStore } from '@/zustand';

function Modal({ children, type }: ModalPropTypes) {
  const { setModalOpen } = useStore();

  return (
    <div className={`modal ${type}`}>
      <div className='modal__content'>
        <div className='modal__content__header'>
          <span onClick={() => setModalOpen(false)}>
            <Close />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
