import React from 'react';
import QuoteSign from '@/assets/images/quote.svg';
import Image from 'next/image';
import { QuotePropType } from './Quote.types';

const Quote = ({ quote, author }: QuotePropType) => {
  return (
    <div className='quote'>
      <div className='quote__sign'>
        <Image src={QuoteSign} width={150} height={100} alt='Quote sign' />
      </div>
      <div className='quote__text'>{`${quote}`}</div>
      <div className='quote__author'>{`— ${author}`}</div>
    </div>
  );
};

export default Quote;
