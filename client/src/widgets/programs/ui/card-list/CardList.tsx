'use client';
import React from 'react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import style from './CardList.module.scss';
import { ArrowUpIcon } from '../../assets';
import Image from 'next/image';
import clsx from 'clsx';

interface CardListProps {
  title: string;
  children: ReactNode;
}

const CardList: React.FC<CardListProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function showDropDown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={clsx(style['cardlist'], 'visible-mobile')}>
      <div
        onClick={showDropDown}
        className={clsx(style['cardlist__label'], isOpen && style['cardlist__label--opened'])}
      >
        {title}
        <Image
          className={style['cardlist__label-arrow']}
          src={ArrowUpIcon}
          alt=''
          width='24'
          height='24'
          loading='lazy'
        />
      </div>
      <div className={style['cardlist__wrap']}>{children}</div>
    </div>
  );
};

export default CardList;
