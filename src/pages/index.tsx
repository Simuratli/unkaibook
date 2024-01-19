import React from 'react';
import { Categories, Books } from '@/containers';
import { BannerCard, Quote } from '@/components';
import { HomePagePropTypes } from '@/types/pageProp.types';
// import { fetchQuotes } from '@/apis/fetchQuotes';
// import axios from 'axios';


// export const getStaticProps = async () => {
//   // const quote = await fetchQuotes();
//
//   const category = 'happiness';
//   const headers = {
//     'X-Api-Key': process.env.QUOTE_API_KEY,
//   };
//
//   const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
//     headers: headers,
//   });
//   const quote = response.data[0];
//
//
//   return {
//     props: { quote },
//   };
// };

export const getServerSideProps = (async () => {
  // Fetch data from external API
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const repo:any = await res.json()
  // Pass data to the page via props
  return { props: { res:'salam' } }
})


function Home({res}: { res:string }) {
  console.log(res)
  return (
    <div className='main'>
      {/*{quote && <Quote quote={quote.quote} author={quote.author} />}*/}
      <Categories />
      <Books />
      <BannerCard />
      <Books />
    </div>
  );
}



export default Home;
