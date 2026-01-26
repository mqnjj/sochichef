import style from './WhyUs.module.scss';
import { Icon1, Icon2, Icon3, Icon4 } from '../assets/icon';
import Image from 'next/image';
import clsx from 'clsx';

export const WhyUs = () => {
  return (
    <section className={clsx(style['whyus'], 'container')}>
      <h2 className={style['whyus__title']}>Почему выбирают нас?</h2>
      <ul className={style['whyus__list']}>
        <li className={style['whyus__list-item']}>
          <Image className={style['whyus__list-image']} src={Icon1} alt='' width={56} height={56} loading='lazy' />
          <div className={style['whyus__list-description']}>
            Практика в топовых ресторанах – учим на реальных кейсах
          </div>
        </li>
        <li className={style['whyus__list-item']}>
          <Image className={style['whyus__list-image']} src={Icon2} alt='' width={56} height={56} loading='lazy' />
          <div className={style['whyus__list-description']}>Преподаватели-практики – опытные шеф-повара</div>
        </li>
        <li className={style['whyus__list-item']}>
          <Image className={style['whyus__list-image']} src={Icon3} alt='' width={56} height={56} loading='lazy' />
          <div className={style['whyus__list-description']}>
            Трудоустройство - гарантируем стажировку и трудоустройство
          </div>
        </li>
        <li className={style['whyus__list-item']}>
          <Image className={style['whyus__list-image']} src={Icon4} alt='' width={56} height={56} loading='lazy' />
          <div className={style['whyus__list-description']}>
            Современное оборудование – работаем как в лучших кухнях мира
          </div>
        </li>
      </ul>
    </section>
  );
};
