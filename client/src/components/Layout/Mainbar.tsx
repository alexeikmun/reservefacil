import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../UI/Button';
import styles from '../Layout/Mainbar.module.sass';
import { useTranslation } from 'react-i18next';
import esFlag from '../UI/assets/Flags/es.svg'
import usFlag from '../UI/assets/Flags/us.svg'

export function Mainbar() {
  const [t, i18n] = useTranslation('global');
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log('im clicking');
    navigate('./login', { replace: true });
  };
  return (
    <nav className={styles.mainbar}>
      <div className={styles.logo}>ReserveFacil.com</div>
      <ul className={styles['items-list']}>
        <li>
          <a href='/'>{t('main-home.main-home')}</a>
        </li>
        <li>
          <a href='/about'>{t('main-about.main-about')}</a>
        </li>
        <li>
          <a href='/contact'>{t('main-contact.main-contact')}</a>
        </li>
        <li>
        <div className='dropdown'>
          {/* <span>lang</span> */}
          <div className='dropdown-content'>
            <button onClick={() => i18n.changeLanguage('es')}>ES <img  className={styles.img}src={esFlag} alt="es"/></button>
            <button onClick={() => i18n.changeLanguage('en')}>EN <img  className={styles.img}src={usFlag} alt="es"/></button>
          </div>
          </div>
        </li>
      </ul>
      <Button title={t('login.login')} onClick={handleLogin} />
    </nav>
  );
}
