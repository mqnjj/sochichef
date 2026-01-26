import Image from 'next/image';
import style from './Banner.module.scss';
import { BannerImage } from '../assets/img';
import { Button } from '@/shared/ui';

export const Banner = () => {
  return (
    <section className={style['banner']}>
      <Image src={BannerImage} alt={' '} fill />
      <h1 className={style['banner__title']}>Мастерство вкуса</h1>
      <div className={style['banner__main']}>
        <div className={style['banner__main-description']}>
          Эксклюзивная подготовка поваров и кондитеров в сердце Сочи
        </div>
        <Button isLinkToFooter={true} />
      </div>
    </section>
  );
};
