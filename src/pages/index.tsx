import React from 'react';
import { Categories, Books } from '@/containers';
import { BannerCard, Quote } from '@/components';
import { HomePagePropTypes } from '@/types/pageProp.types';
import { fetchQuotes } from '@/apis/fetchQuotes';
function Home({ quote }: HomePagePropTypes) {

  return (
    <div className='main'>
      {quote && <Quote quote={quote.quote} author={quote.author} />}
      <Categories />
      <Books />
      <BannerCard />
      <Books />
    </div>
  );
}

export const getStaticProps = async () => {
  const quote = await fetchQuotes();
  return {
    props: { quote },
  };
};

export default Home;
