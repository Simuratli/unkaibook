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
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In perspiciatis beatae ab, doloribus pariatur magnam iusto mollitia esse expedita illo possimus architecto sint consectetur laborum necessitatibus itaque aspernatur ipsa quidem! Recusandae atque eius magnam veniam corrupti fugit non, dicta deleniti voluptas autem quae blanditiis similique unde qui labore culpa corporis obcaecati voluptatum iure, accusantium perferendis magni perspiciatis neque. Ipsa amet doloribus earum ea id eum illum alias at, fugit, natus maiores quae perspiciatis, inventore reprehenderit aperiam. Cum laboriosam voluptates odio fugit iste aliquam ipsa reiciendis consequuntur recusandae. Illum nobis officia consequatur aliquid. Dolorum, corporis quasi. Dolor, voluptatibus dicta nulla alias quidem porro consequatur consequuntur vel nemo repellat laborum. Nam magnam aut similique quaerat, facere nemo eveniet libero rerum accusamus debitis illo pariatur nesciunt beatae sed atque at consequatur. Dignissimos quis corrupti velit, atque, repudiandae ullam voluptates ratione id voluptatibus ad animi quidem nam ducimus facilis! Numquam ea ipsa quae. Maxime quidem aliquid adipisci eveniet libero sunt pariatur, nam quibusdam quod!</p>
        </div>
      </div>

      <Books />
    </div>
  );
}

export default BookPage;
