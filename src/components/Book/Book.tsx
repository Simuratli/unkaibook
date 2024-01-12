import React, { useState, useEffect } from 'react';
import BookImage from '@/assets/book';
import { getColor } from 'color-thief-react';

function Book({ imageUrl }: { imageUrl: string }) {
  const [bookColor, setBookColor] = useState<string>('#C88C35');

  useEffect(() => {
    // You can add your logic to fetch an image URL or use a local image

    // Call the ColorThief component with the image URL
    getColor(imageUrl, 'hex', 'anonymous')
      .then((color) => {
        setBookColor(color);
      })
      .catch((error) => {
        console.error('Error extracting color:', error);
      });
  }, [imageUrl]);

  return (
    <div className='book'>
      <BookImage color={bookColor} />
      <img src={imageUrl} alt='' />
    </div>
  );
}

export default Book;
