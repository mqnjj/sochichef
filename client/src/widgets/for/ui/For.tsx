import style from './For.module.scss';
import { Button } from '@/shared/ui';
import Card from './card/Card';
import { GraduatesImage, CooksImage } from '../assets/img';
import Image from 'next/image';
import clsx from 'clsx';

export const For = () => {
  return (
    <section id='for' className={clsx(style['for'], 'container')}>
      <h2 className={style['for__title']}>Для кого обучение?</h2>
      <div className={style['for__main']}>
        <div className={style['for__main-graduates']}>
          <div className={style['for__main-graduates__title']}>Выпускники школ</div>
          <div className={style['for__main-graduates__content']}>
            <div className={style['for__main-graduates__content-cards']}>
              <Card title={'Быстрый старт и ранний заработок'}>
                <span>Осваиваете профессию раньше своих сверстников, выбирающих 10 и 11 класс</span>
              </Card>
              <Card title={'Карьерный рост'}>
                <span>От помощника повара до су-шефа, шеф-повара, бренд-шефа</span>
              </Card>
              <Card title={'Разнообразие мест работы'}>
                <span>Рестораны, отели, кейтеринг, круизные лайнеры, частные повара, пищевые производства</span>
              </Card>
              <Card title={'Развитие личностных качеств'}>
                <span>
                  Дисциплина и ответственность; стрессоустойчивость и тайм-менеджмент; командная работа и креативность
                </span>
              </Card>
            </div>
            <Image
              className={style['for__main-graduates__content-image']}
              src={GraduatesImage}
              alt='Повара смотрят в волшебную кастрюлю'
              width={698}
              height={531}
              loading='lazy'
            />
          </div>
        </div>
        <div className={style['for__main-cooks']}>
          <Image
            className={style['for__main-cooks__image']}
            src={CooksImage}
            alt='Повара и кондитеры колледжа'
            width={698}
            height={416}
            loading='lazy'
          />
          <div className={style['for__main-cooks__content']}>
            <div className={style['for__main-cooks__content-title']}>Для тех, кто хочет изменить свою профессию</div>
            <Card title={'Получите новые кулинарные навыки'}>
              <span>Освойте продвинутые кулинарные техники</span>
              <span>Овладейте искусством меню-инжиниринга</span>
              <span>Обновите знания НАССР и СанПин</span>
            </Card>
            <Button isLinkToFooter={true} />
          </div>
        </div>
      </div>
    </section>
  );
};
