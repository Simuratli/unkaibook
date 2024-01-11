import { StateCreator } from 'zustand';

export interface ModalState {
  showModal: boolean;
  setModalOpen: (open: boolean) => void;
}

export const useModalState: StateCreator<ModalState> = (set) => ({
  showModal: false,
  setModalOpen: (open) => set({ showModal: open }),
});
