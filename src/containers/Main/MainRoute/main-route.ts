import { PathItem } from "src/models/route.model";
import Question from '../Question';
import QuestionList from '../QuestionList';
import QuestionDetail from '../QuestionDetail';
import QuestionResult from '../QuestionResult';


export const mainRoutes: PathItem[] = [
  {
    path: '/home/question',
    component: QuestionList,
    exact: true,
  },
  {
    path: '/home/question/:id',
    component: QuestionDetail,
    exact: false,
  },
]
  