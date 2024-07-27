import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      // 'x-rapidapi-host': 'bayut.p.rapidapi.com',
      // 'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY ,
      'x-rapidapi-host' : 'bayut.p.rapidapi.com', 
      'x-rapidapi-key' : 'ea80e6be07msh5bf6a9ef5ace07fp18a6c5jsn692aec443b32',

    },
  });
    
  return data;
}

