import React from 'react';
import style from './about.module.sass';
import { useTranslation } from 'react-i18next';

export default function About() {
  const [t, i18n] = useTranslation('global');

  return (
    <div className={style.container}>
      <form className={style.form}>
        <h1>{t('about.about')}</h1>
      </form>
    </div>
  );
}
