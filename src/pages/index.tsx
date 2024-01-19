import React from 'react';
import { Categories, Books } from '@/containers';
import { BannerCard, Quote } from '@/components';
// import { HomePagePropTypes } from '@/types/pageProp.types';
// import { fetchQuotes } from '@/apis/fetchQuotes';
import axios from 'axios';
function Home() {

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
  // const quote = await fetchQuotes();

  const category = 'happiness';
  const headers = {
    'X-Api-Key': process.env.QUOTE_API_KEY,
  };

  const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
    headers: headers,
  });
  const quote = response.data[0];


  return {
    props: { quote },
  };
};

export default Home;
