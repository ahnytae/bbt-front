import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Navigation from 'src/components/Navigation';
import { routes } from './index';

const RouteContainer: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // const onAtiveNavigation = () => {
  //   if(
  //     pathname.split('/')[1] !== 'home' &&
  //     pathname.split('/')[1] !== 'signin' &&
  //     pathname.split('/')[1] !== 'signup'
  //   ) {
  //     return <Navigation />
  //   }
  // }

  return (
    <>
      <Navigation />
      <Switch>
        {/* <Redirect exact path="/" to="/home" /> */}
        {routes.map(({ path, component: Component, exact = true }, index) => (
          <Route exact={exact} path={path} key={index}>
            <Component />
          </Route>
        ))}
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
};
export default RouteContainer;
