import { useEffect } from 'react'
import { useColorStore, useThemeStore } from './stores'

import styles from './App.module.scss'
import './styles/global.scss'

import Layout from './components/layout/Layout';
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import ProjectDetail from './components/ProjectGallery/ProjectDetail/ProjectDetail';
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'
import useDynamicFavicon from './hooks/useDynamicFavicon'

import { Routes, Route } from 'react-router-dom';

function App() {
  useDynamicFavicon()
  
  const { startColorRotation, currentColor } = useColorStore()
  const { theme } = useThemeStore()
  const colorOpacity = theme === 'dark' ? 15 : 50
  
  const isFirefox = () => /firefox|fxios/i.test(navigator.userAgent)
  

  useEffect(() => { 
    if (!isFirefox()) startColorRotation() 
  }, [startColorRotation])

  useEffect(() => {
    const colorWithAlpha = `color-mix(in srgb, var(--accent-text-${currentColor}) ${colorOpacity}%, transparent)`;
    document.body.style.scrollbarColor = `${colorWithAlpha} transparent`;
  }, [currentColor, colorOpacity])

  return (
    <div className={styles.App}>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/projects/:slug' element={<ProjectDetail />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Layout>
    </div>
  )
}

export default App;


// import { useEffect } from 'react'
// import { useColorStore, useThemeStore } from './stores'

// import styles from './App.module.scss'
// import './styles/global.scss'

// import Layout from './components/layout/Layout';
// import Home from './pages/Home/Home'
// import About from './pages/About/About';
// import Projects from './pages/Projects/Projects';
// import ProjectDetail from './components/ProjectGallery/ProjectDetail/ProjectDetail';
// import Contact from './pages/Contact/Contact'
// import NotFound from './pages/NotFound/NotFound'
// import useDynamicFavicon from './hooks/useDynamicFavicon'

// import { Routes, Route } from 'react-router-dom';

// function App() {
//   useDynamicFavicon() // Хук анимированной favicon
//   const { startColorRotation, currentColor } = useColorStore()
//   const { theme } = useThemeStore()
//   const colorOpacity = theme === 'dark' ? 15 : 50
  
//   const isFirefox = () => /firefox|fxios/i.test(navigator.userAgent)
  
//   useEffect(() => { if (!isFirefox()) startColorRotation() }, [startColorRotation])

//   useEffect(() => {
//     const colorWithAlpha = `color-mix(in srgb, var(--accent-text-${currentColor}) ${colorOpacity}%, transparent)`;
//     document.body.style.scrollbarColor = `${colorWithAlpha} transparent`;
//   }, [currentColor, colorOpacity])

//   return (
//     <div className={styles.App}>
//       <Layout>
//         <Routes>
//           <Route path='/' element={<Home />}/>
//           <Route path='/about' element={<About />}/>
//           <Route path='/projects' element={<Projects />}/>
//           <Route path='/projects/:slug' element={<ProjectDetail />}/>
//           <Route path='/contact' element={<Contact />}/>
//           <Route path="*" element={<NotFound />} /> 
//         </Routes>
//       </Layout>
//     </div>
//   )
// }

// export default App;
