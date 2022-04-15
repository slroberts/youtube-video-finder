import axios from 'axios';

const KEY = 'AIzaSyAlPHMierj0_iSEDDQKam36J0T6XOCPpj8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    key: KEY,
  },
});
