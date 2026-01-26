import style from './Card.module.scss';
import React from 'react';
import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className={style['forcard']}>
      <div className={style['forcard__title']}>{title}</div>
      <div className={style['forcard__children']}>{children}</div>
    </div>
  );
};
export default Card;
