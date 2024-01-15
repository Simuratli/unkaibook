import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Book } from '@/components';
import 'swiper/css';
import 'swiper/css/free-mode';
// import required modules
import Link from 'next/link';
import Next from '../../assets/next';
import { type Swiper as SwiperRef } from 'swiper';

function Books() {
  const sliderRef = useRef<SwiperRef | null>(null);

  return (
    <div className='books'>
      <div className='books__header'>
        <h1>
          Popular <span>books</span>
        </h1>
        <div className='books__header__buttons'>
          <button
            onClick={() => {
              sliderRef.current?.slidePrev();
            }}
            className='books__prev'
          >
            <Next />
          </button>
          <button
            onClick={() => {
              sliderRef.current?.slideNext();
            }}
            className='books__next'
          >
            <Next />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        onSwiper={(swiper) => {
          sliderRef.current = swiper;
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1224: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        className='mySwiper'
      >
        <SwiperSlide>
          <Link className='books__card' href='/books?category=Tolstoy'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Tolstoy</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='books__card' href='/books?category=Tolstoy'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Tolstoy</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='books__card' href='/books?category=Tolstoy'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Tolstoy</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='books__card' href='/books?category=Tolstoy'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Tolstoy</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='books__card' href='/books?category=Tolstoy'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Tolstoy</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='books__card' href='/books?category=Tolstoy'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Tolstoy</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='books__card' href='/books?category=Tolstoy'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Tolstoy</h1>
          </Link>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <Link className='books__card' href='/books?category=Tolstoy'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Tolstoy</h1>
          </Link>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <Link className='books__card' href='/books?category=Tolstoy'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Tolstoy</h1>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='books__card' href='/books?category=Tolstoy'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Tolstoy</h1>
          </Link>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <Link className='books__card' href='/books?category=Tolstoy'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Tolstoy</h1>
          </Link>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <Link className='books__card' href='/books?category=Tolstoy'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Tolstoy</h1>
          </Link>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <Link className='books__card' href='/books?category=Tolstoy'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Tolstoy</h1>
          </Link>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <Link className='books__card' href='/books?category=Tolstoy'>
            <Book
              imageUrl={
                'https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg'
              }
            />
            <h1>Tolstoy</h1>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Books;
