import Image from 'next/image';
import React from 'react';
import Icon from './assets/icon.svg';
import style from './Button.module.scss';
import clsx from 'clsx';

export const Button: React.FC<{ isLinkToFooter: boolean }> = ({ isLinkToFooter }) => {
  return !isLinkToFooter ? (
    <button type='submit' className={clsx(style['button'], style['button__callback'])}>
      Оставить заявку
    </button>
  ) : (
    <a href='#footer' className={clsx(style['button'], style['button__link'])}>
      <Image className={style['button__link-icon']} src={Icon} alt='' width='24' height='24' loading='lazy' />
      <span className={style['button__link-description']}>Оставить заявку</span>
    </a>
  );
};
