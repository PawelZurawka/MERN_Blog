//export const API_URL = '/api';

export const API_URL = process.env.API_URL
  ? process.env.API_URL
  : 'http://localhost:8000/api';
export const BASE_URL = 'https://blog-mernapp.herokuapp.com/';
