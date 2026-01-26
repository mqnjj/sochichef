import style from './Graduates.module.scss';
import { Image1, Image2, Image3, Image4, Image5, Image6 } from '../assets/img';
import { GraduatesCard } from './graduates-card/GraduatesCard';
import clsx from 'clsx';

export const Graduates = () => {
  return (
    <section id={'graduates'} className={clsx(style['graduates'], 'container')}>
      <h2 className={style['graduates__title']}>Наши студенты и выпускники</h2>
      <div className={style['graduates__cards']}>
        <ul className={style['graduates__cards-list']}>
          <li className={style['graduates__cards-item']}>
            <GraduatesCard
              title={'Никита Чернюк'}
              tag={'Су-шеф'}
              place={'Ресторан “Горыныч” (проект Альянса White Rabbit Family)'}
              year={'Выпускник 2020 года'}
              description={
                'Преподаватели колледжа – настоящие мастера своего дела. Они вдохновляли, мотивировали и прививали любовь к профессии, ответственность, умение работать в команде и быстро принимать решения'
              }
              source={Image1}
            />
          </li>
          <li className={style['graduates__cards-item']}>
            <GraduatesCard
              title={'Анастасия Петрова'}
              tag={'Су-шеф'}
              place={'Ресторан “Клево”'}
              year={'Выпускник 2020 года'}
              description={
                'Колледж дал мне понимание кулинарии. Мы оттачивали навыки, осваивали классические и современные техники приготовления, учились работать с различными продуктами'
              }
              source={Image2}
            />
          </li>
          <li className={style['graduates__cards-item']}>
            <GraduatesCard
              title={'Леван Лакия'}
              tag={'Су-шеф кондитер'}
              place={'Ресторан "D.O.M."'}
              year={'Выпускник 2024 года'}
              description={
                'В колледже царит атмосфера здоровой конкуренции и поддержки. Мы участвовали в конкурсах, проходили стажировки в лучших заведениях Сочи. Это дало возможность понять внутреннюю кухню ресторанного бизнеса'
              }
              source={Image3}
            />
          </li>
          <li className={style['graduates__cards-item']}>
            <GraduatesCard
              title={'Анна Васютина'}
              tag={'Повар'}
              place={'Ресторан "Chiko"'}
              year={'Выпускница 2024 года'}
              description={
                'Если вы мечтаете о карьере в кулинарии и ищете учебное заведение, которое даст вам реальные знания, навыки и мощный импульс для развития – Университетский колледж Сочинского государственного университета – это ваш выбор'
              }
              source={Image4}
            />
          </li>
          <li className={style['graduates__cards-item']}>
            <GraduatesCard
              title={'Никита Кубрак'}
              tag={'Шеф-кондитер'}
              place={'Ресторан "Дружба"'}
              year={'Выпускник 2017 года'}
              description={
                'Благодаря колледжу СочиГУ я смог получить необходимые навыки, сформировать правильное отношение к профессии, понять ее философию и ценности. Именно здесь я осознал, что кулинария – искусство, наука и постоянное самосовершенствование'
              }
              source={Image5}
            />
          </li>
          <li className={style['graduates__cards-item']}>
            <GraduatesCard
              title={'Сергей Ефимов'}
              tag={'Су-шеф'}
              place={'Ресторан "Мидийное место"'}
              year={'Выпускник 2025 года'}
              description={
                'Колледж обеспечил нас доступом к современному оборудованию и технологиям. Мы тренировались в условиях, максимально приближенных к реальной ресторанной кухне, чтобы быть готовыми к вызовам индустрии.'
              }
              source={Image6}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
