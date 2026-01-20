import Image from 'next/image';
import style from './Header.module.scss';
import clsx from 'clsx';
import LogoImage from '../assets/Logo.webp';
import { Burger } from './burger/Burger';

export const Header = () => {
  return (
    <header className={style['header']} id='header'>
      <div className={clsx(style['header__information'], 'container')}>
        <a href='#header' className={style['header__information-logo']}>
          <Image
            className={style['header__information-logo__image']}
            src={LogoImage}
            alt=''
            width={100}
            height={100}
            loading='lazy'
          />
          <div className={style['header__information-logo__description']}>
            Университетский <br /> экономико-технологический <br /> колледж
          </div>
        </a>
        <div className={clsx(style['header__information-access'], 'hidden-mobile')}>
          <a
            href='https://yandex.eu/maps/-/CHSW6ZZ8'
            target='_blank'
            className={style['header__information-access__address']}
          >
            г. Сочи, ул. Чайковского, 45
          </a>
          <div className={style['header__information-access__contacts']}>
            <a
              href='tel:+78622544743'
              title='Позвонить по номеру телефона'
              className={style['header__information-access__contacts-link']}
            >
              +7 (862) 254-47-43
            </a>
          </div>
        </div>
        <Burger />
      </div>

      <hr />

      <div className={clsx(style['header__navigation'], 'container')}>
        <nav className={clsx(style['header__navigation-menu'], 'hidden-mobile')}>
          <ul className={style['header__navigation-menu__list']}>
            <li className={style['header__navigation-menu__item']}>
              <a href='#programs' className={style['header__navigation-menu__link']}>
                Образовательные программы
              </a>
            </li>
            <li className={style['header__navigation-menu__item']}>
              <a href='#teachers' className={style['header__navigation-menu__link']}>
                Наши преподаватели
              </a>
            </li>
            <li className={style['header__navigation-menu__item']}>
              <a href='#for' className={style['header__navigation-menu__link']}>
                Для кого обучение
              </a>
            </li>
            <li className={style['header__navigation-menu__item']}>
              <a href='#graduates' className={style['header__navigation-menu__link']}>
                Наши выпускники
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
