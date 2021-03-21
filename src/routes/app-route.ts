import Question from 'src/containers/Main/Question';
import QuestionDetail from 'src/containers/Main/QuestionDetail';
import QuestionList from 'src/containers/Main/QuestionList';
import QuestionResult from 'src/containers/Main/QuestionResult';
import MainContainer from '../containers/Main';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import { PathItem } from '../models/route.model';

export const appRoutes: PathItem[] = [
  {
    path: '/home',
    component: MainContainer,
    exact: true,
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
  {
    path: '/question',
    component: Question,
    exact: true,
  },
  {
    path: '/question/list',
    component: QuestionList,
    exact: true,
  },
  {
    path: '/question/result',
    component: QuestionResult,
    exact: true,
  },
  {
    path: '/question/:id',
    component: QuestionDetail,
    exact: false,
  },
];

export default appRoutes;
