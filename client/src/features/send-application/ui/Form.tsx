'use client';
import Input from './input/Input';
import Checkbox from './checkbox/Checkbox';
import { Button } from '@/shared/ui';
import style from './Form.module.scss';
import useSubmit from '../api/useSubmit';

export const Form = () => {
  const { handleSubmit, formData, setFormData, status } = useSubmit();

  return (
    <form className={style['form']} onSubmit={handleSubmit}>
      <div className={style['form-body']}>
        <Input
          id={'name'}
          placeholder={'Имя'}
          type={'text'}
          label={'Имя'}
          value={formData.name}
          change={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          id={'tel'}
          placeholder={'+7(___)___-__-__'}
          type={'tel'}
          label={'Номер телефона'}
          value={formData.tel}
          change={(e) => setFormData({ ...formData, tel: e.target.value })}
          mask={true}
        />
        <Input
          id={'email'}
          placeholder={'Электронная почта'}
          type={'email'}
          label={'Электронная почта'}
          value={formData.email}
          change={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className={style['form-description']}>
        <div className={style['form-description-checkbox']}>
          <label htmlFor='footer-checkbox' className={'visually-hidden'}>
            Кнопка
          </label>
          <Checkbox />
        </div>
        <span className={style['form-description-text']}>
          Нажимая на кнопку, я соглашаюсь на обработку{' '}
          <a
            className={style['form-description-text--link']}
            href={'/document.pdf'}
            download={`Пользовательское соглашение.pdf`}
            target='_blank'
            rel='noopener noreferrer'
          >
            персональных данных
          </a>
        </span>
      </div>
      <Button isLinkToFooter={false} />
      {status === 'sending' ? (
        <div className={style['green']}>Идёт отправка...</div>
      ) : status === 'success' ? (
        <div className={style['green']}>Ваша заявка успешно отправлена!</div>
      ) : status === 'error' ? (
        <div className={style['red']}>Произошла ошибка при отправке, попробуйте ещё раз</div>
      ) : status === 'notValidName' ? (
        <div className={style['red']}>Имя введено неккоректно</div>
      ) : status === 'notValidNumber' ? (
        <div className={style['red']}>Номер телефона неккоректен</div>
      ) : (
        status === 'notValidEmail' && <div className={style['red']}>Почта введена неккоректно</div>
      )}
    </form>
  );
};
