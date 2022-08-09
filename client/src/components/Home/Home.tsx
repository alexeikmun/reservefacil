import React from 'react';
import style from './home.module.sass';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [t, i18n] = useTranslation('global');

  return (
    <div className={style.container}>
      <form className={style.form}>
        <h1>{t('header.home')}</h1>
      </form>
    </div>
  );
}
