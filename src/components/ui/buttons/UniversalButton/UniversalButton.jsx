import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './universalButton.module.scss';
import { useColorStore } from '../../../../stores';

const UniversalButton = ({
  to,
  href,
  download,
  children,
  settings     = {},
  customClass  = '',
  backFallback = '/',
  back         = false, // Флаг для рендеринга кнопки 'Back'
  saveScroll   = false  // Флаг для включения сохранения позиции скролла при клике по UniversalButton
}) => {
  const navigate         = useNavigate();
  const location         = useLocation();
  const { currentColor } = useColorStore();
  const getLayoutElement = () => document.querySelector('[class*="layout"]') // Получаем компонент c классом layout

  const baseSettings = {
    '--gradient-primary': `var(--gradient-${currentColor}-primary)`,
    '--gradient-secondary': `var(--gradient-${currentColor}-secondary)`,
    boxShadow: 'var(--text-shadow-light)',
    background: '',
  }

  const finalSettings = { ...baseSettings, ...settings }
  
  // Обработчик клика по кнопке навигации
  const handleClick = () => {
    sessionStorage.removeItem('returnScroll')
    sessionStorage.removeItem('returnPath')
    if (saveScroll) {
      const layout = getLayoutElement()
      sessionStorage.setItem('returnScroll', String(layout.scrollTop))
      sessionStorage.setItem('returnPath', location.pathname)
      layout.scrollTop = 0
    }
  }

  // Обработчик кнопки "Назад"
  const handleBack = () => {
  const returnPath = sessionStorage.getItem('returnPath') || backFallback;
  const savedScroll = sessionStorage.getItem('returnScroll');
  
  navigate(returnPath);
  
  if (savedScroll) {
    const scrollToValue = parseInt(savedScroll);
    
    const attemptScroll = (attempts = 0) => {
      const layout = getLayoutElement();
      if (layout && layout.scrollHeight > scrollToValue) {
        layout.scrollTop = scrollToValue;
        sessionStorage.removeItem('returnScroll');
        sessionStorage.removeItem('returnPath');
      } else if (attempts < 10) {
        setTimeout(() => attemptScroll(attempts + 1), 50);
      }
    };
    
    setTimeout(() => attemptScroll(), 100);
  }
};

  switch (true) {
    case back === true:
      return (
        <button 
          type="button" 
          className={`${styles.universalButton} ${styles.resetButton} ${styles.gradient_transition} ${customClass}`}
          style={finalSettings} 
          onClick={handleBack}
        >
          {children}
        </button>
      )

    case to !== undefined:
      return (
        <Link 
          to={to} 
          className={`${styles.universalButton} ${styles.resetLink} ${styles.gradient_transition} ${customClass}`}
          style={finalSettings}
          onClick={handleClick}
        >
          {children}
        </Link>
      )

    case href !== undefined && download !== undefined:
      return (
        <a 
          href={href} 
          download={download} 
          className={`${styles.universalButton} ${styles.resetLink} ${styles.gradient_transition} ${customClass}`}
          style={finalSettings}
        >
          {children}
        </a>
      )

    case href !== undefined:
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.universalButton} ${styles.resetLink} ${styles.gradient_transition} ${customClass}`}
          style={finalSettings}
        >
          {children}
        </a>
      )

    default:
      return (
        <button 
          type="button" 
          className={`${styles.universalButton} ${styles.resetButton} ${styles.gradient_transition} ${customClass}`}
          style={finalSettings}
        >
          {children}
        </button>
      )
  }
}

export default UniversalButton;








// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import styles from './universalButton.module.scss';
// import { useColorStore } from '../../../../stores';

// const UniversalButton = ({
//   to,
//   href,
//   download,
//   children,
//   settings     = {},
//   customClass  = '',
//   backFallback = '/',
//   back         = false,
//   saveScroll   = false
// }) => {
//   const navigate         = useNavigate();
//   const location         = useLocation();
//   const { currentColor } = useColorStore();
  
//   const getLayoutElement = () => document.querySelector('[class*="layout"]');

//   const baseSettings = {
//     '--gradient-primary': `var(--gradient-${currentColor}-primary)`,
//     '--gradient-secondary': `var(--gradient-${currentColor}-secondary)`,
//     boxShadow: 'var(--text-shadow-light)',
//     background: '',
//   }

//   const finalSettings = { ...baseSettings, ...settings }
  
//   const handleClick = () => {
//     sessionStorage.removeItem('returnScroll');
//     sessionStorage.removeItem('returnPath');
    
//     if (saveScroll) {
//       const layout = getLayoutElement();
//       if (layout) {
//         sessionStorage.setItem('returnScroll', String(layout.scrollTop));
//         sessionStorage.setItem('returnPath', location.pathname);
//         layout.scrollTop = 0;
//       }
//     }
//   }

//   const handleBack = () => {
//     const savedPath = sessionStorage.getItem('returnPath') || backFallback;
//     const savedScroll = sessionStorage.getItem('returnScroll');
    
//     navigate(savedPath);
    
//     // Функция восстановления скролла
//     const restoreScroll = (attempt = 1) => {
//       const layout = getLayoutElement();
      
//       if (!layout || !savedScroll) return;
      
//       const scrollValue = parseInt(savedScroll);
//       const currentHeight = layout.scrollHeight;
//       const requiredHeight = scrollValue + layout.clientHeight + 100;
      
//       // Если высота контента еще недостаточна, ждем
//       if (currentHeight < requiredHeight && attempt < 10) {
//         console.log(`⏳ Ожидание загрузки контента... попытка ${attempt}`);
//         setTimeout(() => restoreScroll(attempt + 1), 100);
//         return;
//       }
      
//       // Восстанавливаем скролл
//       const maxScroll = Math.max(0, currentHeight - layout.clientHeight);
//       const actualScroll = Math.min(scrollValue, maxScroll);
//       layout.scrollTop = actualScroll;
      
//       // Финальная проверка
//       setTimeout(() => {
//         if (Math.abs(layout.scrollTop - actualScroll) > 50) {
//           layout.scrollTop = actualScroll;
//         }
//       }, 50);
//     };
    
//     // Начинаем восстановление с задержкой
//     setTimeout(() => restoreScroll(1), 200);
    
//     sessionStorage.removeItem('returnScroll');
//     sessionStorage.removeItem('returnPath');
//   }

//   switch (true) {
//     case back === true:
//       return (
//         <button 
//           type="button" 
//           className={`${styles.universalButton} ${styles.resetButton} ${styles.gradient_transition} ${customClass}`}
//           style={finalSettings} 
//           onClick={handleBack}
//         >
//           {children}
//         </button>
//       )

//     case to !== undefined:
//       return (
//         <Link 
//           to={to} 
//           className={`${styles.universalButton} ${styles.resetLink} ${styles.gradient_transition} ${customClass}`}
//           style={finalSettings}
//           onClick={handleClick}
//         >
//           {children}
//         </Link>
//       )

//     case href !== undefined && download !== undefined:
//       return (
//         <a 
//           href={href} 
//           download={download} 
//           className={`${styles.universalButton} ${styles.resetLink} ${styles.gradient_transition} ${customClass}`}
//           style={finalSettings}
//         >
//           {children}
//         </a>
//       )

//     case href !== undefined:
//       return (
//         <a 
//           href={href} 
//           target="_blank" 
//           rel="noopener noreferrer" 
//           className={`${styles.universalButton} ${styles.resetLink} ${styles.gradient_transition} ${customClass}`}
//           style={finalSettings}
//         >
//           {children}
//         </a>
//       )

//     default:
//       return (
//         <button 
//           type="button" 
//           className={`${styles.universalButton} ${styles.resetButton} ${styles.gradient_transition} ${customClass}`}
//           style={finalSettings}
//         >
//           {children}
//         </button>
//       )
//   }
// }

// export default UniversalButton;
