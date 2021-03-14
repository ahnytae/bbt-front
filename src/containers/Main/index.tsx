import React from 'react';
import { Route, Switch, useParams, withRouter } from 'react-router';
import Navigation from 'src/components/Navigation';
import styled, {css} from 'styled-components';
import { routes } from './MainRoute';
import Question from './Question';
import QuestionResult from './QuestionResult';

const StyledWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  height: ${({theme}) => css`
    background: ${theme?.primaryColors.dkGreyBg};
    @media ${theme?.breakpoints.laptop} {
      flex-direction: column;
    }
  `};
`;


const MainContainer: React.FC = () => {
  const {id} = useParams<{id: string}>();

  return (
    <StyledWrap>
      <Navigation />
      <Route exact path="/home" component={Question} />
      <Route path="/home/result" component={QuestionResult} />
      <Switch>
        {routes.map(({ path, component: Component, exact = true }, index) => (
          <Route exact={exact} path={path} key={index}>
            <Component />
          </Route>
        ))}
      </Switch>
    </StyledWrap>
  );
};

export default withRouter(MainContainer);
