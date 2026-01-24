import style from './CardTag.module.scss';
import React from 'react';

interface CardTagProps {
  content: string;
}

const CardTag: React.FC<CardTagProps> = ({ content }) => {
  return (
    <div className={style['card']}>
      <span className={style['card__content']}>{content}</span>
    </div>
  );
};

export default CardTag;
