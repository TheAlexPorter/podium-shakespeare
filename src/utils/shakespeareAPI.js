import axios from 'axios';
import { API_KEY, API_URL } from '../config';

export default async () => {
  const response = await axios.get(API_URL, {
    headers: { 'x-api-key': API_KEY }
  });

  return response.data;
};
