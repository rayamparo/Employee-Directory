import axios from 'axios';

export default {
  randomUsers: function(number) {
    return axios.get(`https://randomuser.me/api/?results=${number}&nat=us`);
  }
};