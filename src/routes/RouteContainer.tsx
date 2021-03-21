import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Navigation from 'src/components/Navigation';
import SignIn from 'src/containers/SignIn';
import { routes } from './index';
import { loginStateVar } from 'src/store/LoginStore';

const RouteContainer: React.FC = () => {
  const { pathname } = useLocation();
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (loginStateVar()) setState(true);
    else setState(false);
  }, [pathname]);
  console.log('main', loginStateVar());
  return (
    <>
      {state ? (
        <>
          <Navigation />
          <Switch>
            {routes.map(({ path, component: Component, exact = true }, index) => (
              <Route exact={exact} path={path} key={index}>
                <Component loginStateVar={state} />
              </Route>
            ))}
          </Switch>
        </>
      ) : (
        <Route path="/signin" component={SignIn} />
      )}
    </>
  );
};
export default RouteContainer;
