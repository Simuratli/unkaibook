import axios from 'axios';

export const fetchQuotes = async () => {
  const category = 'happiness';
  const headers = {
    'X-Api-Key': process.env.QUOTE_API_KEY,
  };

  const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
    headers: headers,
  });
  const quote = response.data[0];

  return quote;
};
