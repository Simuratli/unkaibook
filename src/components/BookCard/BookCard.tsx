import React from 'react';
import { Book } from '@/components';
import { BookCardPropTypes } from './BookCard.types';
import Link from 'next/link';
function BookCard({ imageUrl, url, title }: BookCardPropTypes) {
  return (
    <Link href={url} className='bookCard'>
      <Book imageUrl={imageUrl} />
      <h1>{title}</h1>
    </Link>
  );
}

export default BookCard;
