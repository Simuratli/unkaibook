import React from 'react';
import { ButtonPropTypes } from './Button.types';

function Button({ text, type, icon }: ButtonPropTypes) {
  return (
    <button className={`button ${type}`}>
      {text}
      {icon}
    </button>
  );
}

export default Button;
