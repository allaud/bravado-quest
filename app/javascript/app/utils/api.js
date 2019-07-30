import { get } from './request';

export default {
  users: {
    list: get('/users.json'),
  },
};
