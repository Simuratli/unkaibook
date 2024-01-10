import React from 'react';
import { INPUT_TYPE } from '@/types/global.types';
import Search from '@/assets/search';
import { InputPropType } from './Input.types';

function Input({ type, placeholder }: InputPropType) {
  return (
    <div className='input__container'>
      {type === INPUT_TYPE.SEARCH && <Search />}
      <input type='text' className='input' placeholder={placeholder} />
    </div>
  );
}

export default Input;
