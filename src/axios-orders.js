import axios from 'axios';

const instance = axios.create({
  baseURL:'https://burger-a0648.firebaseio.com/'
});

export default instance;
