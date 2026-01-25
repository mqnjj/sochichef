import clsx from 'clsx';
import style from './Teachers.module.scss';
import { Image1, Image2, Image3, Image4, Image5 } from '../assets';
import { ImageCard } from '@/shared/ui';
import type { StaticImageData } from 'next/image';

interface iCardInfo {
  src: StaticImageData;
  description: string;
}

export const Teachers = () => {
  const cardInfo: iCardInfo[] = [
    {
      src: Image1,
      description: 'Светлана Нитченко',
    },
    {
      src: Image2,
      description: 'Надежда Гончарова',
    },
    {
      src: Image3,
      description: 'Ксения Воздвиженская',
    },
    {
      src: Image4,
      description: 'Артем Чикишев',
    },
    {
      src: Image5,
      description: 'Ирина Колесникова',
    },
  ];

  return (
    <section id='teachers' className={clsx(style['teachers'], 'container')}>
      <h2 className={style['teachers__title']}>Наши преподаватели</h2>
      <div className={style['teachers__images']}>
        <ul className={style['teachers__images-list']}>
          {cardInfo.map((item: iCardInfo, index: number) => {
            return (
              <li className='teachers__images-item' key={index}>
                <ImageCard
                  src={item.src}
                  description={item.description}
                  width={264}
                  height={461}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
