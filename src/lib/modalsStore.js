import { create } from 'zustand'

export const useModals = create((set) => ({
    modals: {},
    modalData: {},
    openModal: (modalId, modalData = {}) =>
        set((state) => {
            return { modals: { ...state.modals, [modalId]: true }, modalData }
        }),
    closeModal: (modalId) =>
        set((state) => {
            return { modals: { ...state.modals, [modalId]: false } }
        }),
    clearModals: () => set({ modals: {} }),
}))
