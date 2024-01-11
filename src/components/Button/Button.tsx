import React from 'react';
import { ButtonPropTypes } from './Button.types';

function Button({ text, type, icon, onClick }: ButtonPropTypes) {
  return (
    <button onClick={onClick} className={`button ${type}`}>
      {text}
      {icon}
    </button>
  );
}

export default Button;
