import UsersPage from '../pages/UsersPage';

const HOME_PATH = '/';
const SEARCH_PATH = '/search/:search?';

export default [
  {
    path: HOME_PATH,
    name: 'Home',
    component: UsersPage,
  },
  {
    path: SEARCH_PATH,
    name: 'Search',
    component: UsersPage,
  },
];
