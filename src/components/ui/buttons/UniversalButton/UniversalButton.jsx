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
    navigate(sessionStorage.getItem('returnPath') || backFallback)

    const layout      = getLayoutElement()
    const savedScroll = sessionStorage.getItem('returnScroll')

    setTimeout(() => layout.scrollTop = parseInt(savedScroll), 100)
    sessionStorage.removeItem('returnScroll')
    sessionStorage.removeItem('returnPath')
  }

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
