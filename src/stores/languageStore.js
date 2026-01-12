import { create } from "zustand";

const useLanguageStore = create((set) => ({
    language: 'en',
    toggleLanguage: () => set((state) => ({
        language: state.language === 'en' ? 'ru' : 'en'
    }))
}))

export default useLanguageStore