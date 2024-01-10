import React from 'react';
import { ModalPropTypes } from './Modal.types';
import Close from '@/assets/close';

function Modal({ children, type }: ModalPropTypes) {
  return (
    <div className={`modal ${type}`}>
      <div className='modal__content'>
        <div className='modal__content__header'>
          <Close />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
