import style from './Ticker.module.scss';
import Marquee from 'react-fast-marquee';

export const Ticker = () => {
  return (
    <section className={style['ticker']}>
      <Marquee
        speed={50}
        direction={'left'}
        pauseOnHover={false}
        gradient={true}
        gradientWidth={50}
        loop={0}
        className={style['ticker__content']}
      >
        <p className={style['ticker__content-text']}>Для тех, кто стремится к успеху и новым вершинам</p>
        <p className={style['ticker__content-text']}>Для выпускников школ</p>
        <p className={style['ticker__content-text']}>Для действующих работников индустрии питания</p>
        <p className={style['ticker__content-text']}>Всем, кто хочет изменить свою профессию</p>
        <p className={style['ticker__content-text']}>Для тех, кто стремится к успеху и новым вершинам</p>
        <p className={style['ticker__content-text']}>Для выпускников школ</p>
        <p className={style['ticker__content-text']}>Для действующих работников индустрии питания</p>
        <p className={style['ticker__content-text']}>Всем, кто хочет изменить свою профессию</p>
        <p className={style['ticker__content-text']}>Для тех, кто стремится к успеху и новым вершинам</p>
        <p className={style['ticker__content-text']}>Для выпускников школ</p>
        <p className={style['ticker__content-text']}>Для действующих работников индустрии питания</p>
        <p className={style['ticker__content-text']}>Всем, кто хочет изменить свою профессию</p>
      </Marquee>
    </section>
  );
};
