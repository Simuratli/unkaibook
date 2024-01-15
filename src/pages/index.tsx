import React from 'react';
import { Categories, Books } from '@/containers';
import { BannerCard } from '@/components';
function Home() {
  return (
    <div className='main'>
      <Categories />
      <Books />
      <BannerCard />
      <Books />
    </div>
  );
}

export default Home;
