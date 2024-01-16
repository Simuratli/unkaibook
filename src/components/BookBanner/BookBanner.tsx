import React from 'react';
import Image from 'next/image';

function BookBanner() {
  return (
    <Image
      className='bookBanner'
      src='https://uswalldecor.com/cdn/shop/files/RMK12541M.jpg?v=1695066227'
      width={1000}
      height={1000}
      alt='Harry Potter'
    />
  );
}

export default BookBanner;
