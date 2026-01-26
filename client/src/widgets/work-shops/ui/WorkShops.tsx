import style from './WorkShops.module.scss';
import { Image1, Image2, Image3, Image4 } from '../assets/img';
import { ImageCard } from '@/shared/ui';
import clsx from 'clsx';

export const WorkShops = () => {
  return (
    <section className={clsx(style['workshops'], 'container')}>
      <h2 className={style['workshops__title']}>Учебные аудитории и мастерские</h2>
      <ul className={style['workshops__images']}>
        <ImageCard src={Image1} description={'Учебный кондитерский цех'} width={355} height={435} wrap={true} />
        <ImageCard
          src={Image2}
          description={'Учебная мастерская поварского дела'}
          width={355}
          height={435}
          wrap={true}
        />
        <ImageCard src={Image3} description={'Кухня учебного ресторана'} width={355} height={435} wrap={true} />
        <ImageCard src={Image4} description={'Кулинарная студия'} width={355} height={435} wrap={true} />
      </ul>
    </section>
  );
};
