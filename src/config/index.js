/* eslint-disable linebreak-style */
const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://emanuflix.herokuapp.com';

export default {
  URL,
};
