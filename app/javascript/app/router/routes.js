import UserPage from '../pages/UserPage';

const HOME_PATH = '/';
const SEARCH_PATH = '/search/:search?';

export default [
  {
    path: HOME_PATH,
    name: 'Home',
    component: UserPage,
  },
  {
    path: SEARCH_PATH,
    name: 'Search',
    component: UserPage,
  },
];
