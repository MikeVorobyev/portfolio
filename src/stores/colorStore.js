import { create } from 'zustand';

const colorNames = [
  'green', 'blue', 'orange', 'purple', 'red', 'cyan', 'lime', 'brick', 
  'deep-purple', 'teal', 'mint', 'lavender', 'peach', 'sky', 'rose', 
  'aqua', 'lilac', 'sand', 'coral', 'seafoam'
];

const useColorStore = create((set) => ({
  colorNames,
  currentColor: colorNames[Math.floor(Math.random() * colorNames.length)],
  
  startColorRotation: () => {
    setInterval(() => {
      set((state) => {
        const currentIndex = colorNames.indexOf(state.currentColor)
        let nextIndex;
        
        do {
          nextIndex = Math.floor(Math.random() * colorNames.length)
        } while (nextIndex === currentIndex && colorNames.length > 1)
        
        return { currentColor: colorNames[nextIndex] }
      });
    }, 10000)
  }
}));

export default useColorStore