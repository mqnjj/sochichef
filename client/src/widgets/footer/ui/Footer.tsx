import { Icons } from '@/shared/assets';
import style from './Footer.module.scss';
import Image from 'next/image';
import { Form } from '@/features/send-application';
import clsx from 'clsx';

export const Footer = () => {
  return (
    <footer id='footer' className={style['footer']}>
      <div className={clsx(style['footer__main'], 'container')}>
        <div className={style['footer__main__description']}>
          <div className={style['footer__main__description-title']}>Получите консультацию</div>
          <div className={style['footer__main__description-subtitle']}>Оставьте заявку и мы свяжемся с вами</div>
        </div>
        <Form />
      </div>
      <hr />
      <div className={clsx(style['footer__info'], 'container')}>
        <ul className={style['footer__info-list']}>
          <li className={clsx(style['footer__info-item'], style['footer__info-item__contacts'])}>
            <a
              href='tel:+78622544743'
              title='Позвонить по номеру телефона'
              className={style['footer__info-item__link']}
            >
              <Image
                className={clsx(style['footer__info-item__link-image'], style['sb'])}
                src={Icons.Phone}
                alt=''
                width='40'
                height='40'
                loading='lazy'
              />
              +7 (862) 254-47-43
            </a>
          </li>
          <li className={clsx(style['footer__info-item'], style['footer__info-item__address'])}>
            <a href='https://yandex.eu/maps/-/CHSW6ZZ8' target='_blank' className={style['footer__info-item__link']}>
              <Image
                className={clsx(style['footer__info-item__link-image'], style['sb'])}
                src={Icons.Locate}
                alt=''
                width='40'
                height='40'
                loading='lazy'
              />
              Университетский экономико-технологический колледж <br />
              г. Сочи, ул. Чайковского, 45
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
