import React, { useState } from 'react';
import styles from './forget.module.sass'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai';


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [open, setOpen] = useState<any>(true);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ваш код для отправки запроса на сброс пароля
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className={styles.wrap}>
      {open && 
      <div className={styles.modal}>
      
      <div className={styles.card}>
        <div className={styles.exitt}>
                <AiOutlineClose
                  onClick={() => setOpen(false)}
                  className={styles.exit}
                />
              </div>
        {isSubmitted ? (
          <p>Запрос на сброс пароля отправлен на вашу электронную почту.</p>
         ) : (
       <div className={styles.dd}>
          <form className={styles.from} onSubmit={handleSubmit}>
            <div>
              <h2 className={styles.tt}>Введите свой Email адресс</h2>
              <input
              className={styles.input}
                type="email"
                value={email}
                required
                onChange={handleChange}
                placeholder="Email Adress"
              />
            </div>
            <button className={styles.gg} type="submit">Отправить</button>
            </form>
       </div>
        )}
        </div>
       </div>
         }
      <Link  className={styles.forget} href={''} onClick={() => setOpen(true)}>Забыли пороль</Link>
    </div>
  );
}

export default ForgotPassword;
