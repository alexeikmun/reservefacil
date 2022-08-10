import React from 'react';

import style from './contact.module.sass';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const [t, i18n] = useTranslation('global');
  return (
    <div className={style.container}>
      <form className={style.form}>
        <h1>{t('contact.contact')}</h1>
        <input type='text' />
        <input type='text' />
        <input type='mail' />
        <input type='number' />
        <button className={style.button}>{t('send-button.send-button')}</button>
      </form>
    </div>
  );
}
