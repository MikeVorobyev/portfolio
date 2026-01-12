import { create } from "zustand";

const useWidthWindowStore = create(() => ({
    widthWindow: window.innerWidth,
    isMobile: window.innerWidth < 577
}))

window.addEventListener('resize', () => useWidthWindowStore.setState({ 
    widthWindow: window.innerWidth,
    isMobile: window.innerWidth < 577
}))

export default useWidthWindowStore