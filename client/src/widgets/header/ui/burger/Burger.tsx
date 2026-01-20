'use client';

import Image from 'next/image';
import style from './Burger.module.scss';
import LocateIcon from '../../assets/locate.svg';
import PhoneIcon from '../../assets/phone.svg';
import { useState } from 'react';
import clsx from 'clsx';

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuLinkClick = () => {
    const checkbox = document.getElementById('burger-toggle') as HTMLInputElement;

    if (checkbox) {
      checkbox.checked = false;
    }
  };

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100svh';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
  };

  return (
    <div className={clsx(style['burger'], 'visible-mobile')}>
      <input id='burger-toggle' className={style['burger__button-toggle']} type='checkbox' />
      <label htmlFor='burger-toggle' className={style['burger__button']} onClick={handleOpenMenu}>
        <span className={style['burger__button-line--top']}></span>
        <span className={style['burger__button-line--middle']}></span>
        <span className={style['burger__button-line--bottom']}></span>
      </label>

      <div className={style['burger__menu']}>
        <nav className={style['burger__menu-navigation']}>
          <ul className={style['burger__menu-navigation__list']}>
            <li className={style['burger__menu-navigation__item']}>
              <a
                href='#programs'
                className={style['burger__menu-navigation__link']}
                onClick={() => {
                  handleMenuLinkClick();
                  handleOpenMenu();
                }}
              >
                Образовательные программы
              </a>
            </li>
            <li className={style['burger__menu-navigation__item']}>
              <a
                href='#teachers'
                className={style['burger__menu-navigation__link']}
                onClick={() => {
                  handleMenuLinkClick();
                  handleOpenMenu();
                }}
              >
                Наши преподаватели
              </a>
            </li>
            <li className={style['burger__menu-navigation__item']}>
              <a
                href='#for'
                className={style['burger__menu-navigation__link']}
                onClick={() => {
                  handleMenuLinkClick();
                  handleOpenMenu();
                }}
              >
                Для кого обучение
              </a>
            </li>
            <li className={style['burger__menu-navigation__item']}>
              <a
                href='#graduates'
                className={style['burger__menu-navigation__link']}
                onClick={() => {
                  handleMenuLinkClick();
                  handleOpenMenu();
                }}
              >
                Наши выпускники
              </a>
            </li>
          </ul>
        </nav>

        <div className={style['burger__menu-access']}>
          <a href='tel:+78622544743' className={style['burger__menu-access__number']}>
            <Image
              className={style['burger__menu-access__number-icon']}
              src={PhoneIcon}
              alt=''
              width='40'
              height='40'
              loading='lazy'
            />
            <span className={style['burger__menu-access__number-main']}>+7 (862) 254-47-43</span>
          </a>
          <a
            href='https://yandex.eu/maps/-/CHSW6ZZ8'
            className={style['burger__menu-access__address']}
            target={'_blank'}
          >
            <Image
              className={style['burger__menu-access__address-icon']}
              src={LocateIcon}
              alt=''
              width='40'
              height='40'
              loading='lazy'
            />
            <span className={style['burger__menu-access__address-main']}>г. Сочи, ул. Чайковского, 45</span>
          </a>
        </div>
      </div>
    </div>
  );
};
