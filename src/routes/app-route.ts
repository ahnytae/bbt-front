import MainContainer from '../containers/Main';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import {PathItem} from '../models/route.model';

export const appRoutes: PathItem[] = [
  {
    path: '/home',
    component: MainContainer,
    exact: false,
  },
  {
    path: '/signin',
    component: SignIn,
    exact: true,
  },
  {
    path: '/signup',
    component: SignUp,
    exact: true,
  },
];

export default appRoutes;
