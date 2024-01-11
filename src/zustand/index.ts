import { create } from 'zustand';
import { ModalState, useModalState } from './modal';

export const useStore = create<ModalState>()((...a) => ({
  ...useModalState(...a),
}));
