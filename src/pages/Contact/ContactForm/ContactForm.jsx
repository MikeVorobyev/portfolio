import { useState, useEffect } from 'react';
import ContentBox from '../../../components/ui/ContentBox/ContentBox';
import UniversalTitle from '../../../components/ui/UniversalTitle/UniversalTitle';
import UniversalText from '../../../components/ui/UniversalText/UniversalText';
import styles from './contactForm.module.scss'
import { useLanguageStore, useColorStore, useWidthWindowStore } from '../../../stores';

const ContactForm = () => {
  const { language } = useLanguageStore()
  const { currentColor } = useColorStore()
  const { widthWindow } = useWidthWindowStore()

  // 1. Состояние формы
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // 2. Статус отправки
  const [status, setStatus] = useState('');
  
  // 3. Состояние для уведомления
  const [notification, setNotification] = useState(null);

  // 4. Обработчик изменения полей
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 5. Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        setNotification({
          type: 'success',
          message: language === 'en' 
            ? `${widthWindow >= 480 ? '✅' : ''} The message has been sent! I will respond soon.` 
            : `${widthWindow >= 480 ? '✅' : ''} Сообщение отправлено! Я отвечу в ближайшее время.`
        });
      } else {
        setStatus('error');
        
        setNotification({
          type: 'error', 
          message: language === 'en'
            ? `${widthWindow >= 480 ? '❌' : ''} Sending error. Please try again.`
            : `${widthWindow >= 480 ? '❌' : ''} Ошибка отправки. Пожалуйста, попробуйте еще раз.`
        });
      }
    } catch (error) {
      setStatus('error');
      setNotification({
        type: 'error',
        message: language === 'en'
          ? `${widthWindow >= 480 ? '❌' : ''} Network error. Please check your connection.`
          : `${widthWindow >= 480 ? '❌' : ''} Ошибка сети. Проверьте подключение.`
      });
    }
  };

  // 6. Автоскрытие уведомления
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <>
      {/* Уведомление со стеклянным фоном */}
      {notification && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          <span className={styles.notification__text}>{notification.message}</span>
          <button 
            className={styles.notification__close}
            onClick={() => setNotification(null)}
            aria-label={language === 'en' ? 'Close' : 'Закрыть'}
          >
            ✕
          </button>
        </div>
      )}

      {/* Форма (полностью твой оригинальный код) */}
      <ContentBox 
        customClass={ styles.contactForm }
        settings={{
          flexDirection: '',
        }} 
      >
        <ContentBox 
          customClass={ styles.left_box }
          settings={{
            background: 'none',
            flexDirection: 'column',
            minHeight: '0px',
            justifyContent: 'start',
            boxShadow: 'none'
          }} 
        >
          <div className={styles.text_wrapper}>
            <UniversalTitle
              customClass  = { `${styles.left_box_title} ${language === 'en' ? '' : styles.left_box_title_ru}` } 
              level        = { 'h3' }
              fontFamily   = { language === 'en' ? 'var(--font-brand-en)' : 'var(--font-brand-ru)' }
              fontWeight   = { language === 'en' ? 700 : 400 }
              lineHeight   = { '' }
              align        = { widthWindow < 360 ? 'center' :  'left' }
              titleText_en = {[ { title: 'Get in Touch', color: 'rgba(22, 27, 34, 1)' }]}
              titleText_ru = {
                [ 
                    { title: 'Свяжитесь', color: 'rgba(22, 27, 34, 1)', break: widthWindow <= 768 && widthWindow > 360 ? false : true },
                    { title: 'со мной',   color: 'rgba(22, 27, 34, 1)' }
                ]
              }
            />

            <UniversalText
              customClass  = { styles.left_box_text } 
              fontFamily   = {'var(--font-subtitle-en)'}
              color        = { ['rgba(22, 27, 34, 1)'] }  
              contentText  = {{
                  en: "If you're interested in my work or have feedback about the site, feel free to drop me an email. I'm open to exchanging ideas.", 
                  ru: "Если вас заинтересовали мои работы или есть отзывы о сайте, напишите мне на почту, я открыт для обмена идеями." 
              }}
            />
          </div>
        </ContentBox>

        <ContentBox 
          customClass={styles.right_box} 
          settings={{
            background: 'none', 
            justifyContent: 'end',
            boxShadow: 'none'
          }} 
        >
          <form 
            className={styles.form}
            onSubmit={handleSubmit} 
          >
            
            <div>
                <input 
                  className={styles.form__name}
                  type="text"
                  name="name"
                  placeholder={language === 'en'? 'Your name' : 'Ваше имя'}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
            </div>

            <div>
                <input
                  className={styles.form__email}
                  type="email"
                  name="email"
                  placeholder={language === 'en'? 'Your email' : 'Ваш email'}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
            </div>

            <div>
                <textarea
                  className={styles.form__message}
                  name="message"
                  placeholder={language === 'en'? 'Your message' : 'Ваше сообщение'}
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                />
            </div>

            <button 
              className={styles.form__submit_btn}
              type="submit"
              disabled={status === 'sending'}
              style={{
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                opacity: status === 'sending' ? 0.7 : 1,
                color: `var(--accent-text-${currentColor})`,
              }}
            >
                {
                  status === 'sending' 
                                  ? language === 'en' ? 'Sending...' :'Отправка...' 
                                  : language === 'en' ? 'Send'       : 'Отправить сообщение'
                }
            </button>
          </form>
        </ContentBox>
      </ContentBox>
    </>
  );
};

export default ContactForm;