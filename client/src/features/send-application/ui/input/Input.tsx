import style from './Input.module.scss';
import type { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import React from 'react';
import { IMaskInput } from 'react-imask';

interface InputProps {
  id: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  label: string;
  value: string;
  change: ChangeEventHandler<HTMLInputElement>;
  mask?: boolean;
}

const Input: React.FC<InputProps> = ({ id, placeholder, type, label, value, change, mask }) => {
  return (
    <div className={style['input']}>
      <label htmlFor={id} className={'visually-hidden'}>
        {label}
      </label>
      {mask ? (
        <IMaskInput
          className={style['input__main']}
          type={type}
          placeholder={placeholder}
          required={true}
          id={id}
          name={id}
          value={value}
          onChange={change}
          mask={'+7(000)000-00-00'}
          placeholderChar={'_'}
        />
      ) : (
        <input
          className={style['input__main']}
          type={type}
          placeholder={placeholder}
          required={true}
          id={id}
          name={id}
          value={value}
          onChange={change}
        />
      )}
    </div>
  );
};

export default Input;
