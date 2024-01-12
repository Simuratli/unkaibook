import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Book } from '@/components';
import 'swiper/css';
import 'swiper/css/free-mode';
import { fakeCategories } from './fakeCategories';

// import required modules
import Link from 'next/link';

function Categories() {
  return (
    <div className='categories'>
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
         className="mySwiper"
      >
        {fakeCategories.map((category, index) => {
          return (
            <SwiperSlide key={index}>
              <Link className='categories__card' href='/categories?category=fiction'>
                <Book imageUrl={category.image} />
                <h1>{category.categoryName}</h1>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Categories;
