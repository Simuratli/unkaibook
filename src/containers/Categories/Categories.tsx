import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Book, Button } from '@/components';
import { BUTTON_TYPE } from '@/types/global.types';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
// import required modules
import Link from 'next/link';

function Categories() {
  return (
    <div className='categories'>
      <div className='categories__header'>
        <h1>Categories</h1>
        <Button type={BUTTON_TYPE.VIEW} text='view more' />
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 12,
            spaceBetween: 10,
          },
          1224: {
            slidesPerView: 16,
            spaceBetween: 10,
          },
        }}
        modules={[FreeMode]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <Link className='categories__card' href='/categories?category=fiction'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Fiction</h1>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Categories;
