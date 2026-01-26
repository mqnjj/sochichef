import style from './GraduatesCard.module.scss';
import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { CardTag } from '@/shared/ui';

interface GraduatesCardProps {
  title: string;
  tag: string;
  place: string;
  year: string;
  description: string;
  source: StaticImageData;
}

export const GraduatesCard: React.FC<GraduatesCardProps> = ({ title, tag, place, year, description, source }) => {
  return (
    <div className={style['graduatescard']}>
      <div className={style['graduatescard__main']}>
        <div className={style['graduatescard__main__info']}>
          <div className={style['graduatescard__main__info-title']}>{title}</div>
          <CardTag content={tag} />
          <div className={style['graduatescard__main__info-place']}>{place}</div>
          <div className={style['graduatescard__main__info-year']}>{year}</div>
        </div>
        <div className={style['graduatescard__main-description']}>{description}</div>
      </div>
      <Image className={style['graduatescard__image']} src={source} alt='' width={290} height={360} loading='lazy' />
    </div>
  );
};
