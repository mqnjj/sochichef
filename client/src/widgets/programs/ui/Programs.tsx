import clsx from 'clsx';
import Image from 'next/image';
import style from './Programs.module.scss';
import { Button } from '@/shared/ui';
import CardList from './card-list/CardList';
import CardTag from './card-tag/CardTag';
import Programs1Image from '../assets/1.webp';
import Programs2Image from '../assets/2.webp';
import Programs3Image from '../assets/3.webp';
import Programs4Image from '../assets/4.webp';

export const Programs = () => {
  return (
    <section id='programs' className={clsx(style['programs'], 'container')}>
      <h2 className={style['programs__title']}>Образовательные программы</h2>
      <div className={style['programs__card']}>
        <ul className={style['programs__card-list']}>
          <li className={style['programs__card-item']}>
            <div className={style['programs__card-item__main']}>
              <h3 className={style['programs__card-item__main-title']}>Среднее профессиональное образование</h3>
              <div className={style['programs__card-item__main-tags']}>
                <CardTag content={'Очное обучение'} />
                <CardTag content={'На базе 9 классов'} />
                <CardTag content={'3 года 10 месяцев'} />
              </div>
              <div className={clsx(style['programs__card-item__main-description'], 'hidden-mobile')}>
                <div className={style['programs__card-item__main-description__title']}>Что входит?</div>
                <div className={style['programs__card-item__main-description__main']}>
                  <ul className={style['programs__card-item__main-description__main-list']}>
                    <li className={style['programs__card-item__main-description__main-item']}>
                      Фундаментальные знания и навыки
                    </li>
                    <li className={style['programs__card-item__main-description__main-item']}>
                      Кулинарные техники и технологии
                    </li>
                    <li className={style['programs__card-item__main-description__main-item']}>
                      Специализированные направления
                    </li>
                    <li className={style['programs__card-item__main-description__main-item']}>
                      Управления и организация производства
                    </li>
                  </ul>
                </div>
              </div>
              <CardList title={'Что входит?'}>
                <ul className={style['programs__card-item__main-description__main-list']}>
                  <li className={style['programs__card-item__main-description__main-item']}>
                    Фундаментальные знания и навыки
                  </li>
                  <li className={style['programs__card-item__main-description__main-item']}>
                    Кулинарные техники и технологии
                  </li>
                  <li className={style['programs__card-item__main-description__main-item']}>
                    Специализированные направления
                  </li>
                  <li className={style['programs__card-item__main-description__main-item']}>
                    Управления и организация производства
                  </li>
                </ul>
              </CardList>
            </div>
            <div className={style['programs__card-item__description']}>
              <Image
                className={style['programs__card-item__description-image']}
                src={Programs1Image}
                alt=' '
                width={240}
                height={410}
                loading='lazy'
              />
              <span className={style['programs__card-item__description-text']}>
                Для выпускников школ, которые хотят получить востребованную профессию и сразу начать карьеру
              </span>
            </div>
          </li>
          <li className={style['programs__card-item']}>
            <div className={style['programs__card-item__main']}>
              <h3 className={style['programs__card-item__main-title']}>Профессиональная переподготовка</h3>
              <div className={style['programs__card-item__main-tags']}>
                <CardTag content={'Очная / Вечерняя / Интенсивные курсы'} />
                <CardTag content={'От 3 до 6 месяцев'} />
              </div>
              <div className={clsx(style['programs__card-item__main-description'], 'hidden-mobile')}>
                <div className={style['programs__card-item__main-description__title']}>Что входит?</div>
                <div className={style['programs__card-item__main-description__main']}>
                  <ul className={style['programs__card-item__main-description__main-list']}>
                    <li className={style['programs__card-item__main-description__main-item']}>
                      Быстрый вход в профессию для смены карьеры
                    </li>
                    <li className={style['programs__card-item__main-description__main-item']}>
                      Углублённое изучение кулинарии или кондитерского дела
                    </li>
                    <li className={style['programs__card-item__main-description__main-item']}>
                      Диплом о профессиональной переподготовке
                    </li>
                  </ul>
                </div>
              </div>
              <CardList title={'Что входит?'}>
                <ul className={style['programs__card-item__main-description__main-list']}>
                  <li className={style['programs__card-item__main-description__main-item']}>
                    Быстрый вход в профессию для смены карьеры
                  </li>
                  <li className={style['programs__card-item__main-description__main-item']}>
                    Углублённое изучение кулинарии или кондитерского дела
                  </li>
                  <li className={style['programs__card-item__main-description__main-item']}>
                    Диплом о профессиональной переподготовке
                  </li>
                </ul>
              </CardList>
            </div>
            <div className={style['programs__card-item__description']}>
              <Image
                className={style['programs__card-item__description-image']}
                src={Programs2Image}
                alt=' '
                width={240}
                height={410}
                loading='lazy'
              />
              <span className={style['programs__card-item__description-text']}>
                Для тех, кто хочет сменить профессию и начать работать в ресторанном бизнесе
              </span>
            </div>
          </li>
          <li className={style['programs__card-item']}>
            <div className={style['programs__card-item__main']}>
              <h3 className={style['programs__card-item__main-title']}>Повышение квалификации</h3>
              <div className={style['programs__card-item__main-tags']}>
                <CardTag content={'Краткосрочные курсы (от 2 недель)'} />
              </div>
              <div className={clsx(style['programs__card-item__main-description'], 'hidden-mobile')}>
                <div className={style['programs__card-item__main-description__title']}>Направления</div>
                <div className={style['programs__card-item__main-description__main']}>
                  <ul className={style['programs__card-item__main-description__main-list']}>
                    <li className={style['programs__card-item__main-description__main-item']}>
                      Органическая гастрокультура: для заботящихся о здоровье
                    </li>
                    <li className={style['programs__card-item__main-description__main-item']}>
                      Растительная кухня (Plant-Based): вегетарианские блюда, альтернативные белки (тофу, темпе, сейтан,
                      грибы, бобовые)
                    </li>
                    <li className={style['programs__card-item__main-description__main-item']}>
                      Концепции: &quot;Farm-to-Table&quot; (От фермы до стола), &quot;Zero Waste&quot; (Безотходное
                      производство)
                    </li>
                    <li className={style['programs__card-item__main-description__main-item']}>
                      Научные принципы в создании текстур и форм
                    </li>
                    <li className={style['programs__card-item__main-description__main-item']}>
                      Оптимизация процессов и улучшение качества
                    </li>
                    <li className={style['programs__card-item__main-description__main-item']}>
                      HACCP и пищевая безопасность: актуализация знаний по саннормам и контролю качества
                    </li>
                  </ul>
                </div>
              </div>
              <CardList title={'Направления'}>
                <ul className={style['programs__card-item__main-description__main-list']}>
                  <li className={style['programs__card-item__main-description__main-item']}>
                    Органическая гастрокультура: для заботящихся о здоровье
                  </li>
                  <li className={style['programs__card-item__main-description__main-item']}>
                    Растительная кухня (Plant-Based): вегетарианские блюда, альтернативные белки (тофу, темпе, сейтан,
                    грибы, бобовые)
                  </li>
                  <li className={style['programs__card-item__main-description__main-item']}>
                    Концепции: &quot;Farm-to-Table&quot; (От фермы до стола), &quot;Zero Waste&quot; (Безотходное
                    производство)
                  </li>
                  <li className={style['programs__card-item__main-description__main-item']}>
                    Научные принципы в создании текстур и форм
                  </li>
                  <li className={style['programs__card-item__main-description__main-item']}>
                    Оптимизация процессов и улучшение качества
                  </li>
                  <li className={style['programs__card-item__main-description__main-item']}>
                    HACCP и пищевая безопасность: актуализация знаний по саннормам и контролю качества
                  </li>
                </ul>
              </CardList>
            </div>
            <div className={style['programs__card-item__description']}>
              <Image
                className={style['programs__card-item__description-image']}
                src={Programs3Image}
                alt=' '
                width={240}
                height={410}
                loading='lazy'
              />
              <span className={style['programs__card-item__description-text']}>
                Для действующих поваров, кондитеров, официантов, которые хотят расти в профессии
              </span>
            </div>
          </li>
          <li className={style['programs__card-item']}>
            <div className={style['programs__card-item__main']}>
              <h3 className={style['programs__card-item__main-title']}>
                Программы дополнительного образования для детей{' '}
                <span className={style['programs__card-item__main-title--span']}>и взрослых</span>
              </h3>
              <div className={style['programs__card-item__main-tags']}>
                <CardTag content={'Мастер-классы, кулинарные тимбилдинги'} />
              </div>
              <div className={clsx(style['programs__card-item__main-description'], 'hidden-mobile')}>
                <div className={style['programs__card-item__main-description__title']}>Формат</div>
                <div className={style['programs__card-item__main-description__main']}>
                  <ul className={style['programs__card-item__main-description__main-list']}>
                    <li className={style['programs__card-item__main-description__main-item']}>
                      Разовые мастер-классы (паста, суши, авторские десерты)
                    </li>
                    <li className={style['programs__card-item__main-description__main-item']}>
                      Корпоративные кулинарные баттлы
                    </li>
                    <li className={style['programs__card-item__main-description__main-item']}>
                      Детские кулинарные курсы
                    </li>
                  </ul>
                </div>
              </div>
              <CardList title={'Формат'}>
                <ul className={style['programs__card-item__main-description__main-list']}>
                  <li className={style['programs__card-item__main-description__main-item']}>
                    Разовые мастер-классы (паста, суши, авторские десерты)
                  </li>
                  <li className={style['programs__card-item__main-description__main-item']}>
                    Корпоративные кулинарные баттлы
                  </li>
                  <li className={style['programs__card-item__main-description__main-item']}>
                    Детские кулинарные курсы
                  </li>
                </ul>
              </CardList>
            </div>
            <div className={style['programs__card-item__description']}>
              <Image
                className={style['programs__card-item__description-image']}
                src={Programs4Image}
                alt=' '
                width={240}
                height={410}
                loading='lazy'
              />
              <span className={style['programs__card-item__description-text']}>
                Для любителей кулинарии, компании для нестандартного тимбилдинга, детей от 10 лет
              </span>
            </div>
          </li>
        </ul>
      </div>
      <Button isLinkToFooter={true} />
    </section>
  );
};
