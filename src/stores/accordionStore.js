import { create } from 'zustand';

const useAccordionStore = create((set, get) => ({
  keys: {},
  
  initializeStore: (projectsArray) => {
    const initialKeys = Object.fromEntries(
      projectsArray.map(project => [`${project.id}_${project.slug}`, false])
    );
    set({ keys: initialKeys });
  },
  
  toggleOpenProcess: (projectKey) => set((state) => {
    return {
      keys: {
        ...state.keys,
        [projectKey]: !state.keys[projectKey]
      }
    };
  })
}));

// ---------------------------------------------------------------------------------------------------------------------
// КОСТЫЛЬ: "Прогрев стора"
// Для устранения непонятного бага в Яндекс браузере с зависанием аккордиона.
const isYandexBrowser = (ua = navigator.userAgent.toLowerCase()) => ua.includes('yabrowser') || ua.includes('yandex');

if (isYandexBrowser()) {
  try {
    useAccordionStore.getState()
    console.debug('accordionStore warmed up for [Yandex.Browser]')
  } catch (e) {}
}
// ---------------------------------------------------------------------------------------------------------------------

export default useAccordionStore