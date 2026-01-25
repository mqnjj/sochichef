import React from 'react';
import style from './ImageCard.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import type { StaticImageData } from 'next/image';

interface ImageCardProps {
  src: StaticImageData;
  description: string;
  width: number;
  height: number;
  wrap?: boolean;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  src,
  description,
  width,
  height,
  wrap,
}) => {
  return (
    <div className={style['imagecard']}>
      <Image
        className={style['imagecard__image']}
        src={src}
        alt={description}
        width={width}
        height={height}
        loading='lazy'
      />
      <span
        className={clsx(
          style[`imagecard__description`],
          wrap && style['imagecard__description--wrap'],
        )}
      >
        {description}
      </span>
    </div>
  );
};
