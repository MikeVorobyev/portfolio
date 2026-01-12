import { useState } from 'react';

const ContactForm = () => {
  // 1. Состояние формы - хранит значения полей
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // 2. Статус отправки: '' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('');

  // 3. Обработчик изменения полей
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 4. Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault(); // Отменяем стандартную отправку
    setStatus('sending'); // Показываем "Отправка..."

    try {
      // 5. Отправляем данные на сервер
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        // 6. Успешная отправка
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Очищаем форму
      } else {
        // 7. Ошибка от сервера
        setStatus('error');
        console.error('Ошибка сервера:', result.error);
      }
    } catch (error) {
      // 8. Ошибка сети или другая
      setStatus('error');
      console.error('Ошибка сети:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>Напишите мне</h2>
      
      {/* Поле имени */}
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />
      </div>

      {/* Поле email */}
      <div style={{ marginBottom: '15px' }}>
        <input
          type="email"
          name="email"
          placeholder="Ваш email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />
      </div>

      {/* Поле сообщения */}
      <div style={{ marginBottom: '20px' }}>
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />
      </div>

      {/* Кнопка отправки */}
      <button 
        type="submit"
        disabled={status === 'sending'}
        style={{
          background: '#0070f3',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          fontSize: '16px',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          opacity: status === 'sending' ? 0.7 : 1
        }}
      >
        {status === 'sending' ? 'Отправка...' : 'Отправить сообщение'}
      </button>

      {/* Сообщения об статусе */}
      {status === 'success' && (
        <div style={{ 
          marginTop: '15px', 
          padding: '10px', 
          background: '#d4edda', 
          color: '#155724',
          borderRadius: '4px'
        }}>
          ✅ Сообщение отправлено! Я отвечу в ближайшее время.
        </div>
      )}

      {status === 'error' && (
        <div style={{ 
          marginTop: '15px', 
          padding: '10px', 
          background: '#f8d7da', 
          color: '#721c24',
          borderRadius: '4px'
        }}>
          ❌ Ошибка отправки. Пожалуйста, попробуйте еще раз.
        </div>
      )}
    </form>
  );
};

export default ContactForm;