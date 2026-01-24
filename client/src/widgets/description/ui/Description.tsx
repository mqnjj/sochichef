import Image from 'next/image';
import style from './Description.module.scss';
import DescriptionImage from '../assets/image.webp';
import clsx from 'clsx';

export const Description = () => {
  return (
    <section className={clsx(style['description'], 'container')}>
      <div className={style['description__main']}>
        <div className={style['description__main-title']}>Мы формируем будущих звезд ресторанного бизнеса</div>
        <div className={style['description__main-description']}>
          <span className={style['description__main-description__text']}>
            Современные программы, реальная практика на передовом оборудовании и опыт лучших мастеров своего дела – это
            твой билет в успешную карьеру.
          </span>
          <span className={style['description__main-description__text']}>
            Готов создавать кулинарные шедевры или управлять лучшими ресторанами? Твое будущее начинается здесь, в
            сердце курортной столицы!
          </span>
        </div>
      </div>
      <Image
        className={style['description__image']}
        src={DescriptionImage}
        alt='Шефы смеются.'
        width='697'
        height='382'
        loading='lazy'
      />
    </section>
  );
};
