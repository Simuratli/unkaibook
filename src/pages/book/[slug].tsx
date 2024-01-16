import React from 'react';
import { BookBanner, Book, Button } from '@/components';
import { BUTTON_TYPE } from '@/types/global.types';
import { Books } from '@/containers';

function BookPage() {
  return (
    <div className='books bookPage'>
      <BookBanner />
      <div className='bookPage__content'>
        <div className='bookPage__downloadSection'>
          <Book imageUrl='https://m.media-amazon.com/images/I/71-++hbbERL._AC_UF894,1000_QL80_.jpg' />
          <Button type={BUTTON_TYPE.SECONDARY} text='Download' />
        </div>
        <div className='bookPage__description'>
          <h1>Harry Potter</h1>
          <h3>J.K.Rowling</h3>
          <p>{`Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's conflict with Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles (non-magical people).`}</p>
        </div>
      </div>

      <Books />
    </div>
  );
}

export default BookPage;
